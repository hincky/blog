---
title: 4-mvvm
date: 2022-10-30 09:47:57
permalink: /pages/cf86f5/
categories: 
  - oauth2
tags: 
  - null
author: 
  name: hincky
  link: https://github.com/hincky
---
# 什么是MVVM模式

MVVM模式：
- M model，数据模型
- V即 view，视图
- VM即 view-model，视图模型

![mvvm](./img/mvvm.png)

理解：后台数据通过`VM`来渲染`V`，就是页面。当用户在页面上进行操作的时候， `VM`会自动监听到用户的操作，从而修改`M`改变后台数据。

![mvvm](./img/vue-mvvm.png)

> 总结
- M模型：data中数据
- V视图：模板代码
- VM视图模型：Vue实例

1. data中所有的属性，最后都出现在vm身上
2. vm身上所有的属性（即  Vue原型上所有的属性），在Vue模板中（即在html里面写模板语法的地方）都可以直接使用