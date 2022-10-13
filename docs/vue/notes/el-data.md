# el 的两种写法
1. el:'#root'
2. v.$mount()
```js

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


