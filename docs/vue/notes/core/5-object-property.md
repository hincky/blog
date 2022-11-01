---
title: 5-object-property
date: 2022-10-29 11:41:05
permalink: /pages/2cbf18/
categories:
  - vue
  - notes
  - core
tags:
  - 
---
## Object.defineProperty定义对象属性

```js
let person = {
    name: 'tom',
    sex: 'female',
    //age: 17,
}

Object.defineProperty(person,'age',{
    value:17
})


console.log(Object.keys(person))

console.log(person)
```

可以通过Object.defineProperty去定义js对象中新的属性以及属性值

Object.defineProperty三要素
- 对象 person
- 属性 'age'
- 值 {value:17}

### Object.keys枚举获取对象属性

```js
console.log(Object.keys(person))
//["name","sex","age"]
```

person是传入对象，作为参数传到keys里面。keys可以将对象里所有属性名提取成一个数组

### 区别

直接在let person里面写死的属性，可以通过枚举来获取对象的每个属性
```js
console.log(Object.keys(person))
//["name","sex","age"]
```

通过Object.defineProperty定义的属性，就不通过枚举获取了
```js
console.log(Object.keys(person))
//["name","sex"]
```

## Object.defineProperty的高级定义

其他高级属性配置
```js
Object.defineProperty(person,'age',{
    value:17
    enumerable:true,   //控制属性可否被枚举，默认false
    writale:true,      //控制属性可否被修改，默认false
    configurable:ture  //控制属性可否被删除，默认false
})
console.log(Object.keys(person))
//["name","sex","age"]
```

getter配置，get:function()可以简写成get()
```js
let number = 16
let person = {
    name: 'tom',
    sex: 'female',
}
//给person添加新属性age，通过getter来直接返回数值，也可返回变量number，再用变量赋值给age
Object.defineProperty(person,'age',{
    //当读取person的age属性时，get函数（getter）被调用，且返回值就是age的值
    get:function(){
        // return 16
        return number
    }

    //当修改person的age属性时，set函数（setter）被调用，且会收到修改的具体值
    set(value){ 
        //要同步修改age的值，就将value赋值给number即可
        number=value
    }
})
console.log(Object.keys(person))
//["name","sex","age"]
```