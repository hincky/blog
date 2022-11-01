---
title: deployment
date: 2022-10-12 20:26:01
permalink: /pages/4271a1/
categories:
  - operation
  - k8s
tags:
  - 
---
# deployment 工作负载

Deployment，是一个定义多副本应用（即多个副本 Pod）的对象

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
```

使用一种 API 对象（Deployment）管理另一种 API 对象

Deployment 扮演的正是 Pod 的控制器的角色:
Deployment通过 spec.selector.matchLabels 字段（app: nginx）从 Kubernetes 中过滤出它所关心的被控制对象
