# vue组件
组件提供了复用的可能

1. 创建组件
template是要复用的模板，去掉不需要的v-for，和v-if,v-else里面v-for的item信息。通过props来定义属性声明，希望得到String类型的title属性，Boolean的del属性

组件里面的data对象不像vue实例直接去定义，vue组件中的data对象需要通过方法返回；
原因在于vue实例是一个实例，不会出现复用的情况；而vue组件是要被复用的，根据传入参数不同返回不同的对象，所以vue组件的data对象是用方法去返回

methods在这个对象里面定义一些方法

```
Vue.component('component_name',{//这个参数就是组件的配置
    props: {
        title: String,
        del:
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
```