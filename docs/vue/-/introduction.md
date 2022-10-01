# vue

# 什么是MVVM模式

MVVM模式：
- M model，数据模型
- V即 view，视图
- VM即 view-model，视图模型

![mvvm](./img/mvvm.png)

理解：后台数据通过`VM`来渲染`V`，就是页面。当用户在页面上进行操作的时候， `VM`会自动监听到用户的操作，从而修改`M`改变后台数据。

> 正式开始vue

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

来看一下官网的例子：
1. 这样定义`todo-item`组件，使之能够接受一个 `prop`，父作用域将数据传到子组件。
```
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```
2. 再使用 `v-bind` 指令将待办项传到循环输出的每个组件中：
```
<div id="app-7">
  <ol>
    <!--
      现在我们为每个 todo-item 提供 todo 对象
      todo 对象是变量，即其内容可以是动态的。
      我们也需要为每个组件提供一个“key”，稍后再
      作详细解释。
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
```
3. 最后注入数据
```
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})
```
上面这个例子就是将应用分割成了两个更小的单元。子单元通过 `prop` 接口与父单元进行了良好的解耦。

在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理。下面就是使用了组件的应用模板：
```
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

