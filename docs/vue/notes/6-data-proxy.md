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

## vue的数据代理

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

模板中的message就是通过getter获取data里的message：_data.message
修改也是通过setter去修改data里面的message

那为什么模板中不写成`{{_data.message}}`而是`{{message}}`

是因为Vue实例会扫描实例data中的所有属性，并在和el，data的同一层级创建出所有相同名字的属性，通过数据代理的方式来获取实例data中同名的属性

也就是app.message = app._data.message

如果没有数据代理，插值语法中获取数据的写法就要在所有的变量名前面加`_data.`了

![](.//img/vue-proxy.png)
