---
title: component
date: 2022-10-12 20:26:02
permalink: /pages/657c3c/
categories: 
  - vue
  - geek
tags: 
  - null
author: 
  name: hincky
  link: https://github.com/hincky
---
## vue组件
组件提供了复用的可能

1. 创建组件
组件的名称一定要全局唯一
```javascript
Vue.component('todo-item',{//这对{}里面就是组件的配置
    template: xxx,
    props: ...,
    data: xxx,
    methods: xxx,
}
```

2. 定义要传入的模板，参数，data对象，和方法
template是要复用的模板，去掉不需要的v-for，和v-if,v-else里面v-for的item信息。

通过props来定义属性声明，希望得到String类型的title属性，Boolean的del属性

组件里面的data对象不像vue实例直接去定义，vue组件中的data对象需要通过方法返回；
原因在于vue实例是一个实例，不会出现复用的情况；而vue组件是要被复用的，根据传入参数不同返回不同的对象，所以vue组件的data对象是用方法去返回

methods在这个对象里面定义一些方法

```javascript
Vue.component('todo-item',{//这对{}里面就是组件的配置
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false,
        }
    },
    template: '
        <li>
            <span v-if="!del">{{title}}</span>
            <span v-else style="text-decoration: line-through">{{title}}</span>
            <button v-show="!del">delete</button>
        </li>
    ',
    data: function(){
        return {}
    },
    methods: {
    },
})

Vue.component('todo-list',{
    template: '
        <ul>
            <todo-item v-for="item in list" :title="item.title" :del="item.del"></todo-item>
        </ul>
    ',
    data: function() {
        return {
            list: [{
                title: '课程1',
                del: false
            },{
                title: '课程2',
                del: false
            }],
        }
    },
})
```
vue组件写好之后，如何在html里面使用组件呢？

直接在html里面，通过<component-name></component-name>就可以引入vue组件了

而vue组件里面的属性，通过v-bind指令来取出来
```html
<div id="app">
    {{message}}  {{message + message}}
    <div :id="message"></div>

    <todo-list v-for="item in list" :title="item.title" :del="item.del"></todo-list>
</div>
```

## 事件
例子
```html
<ul>
    <li v-for="a in list">
        <span v-if="!a.del">{{a.title}}</span>
        <span v-else style="text-decoration: line-through">{{a.title}}</span>
        <button v-show="!a.del">delete</button>
    </li>
</ul>
```

在原来的todo-list里面的删除，改为vue的事件

在上面的todo-item组件里面，修改两处地方
1. 添加事件
```html
<button v-show="!del" @click="handleClick">delete</button>
```
2. 定义事件触发后执行的方法
```javascript
methods: {
    handleClick(){
        console.log('点击删除按钮'),
    }
}
```

同理增加todo-list组件的事件
1. 添加事件
```html
<todo-list @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del"></todo-list>
```

2. 定义要执行的方法
```javascript
methods: {
    handleDelete(){
        console.log('点击删除按钮')
    }
}
```

由于上面还不能触发delete事件，所以需要手动的抛出来
在handleClick方法里面，添加一行this.$emit。
里面的参数：第一个'delete'对应todo-item里面绑定的delete事件，第二this.title就是要传递的参数
参数传递给handleDelete(val)里面的val
1. 添加手动抛出事件
```javascript
methods: {
    handleClick(){
        console.log('点击删除按钮'),
        this.$emit('delete',this.title)
    }
}
```

2. 接收传递的参数
```javascript
methods: {
    handleDelete(val){
        console.log('点击删除按钮',val)
    }
}
```
