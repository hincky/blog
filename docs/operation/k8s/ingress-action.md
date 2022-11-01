---
title: ingress-action
date: 2022-10-12 20:26:02
permalink: /pages/d7f9a4/
categories:
  - operation
  - k8s
tags:
  - 
---
# ingress controller实战

> 本文讲述如何在k8s集群中部署nginx ingress controller

大致步骤
1. 给nic创建namespace
2. deployment部署nic的pod
3. service对外暴露nic的pod，以供访问


获取yaml文件

```bash
wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```
