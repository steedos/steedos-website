# MAC安装开发环境
## 安装NodeJS
请安装与操作系统对应的NodeJS v10.x版本</br>
具体操作如下：<br/>
##### 安装brew
```bash
/usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
##### 安装nvm
```bash
brew install nvm
```
##### 下载yarn
```bash
brew install yarn
```
##### 查看NodeJS版本
```bash
brew install nvm
```
##### 下载NodeJS v10.x版本
```bash
sudo n 10.0.0
```
## 安装数据库服务器
请安装 [MongoDB Community Server v3.6 版本](https://www.mongodb.com/download-center/community) <br/>
具体操作如下:<br/>
#### 方法一：
1. 下载下来之后将文件移入 /usr/local里面
2. 新建终端  输入
```bash
vi./.bash_profile
MONGODB_HOME=/usr/local/mongodb
PATH=$MONGODB_HOME/bin:$PATH
source .bash_profile
```
3. 打开终端，进入到mongodb目录，执行以下代码开启服务:
```bash
mongod —path —log path log/mongod.log —logappend —port=27017 —fork
```
#### 方法二：
1. 终端输入：
```bash
brew tap mongodb/brew
brew install mongodb-community@3.6
```
2. mongo作为服务运行
```bash
brew services start mongodb-community@3.6
```
## 安装 steedos 客户端工具
```bash
yarn global add steedos-cli
```
## 安装版本管理工具（可选）
请安装 [ Github Desktop](https://desktop.github.com/) ,用于管理项目源码。如果您还没有Github账户，建议您先注册一个。
## 安装源码编辑工具 (可选)
请安装 [Visual Studio Code](https://code.visualstudio.com/)。并安装 Steedos 集成插件[redhat.vscode-yaml](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) ,您在编写配置文件时如果有语法错误，Visual Studio Code 会自动提示。
