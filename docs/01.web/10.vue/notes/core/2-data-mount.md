---
title: 2-data-mount
date: 2022-10-29 11:41:05
permalink: /pages/577cfe/
categories: 
  - vue
  - notes
  - core
tags: 
  - null
author: 
  name: hincky
  link: https://github.com/hincky
---
## 单向绑定

v-bind只能通过Vue实例data里的属性，单向改变html标签表达式的值

反过来html标签表达式的值，却不能修改Vue实例data里的属性的值


## 双向绑定

v-model 能够实现 html标签表达式的值 和 Vue实例data里的属性的值双向绑定

一方改变都会同步改变另一方

> 例子

```html
<div id="app">
    <!-- 老实人写法 -->
    <!-- 单向数据绑定：<input type="text" v-bind:value="message"> <br/>
    双向数据绑定：<input type="text" v-model:value="message"> -->

    <!-- 社会人写法 -->
    单向数据绑定：<input type="text" :value="message"> <br/>
    双向数据绑定：<input type="text" v-model="message">     <!--因为v-model默认就是收集value-->
</div>

<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
})
</script>
```

> v-model 只能应用于 表单类html元素（输入类元素）上，即要由value值；因为v-model默认收集的是value值
