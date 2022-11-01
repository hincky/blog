---
title: 1-template-grammar
date: 2022-10-29 11:41:05
permalink: /pages/07fe52/
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
# 模板语法

最先接触的模板

```html
<div id="demo">
    <h1>Hello {{name.toUpperCase()}}  {{address}}</h1>
</div>
```
## 插值语法

功能单一，将指定的值，放在指定的位置

插值语法
```html
{{表达式}}
```
> 使用位置

在标签体内部，也就是：<> `在这里写` </>

> 例子

```html
<div id="app">
  {{ message }}
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

## 指令语法

`v-指令:html标签属性="表达式"`

最先接触的指令语法

`v-bind:html标签属性="表达式"`  

简写->  `:html标签属性="表达式"` 

> 使用位置

在标签属性内部，也就是：<  `在这里写`></>

> 例子

```html
<div id="app">
    <h1 v-bind:herf="url">这是一个链接</h1>
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

这里的表达式就是读取Vue实例data中具体的属性。比如表达式为message，读取Vue实例data中的message属性

可以用层级去对应表达式里面的值

```html
<div id="app">
    <h1 v-bind:herf="website.url">这是一个链接</h1>
</div>

<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    website: {
        url: 'www.hincky.com',
    },
  }
})
</script>
```




