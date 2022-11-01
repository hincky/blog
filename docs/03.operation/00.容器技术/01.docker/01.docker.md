---
title: docker
date: 2022-10-12 20:26:01
permalink: /pages/77610c/
categories: 
  - operation
  - docker
tags: 
  - null
author: 
  name: hincky
  link: https://github.com/hincky
---
# docker

一个“容器”，实际上是一个由`Linux Namespace`、`Linux Cgroups`和`rootfs`三种技术构建出来的进程的隔离环境。

一个正在运行的 Linux 容器，其实可以被“一分为二”地看待：
- 一组联合挂载在 /var/lib/docker/aufs/mnt 上的 rootfs，这一部分我们称为“容器镜像”（Container Image），是容器的静态视图；
- 一个由 Namespace+Cgroups 构成的隔离环境，这一部分我们称为“容器运行时”（Container Runtime），是容器的动态视图。
