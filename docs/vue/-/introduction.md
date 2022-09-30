# vue

[在线10分钟跟着录屏就能学vue基础](https://scrimba.com/learn/vuedocs)

[vue2中文官网地址](https://v2.cn.vuejs.org/v2/guide/#%E8%B5%B7%E6%AD%A5)

推荐直接从vue2开始学，再一步步找项目练手

## vue实例关联DOM元素
```
<div id="app">
  {{ message }}
</div>
```
```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
vue实例就是通过`el`属性（property），去关联`id`为`app`的DOM


## v-指令说明
```
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```
```
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```
`v-bind:attribute="xxx"`通过`v-bind`指令，将`span`元素的`title`属性（attribute），与下面vue实例的`message`属性（property），绑定在一起。

之后在js控制台输入`app2.message='yyy'`，就会看到html页面做出响应更新。



## 初识vue实例
这一部分建议对照[官网教程](https://v2.cn.vuejs.org/v2/guide/index.html#%E8%B5%B7%E6%AD%A5)的“起步”~“处理用户输入”章节，进行学习与理解

```
< v-xxx:attribute="property"></>
```

```
var app2 = new Vue({
  el: '#app-2',
  data: {
    property: 
  }
})
```

`v-xxx:attribute="property"`

v指令和属性
|v-xxx|条件|实例属性property|默认值|属性作用说明|
|:---|:---:|:---:|:---:|:---|
|v-bind|绑定|message|string|字符文本|
|v-if|条件|seen|true|是否可见|
|v-for|循环|todo|text|循环输出文本|
|v-on|监听事件|click|-|鼠标点击触发事件|
|v-model|表单输入|message|string|字符文本|
|v-|||||

# 组件系统

组件化构建系统：使用小型、独立和通常可复用的组件构建大型应用。

![components](./img/introduction-components.png)

