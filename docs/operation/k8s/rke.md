---
title: rke
date: 2022-10-12 20:26:02
permalink: /pages/ee79cb/
categories:
  - operation
  - k8s
tags:
  - 
---
# rke install kubernetes
没有特殊标明，就是所有主机都要进行操作

## 前期准备

centos
docker-ce 20.10.12
k8s v1.22.5

m1    controlplane,rancher,rke
n1    worker
n2    worker
etcd1 etcd

hostnamectl set-hostname master

cat >> /etc/hosts << EOF
127.0.0.1   $(hostname)
10.0.20.6   master
10.0.8.13   node2
10.0.8.12   node1
43.138.161.91   master
43.138.197.127   node2
43.138.215.165   node1
EOF

mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo

yum makecache


mv /etc/yum.repos.d/CentOS-Stream-BaseOS.repo /etc/yum.repos.d/CentOS-Stream-BaseOS.repo.backup

wget -O /etc/yum.repos.d/CentOS-Stream-BaseOS.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo

yum makecache


#### 手动修改

```bash
vim /etc/sysctl.conf

net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
```

```bash
modprobe br_netfilter
sysctl -p /etc/sysctl.conf
```

#### 代码自动修改

```bash
sed -ri 's/net.ipv4.ip_forward.*/net.ipv4.ip_forward = 1/' /etc/sysctl.conf
sed -ri 's/net.bridge.bridge-nf-call-ip6tables.*/net.bridge.bridge-nf-call-ip6tables = 1/' /etc/sysctl.conf
sed -ri 's/net.bridge.bridge-nf-call-iptables.*/net.bridge.bridge-nf-call-iptables = 1/' /etc/sysctl.conf

cat /etc/sysctl.conf
modprobe br_netfilter
sysctl -p /etc/sysctl.conf
```

### 关闭防火墙和selinux

```bash
systemctl disable firewalld && systemctl stop firewalld

firewall-cmd --state

sed -ri 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config
```

#### sed用法

sed -ri 's/text=before/text=after/'  file

s表示替换，将后面的替换到前面

### 关闭swap
 
 sed -ri 's/.*swap.*/#&/' /etc/fstab

 ### 时间同步

 yum install -y ntpdate

 crontab -e 
 0 */1*** ntpdate time1.aliyun.com


## install docker

### 配置docker yum源

wget -O /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

### install docker 

yum -y install docker-ce

systemctl enable docker && systemctl start docker

### 配置docker容器镜像加速器

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://mvl6n9ol.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## install docker compose

sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

docker-compose --version

## add rancher user

使用centos的rke，不能用root，所以添加专门的账号进行docker操作

useradd rke

usermod -aG docker rke

cat /etc/group | grep docker 

echo zxcvbnm | passwd --stdin rke

## 生成ssh证书用于部署集群

rke部署过程要用rke用户登录到每台主机进行操作

root生成就行
ssh-keygen

ssh-copy-id rke@master
ssh-copy-id rke@node1
ssh-copy-id rke@node2



### 验证ssh证书是否可用

ssh rke@master
docker ps
exit

ssh rke@node1
docker ps
exit

ssh rke@node2
docker ps
exit

## install rke

```bash
wget https://github.com/rancher/rke/releases/download/v1.3.15/rke_linux-amd64 && mv rke_linux-amd64 rke

chmod +x rke && rke --version
```
下表是这个rke版本支持k8s版本，如果要装其他版本的rke，[参考github官网](https://github.com/rancher/rke/releases)

|Kubernetes support|
|:---:|
|v1.24.4-rancher1-1 (Default)|
|v1.23.10-rancher1-1|
|v1.22.13-rancher1-1|
|v1.21.14-rancher1-1|
|v1.20.15-rancher2-2|
|v1.19.16-rancher2-1|
|v1.18.20-rancher1-3|

下面安装k8s版本，我选了`v1.21.14-rancher1`

## init rke config.yaml

```bash
mkdir -p /app/rancher

cd /app/rancher

rke config --name cluster.yaml
```

```
ssh key path: 
number of hosts:3
address of host1:10.0.20.6
port:
ssh private key of host : ~/.ssh/id_rsa
user:rke
control:y
worker:n
etcd:n
hostname:master
internal ip:
docker socket path:

ssh address of host:10.0.8.12
port:
ssh private key of host : ~/.ssh/id_rsa
user:rke
control:n
worker:y
etcd:n
hostname:node1
internal ip:
docker socket path:

ssh address of host:10.0.8.13
port:
ssh private key of host : ~/.ssh/id_rsa
user:rke
control:n
worker:n
etcd:y
hostname:node2
internal ip:
docker socket path:
...
kubernetes docker image [这个默认是最新的实验版本，一定要改成稳定版本]:rancher/hyperkube:v1.22.5-rancher1

rancher/hyperkube:v1.21.14-rancher1
cluster domain: kube.hincky.com
...


如果要部署kubeflow或istio就一定要再kube-controller:配置下面参数
cluster-signing-cert-file: "/etc/kubernetes/ssl/kube-ca.pem"
cluster-signing-key-file: "/etc/kubernetes/ssl/kube-ca-key.pem"
```

## 集群部署

```bash
su rke 
cd

rke up # 默认就是--config cluster.yaml
```

期间出现错误的话，重新rke up就好了。。。


## install kubectl 

```bash
cat > /etc/yum.repos.d/kubernetes.repo << END
[kubernetes]
name = kubernetes
baseurl = https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
gpgchek = 1
gpgkey = https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
         https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
enable = 1
END

yum -y install kubectl-1.21.14

kubectl version --client
```

### 让kubectl 访问到集群

```bash
ls /app/rancher

mkdir ~/.kube

cp /app/rancher/kube_config_cluster.yml /root/.kube/config # 如果是卸载重装，这一步要用y确认

kubectl get nodes

kubectl get po -A
```

## 部署rancher管理k8s集群

```bash
docker run -d --restart=unless-stopped --privileged --name rancher -p 80:80 -p 443:443 rancher/rancher:v2.5.13

```

然后根据ip访问你的rancher即可


### 将本地集群添加到rancher

先切换rancher界面的语言为中文，右下角切换

rancher界面-添加集群-导入-定义集群名称-保存

如果没有配置ssl证书，就拷贝最下面的命令到kubectl节点上执行

curl --insecure -sfL https://kube.hincky.com/v3/import/svvjpznpxgl49h9wq5hbc9vtwbpcbn9l75s6twpkswslqh9sq42vt9_c-4lq9p.yaml | kubectl apply -f -

等待一会儿再看rancher即可

## 集群节点更新
> 注意

主机在添加到集群之前，环境准备要与已在集群的主机环境一致，所以上面除rke的步骤之外，都要重复一遍

### 添加worker节点

再修改cluster.yml

```bash
- address: 10.0.20.6
  port: "22"
  internal_address: ""
  role:
  - worker
  hostname_override: ""
  user: rke
  docker_socket: /var/run/docker.sock
  ssh_key: ""
  ssh_key_path: ~/.ssh/id_rsa
  ssh_cert: ""
  ssh_cert_path: ""
  labels: {}
  taints: []

```

rke up --update-only

### 添加/删除etcd节点

再修改cluster.yml

```bash
- address: 10.0.8.13
  port: "22"
  internal_address: ""
  role:
  - etcd
  hostname_override: ""
  user: rke
  docker_socket: /var/run/docker.sock
  ssh_key: ""
  ssh_key_path: ~/.ssh/id_rsa
  ssh_cert: ""
  ssh_cert_path: ""
  labels: {}
  taints: []
  ```

rke up --update-only

kubectl get nodes

## 部署nginx

vim nginx.yml



vim nginx-service.yml



## 部署nginx-ingress

```bash
cd
wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/baremetal/deploy.yaml

docker pull liangjw/kube-webhook-certgen:v1.1.1
docker pull liangjw/ingress-nginx-controller:v1.1.1
docker images
```

修改 deploy.yaml

vim deploy.yaml

```yaml
spec:
  type: NodePort
  ipFamilyPolicy: SingleStack
  ipFamilies:
    - IPv4
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: http
      appProtocol: http
      nodePort: 30080
    - name: https
      port: 443
      protocol: TCP
      targetPort: https
      appProtocol: https
      nodePort: 30443
  selector:
    app.kubernetes.io/name: ingress-nginx
    app.kubernetes.io/instance: ingress-nginx
    app.kubernetes.io/component: controller
---

```

```yaml
dnsPolicy: ClusterFirst
      containers:
        - name: controller
          # image: k8s.gcr.io/kube-webhook-certgen:v1.1.1@sha256:0bc88eb15f9e7f84e8e56c14fa5735aaa488b840983f87bd79b1054190e660de
          image: docker.io/liangjw/ingress-nginx-controller:v1.1.1
          imagePullPolicy: IfNotPresent
          lifecycle:
            preStop:
              exec:
                command:
                  - /wait-shutdown
...
    spec:
      containers:
        - name: create
          # image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1@sha256:64d8c73dca984af206adf9d6d7e46aa550362b1d7a01f3a0a91b20cc67868660
          image: docker.io/liangjw/kube-webhook-certgen:v1.1.1
          imagePullPolicy: IfNotPresent
...
    spec:
      containers:
        - name: patch
          # image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1@sha256:64d8c73dca984af206adf9d6d7e46aa550362b1d7a01f3a0a91b20cc67868660
          image: docker.io/liangjw/kube-webhook-certgen:v1.1.1
          imagePullPolicy: IfNotPresent
```

kubectl apply -f deploy.yaml
