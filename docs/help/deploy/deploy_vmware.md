---
title: VMware 快速安装
---

## ubuntu 桌面版 vmware 镜像导入说明(steedos-project-oa 项目)

1. 下载 vmware，
   macOS 可以安装 [VMware Fusion](https://www.vmware.com/cn/products/fusion/fusion-evaluation.html)；
   windows 可以安装 [Workstation Pro](https://www.vmware.com/go/downloadworkstation-cn)

2. 下载[steedos-project-oa 虚拟机镜像](http://server-backups.oss-cn-beijing.aliyuncs.com/vmware-images/steedos-project-oa-trial.zip)，并解压；

3. 打开 vmware 点击打开虚拟机文件，选择解压后 steedos-project-oa-trial 文件夹下的 **ovf** 文件，并导入；

4. 打开 vmware 编辑-虚拟网络编辑器，设置桥接模式桥接到当前网卡；

5. 启动并登陆进虚拟机，用户名：**steedos**，密码：**huayanyun** ；

6. 桌面右击打开终端进入项目目录启动服务；

- `cd ~/steedos-project-oa`
- `pm2 start server.js`
  > 重启服务命令为 `pm2 restart server.js`

7. 执行`ip addr` 查看本机 ip，网卡 2：ens160 下为自动获取的 ip；

8. 浏览器访问系统 `http://{虚拟机ip}:5080`，创建账户；

9. 如需要在虚拟机中开发，应用中已预先安装了 vs code 编辑工具。
