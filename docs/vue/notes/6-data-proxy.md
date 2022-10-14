## 数据代理
A对象的a,b,c属性，可以直接用A.b这样的方式访问
修改就A.b=newValue就可以修改了

如何通过对象B去访问/修改A对象里面的属性呢

```js

let obj = {x:100}
let obj2 = {y:200}

Object.defineProperty(obj2,'x',{
    get(){
        return obj.x
    },
    set(value){
        obj.x = value
    }
})
```