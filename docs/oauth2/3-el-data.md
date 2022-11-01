---
title: 3-el-data
date: 2022-10-30 09:47:57
permalink: /pages/9e7a44/
categories:
  - oauth2
tags:
  - 
---
# el 的两种写法
1. el:'#root'
2. 先创建Vue实例，再通过v.$mount('#root')指定el的值 
```js
const v = new Vue({
    data:{
        name:'hello world'
    }
})

v.$mount('#root')
```

# data的两种写法

## 对象式
```js
new Vue({
    el:'#root',
    data:{
        name:'hello world'
    }
})
```

## 函数式——vue组件必用

教科书的写法是：

```js
new Vue({
    el:'#root',
    data:function(){
        console.log('@@@',this)
        return{
            name:'hello world'
        }
    }
})
```

一般写法

```js
data(){
    ...
}
```

data函数里面：
1. this 是指Vue实例对象
2. data:()=>{} `=>`是指全局window

> 由Vue管理的函数，一定不要写箭头函数，否则this不再是Vue实例，变成全局window了
