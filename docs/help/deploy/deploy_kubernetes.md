---
title: 部署到 Kubernetes (k8s)
---

华炎魔方是 Kubernetes 原生的低代码开发平台。本教程指导您如何将华炎魔方租户部署到私有和公共云基础架构（“混合”云）上。

## 创建一个华炎魔方租户

每个华炎魔方租户包含以下内容：

- MongoDB 数据库
- MinIO 对象存储
- Steedos 华炎魔方

部署前需要考虑以下基础配置：

- STEEDOS_TENANT_ID: 华炎魔方租户 ID，随机生成。
- STEEDOS_ROOT_URL: 华炎魔方对外访问的 URL。
- STEEDOS_PORT: 华炎魔方的服务端口。
- STEEDOS_SERVERS: 华炎魔方服务器数量。
- MONGODB_SERVERS: MONGODB 服务器数量。
- MINIO_SERVERS: MinIO 服务器数量。
- MINIO_VOLUMES_PER_SERVER: MinIO 单个服务器的硬盘数量。
- MINIO_VOLUME_STORAGE: MinIO 单个硬盘的容量。

### 创建 Namespace

为了实现多租户的完全隔离，我们建议为每个租户创建一个单独的 Namespace, 更安全的做法是 [创建独立的 vClusters](https://loft.sh/features/virtual-kubernetes-clusters).

创建 Namespace 描述文件： ${STEEDOS_TENANT_ID}.yaml

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: ${STEEDOS_TENANT_ID}
```

使用命令或使用 Kubernetes API 加载此文件，创建一个namespace。

```sh
kubectl create -f ./${STEEDOS_TENANT_ID}.yaml
```

### 部署 MongoDB

部署前需要先安装 MongoDB Kubernetes Operator，具体文档请参考：

- [Install the MongoDB Enterprise Kubernetes Operator](https://docs.mongodb.com/kubernetes-operator/master/tutorial/install-k8s-operator/)
- [Install the MongoDB Community Kubernetes Operator](https://github.com/mongodb/mongodb-kubernetes-operator)

本教程以社区版为例。

创建 MongoDB 租户描述文件：mongodb.yaml

```yaml
apiVersion: mongodb.com/v1
kind: MongoDBCommunity
metadata:
  name: mongodb-${STEEDOS_TENANT_ID}
spec:
  members: ${MONGODB_SERVERS}
  type: ReplicaSet
  version: "4.2.6"
```

使用命令或使用 Kubernetes API 加载此文件，部署 MongoDB。

```sh
kubectl create -f ./mongodb.yaml --namespace ${STEEDOS_TENANT_ID}
```

### 部署 MinIO

部署前需要先安装 MinIO Kubernetes Operator，具体文档请参考：

- [MinIO Kubernetes Operator](https://github.com/minio/operator)

创建 MinIO 租户描述文件：minio.yaml

```yaml
apiVersion: minio.min.io/v2
kind: Tenant
metadata:
  name: minio
  labels:
    app: minio
  annotations:
    prometheus.io/path: /minio/prometheus/metrics
    prometheus.io/port: "9000"
    prometheus.io/scrape: "true"

spec:
  image: minio/minio:RELEASE.2020-12-23T02-24-12Z
  imagePullPolicy: IfNotPresent

  credsSecret:
    name: minio-creds-secret

  pools:
    - servers: ${MINIO_SERVERS}

      volumesPerServer: ${MINIO_VOLUMES_PER_SERVER}

      volumeClaimTemplate:
        metadata:
          name: data
        spec:
          accessModes:
            - ReadWriteOnce
          resources:
            requests:
              storage: ${MINIO_VOLUME_STORAGE}

  mountPath: /export

  console:
    image: minio/console:v0.5.2
    replicas: 1
    consoleSecret:
      name: console-secret
```


使用命令或使用 Kubernetes API 加载此文件，部署MinIO。

```sh
kubectl create -f ./minio.yaml --namespace ${STEEDOS_TENANT_ID}
```

### 部署 Steedos 

创建 Steedos 租户描述文件：steedos.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: steedos
spec:
  replicas: ${STEEDOS_SERVERS}
  template:
    metadata:
      labels:
        app: steedos
    spec:
      containers:
        - name: steedos-community
          image: steedos-community@1.23
          ports:
            - containerPort: 3000
        - env:
            - name: MONGO_URL
              value: mongodb://mongo-0.mongo,mongo-1.mongo,mongo-2.mongo:27017/steedos?replicaSet=rsSteedos
            - name: PORT
              value: "3000"
            - name: ROOT_URL
              value: http://localhost:5080
```

使用命令或使用 Kubernetes API 加载此文件，部署 Steedos。

```sh
kubectl create -f ./steedos.yaml --namespace ${STEEDOS_TENANT_ID}
```


### 部署 Steedos 对外访问服务

创建服务描述文件： steedos-service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: steedos-service
spec:
  selector:
    app: steedos
  ports:
    - protocol: TCP
      port: ${STEEDOS_PORT}
      targetPort: 3000
```

使用命令或使用 Kubernetes API 加载此文件，部署 Steedos Service

```sh
kubectl create -f ./steedos.yaml --namespace ${STEEDOS_TENANT_ID}
```

## 使用 Kubernetes API 创建租户


按照前述 “创建一个华炎魔方租户” 步骤，依此调用 Kubernetes API 对应的标准接口，加载相应的 yml 文件，即可实现自动化创建租户。

### 部署 Steedos 

HTTP 请求

```
POST /apis/apps/v1/namespaces/${STEEDOS_TENANT_ID}/deployments
```

Header 参数

```
Content-Type: application/yaml
```

Body 参数

```
body: ${YAML文件内容}
```

完整实例

```shell
$ kubectl proxy
$ curl -X POST -H 'Content-Type: application/yaml' --data '
apiVersion: apps/v1
kind: Deployment
metadata:
  name: steedos
spec:
  replicas: ${STEEDOS_SERVERS}
  template:
    metadata:
      labels: 
        app: steedos
    spec:     
      containers: 
      - name: steedos-community
        image: steedos-community@1.23
        ports:
        - containerPort: 3000
' http://127.0.0.1:8001/apis/apps/v1/namespaces/${STEEDOS_TENANT_ID}/deployments

```