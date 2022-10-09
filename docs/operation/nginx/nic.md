# 安装nginx ingress controller

## 对应好版本

[nginx ingress controller官网地址](https://docs.nginx.com/nginx-ingress-controller/)

下图给出了NIC和k8s的版本匹配关系图
![](./img/suppot-k8s-version.png)

笔者的k8s集群是1.24，所以对应安装2.3.1的NIC即可

[其他NIC版本参考官网github](https://github.com/nginxinc/kubernetes-ingress/releases)

## helm安装NIC

> 本文介绍的是helm的方式安装

[更多安装方式参考官网地址](https://docs.nginx.com/nginx-ingress-controller/installation/)

将项目克隆到本地，注意**对应好版本**

```bash
git clone https://github.com/nginxinc/kubernetes-ingress.git --branch v2.3.1

cd kubernetes-ingress/deployments/helm-chart
```

添加chart

```bash
helm repo add nginx-stable https://helm.nginx.com/stable
helm repo update
```

## 安装步骤

有了chart资源后，就能安装nginx了，下面二者选其一

- 通过chart资源
```bash
helm install my-release .
```

- 通过helm仓库
```bash
helm install my-release nginx-stable/nginx-ingress
```

## nginx命令

|命令|说明|
|:---:|:---:|
|nginx ||
|||
