---
title: postman
date: 2022-10-29 11:41:05
permalink: /pages/5e185e/
categories:
  - share
tags:
  - 
---
# API 接口
## 什么是接口（API）
api 授予拥有鉴权码的应用来调用的方式方法

鉴权码token/key/appkey

接口的存在实现外部修改内部数据的需求

## api应用
前后分离的api测试

mock 模拟接口，比如前端开发好而后端没好时，前端就mock一套数据以供测试

## api 返回格式
- json：{code,msg,data}
- html:
- xml

[格式校验网站](https://bejson.com)

## api 协议
- webs service协议
restful规则：
get获取数据 post提交数据 put修改数据 delete删除数据
- dubbo协议
少量数据，高并发
- http协议
http 80
https 443
请求：get,post,put,delete
响应：1xx信息,2xx状态,3xx重定向,4xx客户端错误,5xx服务端错误

抓包工具：fiddler，WareShark

请求部分：
请求行：请求方式，地址，协议
请求头：
accept客户端可以接受的格式
host主机地址
cookie


响应部分：
响应行：协议，状态码，响应信息
响应头：
set-cookie
响应正文


# 企业api测试流程和方案


















