# vue组件
组件提供了复用的可能

1. 创建组件
组件的名称一定要全局唯一
```
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

```
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
```
<div id="app">
    {{message}}  {{message + message}}
    <div :id="message"></div>

    <todo-list v-for="item in list" :title="item.title" :del="item.del"></todo-list>
</div>
```

## 事件
例子
```
<ul>
    <li v-for="a in list">
        <span v-if="!a.del">{{a.title}}</span>
        <span v-else style="text-decoration: line-through">{{a.title}}</span>
        <button v-show="!a.del">delete</button>
    </li>
</ul>
```