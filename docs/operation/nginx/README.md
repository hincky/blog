# nginx

## k8s 安装nginx



# 安装nginx ingress controller

[nginx ingress controller官网地址](https://docs.nginx.com/nginx-ingress-controller/)

> 本文介绍的是helm的方式安装

[利用k8s的manifest方式安装](https://docs.nginx.com/nginx-ingress-controller/installation/installation-with-manifests/)

[利用helm方式安装](https://docs.nginx.com/nginx-ingress-controller/installation/installation-with-helm/)

将项目克隆到本地

```bash
git clone https://github.com/nginxinc/kubernetes-ingress.git --branch v2.4.0

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
