---
title: service
date: 2022-10-12 20:26:02
permalink: /pages/efe2c4/
categories: 
  - operation
  - k8s
tags: 
  - null
author: 
  name: hincky
  link: https://github.com/hincky
---
# service

它是 Kubernetes 内置的负载均衡机制:

1. 使用静态 IP 地址代理动态变化的 Pod
2. 支持域名访问和服务发现，是微服务架构必需的基础设施。



`Service` 本身是没有服务能力的，它只是一些 `iptables` 规则。

节点里的 `kube-proxy` 组件才是真正配置、应用这些规则的。如果没有 `kube-proxy`，`Service` 定义得再完善也没有用。


## 实战：如何用yaml编写service，kube-proxy

首先用命令 `kubectl api-resources` 查看它们的基本信息

```bash
kubectl api-resources | grep services 
```

打印结果

```bash
[root@master deployment]# kubectl api-resources | grep services
services      svc      v1      true      Service
```