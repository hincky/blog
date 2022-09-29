# VuePress

这是一个vuepress个人博客的项目

这是[vuepress官方网址](https://vuepress.vuejs.org/zh/)，由于v2版本还在beta测试阶段，所以推荐使用v1的稳定版本

## 环境准备
必备组件
- nodejs 8.6及以上版本
- 包管理器 yarn或者npm

运行环境
- docker运行（本文档使用该方式）
- 服务器直接运行


## 项目运行
> 下面两种方式二选一即可
### 下载安装好环境的镜像
我将之前运行的docker镜像打包上传了，里面已经有相应的组件和环境，图快图省事的可以直接拉取镜像到本地运行即可。缺点是镜像800+MB，不过docker pull的速度也还好，可以接受。

```
docker pull hincky/vuepress 
docker run -itd -p 2280:8080 --name=vuepress hincky/vuepress:latest
docker exec -it vuepress /bin/bash

cd
cd vuepress

yarn init                # npm init
yarn add -D vuepress     # npm install -D vuepress
yarn docs:dev            # npm run docs:dev
```

### 自有服务器或docker从头开始配置环境
#### 一 跑一个linux镜像 (不用docker的直接跳到ubuntu换源)
连接远程服务器，跑一个linux镜像（这里的Ubuntu是20.04），暴露8080端口
```
docker pull ubuntu:latest
docker run -itd -p 2280:8080 --name=blog ubuntu:latest
docker exec -it blog /bin/bash
```
#### 二 Ubuntu换国内阿里源
```
cp /etc/apt/sources.list /etc/apt/sources.list.bak
cat > /etc/apt/sources.list <<EOF
deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
# deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
EOF

apt-get update
```

#### 三 安装相关组件
1. 默认下载的nodejs版本较低，curl下载了v16的版本
2. 包管理器yarn和npm二者选其一就可以了，两个都下载也行
3. 默认下载的yarn可能是0.32+git版本，需要通过下面给出的命令升级到高版本，关掉窗口或者容器再重新进入，yarn升级才生效
4. 但是在操作yarn或者npm时，选择其中一个就行了（不能同时用两个杯喝水）
```
apt install sudo curl git -y
git --version

apt install nodejs -y  
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt-get install nodejs -y   
node -V

apt install yarn -y 
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
yarn --version

apt install npm -y
npm install -g npm@8.19.2
npm version

npm config set registry https://registry.npm.taobao.org
npm config get registry


git clone https://gitee.com/hincky/vuepress.git
cd vuepress
yarn init                # npm init
yarn add -D vuepress     # npm install -D vuepress
yarn docs:dev            # npm run docs:dev
```

## 项目访问
如果是服务器访问自身运行的vuepress项目
直接打开http://localhost:8080

如果是通过上述的方法，在远程服务器通过docker运行的容器项目
1. 开启服务器对外的安全组2280端口
2. 访问http://xxxx:2280  其中xxxx是服务器对外的IP地址

