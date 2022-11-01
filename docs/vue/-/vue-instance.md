---
title: vue-instance
date: 2022-10-12 20:26:02
permalink: /pages/82f743/
categories:
  - vue
  - -
tags:
  - 
---
# vue实例
vue实例的一般步骤
- 创建实例
- 传入选项对象（data，method）
- 实例生命周期

## 创建一个 `Vue` 实例
```javascript
var vm = new Vue({
  // 选项
})

根实例
└─ TodoList
  ├─ TodoItem
  │  ├─ TodoButtonDelete
  │  └─ TodoButtonEdit
  └─ TodoListFooter
      ├─ TodosButtonClear
      └─ TodoListStatistics
```


## 传入若干选项对象，来创建你想要的行为。
[更多选项以及用法参考官网api](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE)

### 数据与方法



### 生命周期钩子



