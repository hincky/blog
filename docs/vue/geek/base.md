# 极客时间vue专栏笔记
vue 核心技术
事件，插槽

指令的本质是什么：一句话概括：其实指令就是一个标志位，它被标记的什么标志。vue底层就根据这个标志去作相应的逻辑处理

## 第一个vue程序

1. 创建html文件，并导入模板
2. 在body标签里面添加script标签，src引入cdn。
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
```

3. 创建div标签，id为app，动态变量为message（用{{}}来表示）
```html
<div id="app">
    {{message}}
    {{message + message}}
</div>
```
4. 创建`script`标签，在里面创建vue实例。el表示关联id为app的dom，data实例储存的数据，名为message，数据为`hello hincky`
```html
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'hello hincky'
        }
    })
</script>
```


```html
<div id="app">
    {{message}}
    {{message + message}}
    <div :id="message"></div>
</div>
    
<ul>
    <li v-for="a in list">
        <span v-if="!a.del">{{a.title}}</span>
        <span v-else style="text-decoration: line-through">{{a.title}}</span>
        <button v-show="!a.del">delete</button>
    </li>
</ul>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'hello hincky',
            list: [{
                title: '课程1',
                del: false
            },{
                title: '课程2',
                del: true
            }],
        }
    })
</script>



<script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
```
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

## vue事件
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

## vue插槽
插槽就是将`slot`元素作为分发内容的出口

1. 修改，todo-item写在todo-list组件里面，但是并不合理。需要能够自行传入需要渲染的todo-item，而不是直接写死在todo-list里面

修改DOM视图
```html
<div id="app">
    ...
    <todo-list>
        <todo-item @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del"></todo-item>
    </todo-list>
</div>
```
修改之后还不能看到`todo-item`被挂载到DOM上面，因为在`todo-list`组件里面仅仅只有一个`ul`标签，所以需要在`todo-list`组件中`ul`标签里，加一个插槽
```js
Vue.component('todo-list',{
    template: '
        <ul>
            <slot></slot>
        </ul>
    ',
```

将todo-list组件里的list剪切到vue对象上，像一开始一样；而且由于handleDelete原本在todo-list上的，现在换到todo-item里面，于是处理事件的方法也要写到vm对象上
```js
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'hello hincky',
            list: [{
                title: '课程1',
                del: false
            },{
                title: '课程2',
                del: true
            }],
        },
        methods: {
            handleDelete(val){
                console.log('点击删除按钮',val)
            }
        }
    })
</script>
```

2. 在todo-item的li标签里面分别加前置和后置图标

修改DOM视图

> 旧语法

```html
<div id="app">
    ...
    <todo-list>
        <todo-item @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del">
            <span slot="pre-icon">preIcon</span>
            <span slot="suf-icon">sufIcon</span>
        </todo-item>
    </todo-list>
</div>
```

> 新语法

```html
<div id="app">
    ...
    <todo-list>
        <todo-item @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del">
            <template v-slot:pre-icon>
                <span>preIcon</span>
            </template>

            <template v-slot:suf-icon>
                <span>sufIcon</span>
            </template>
        </todo-item>
    </todo-list>
</div>
```
todo-item组件中同步添加插槽
```js
Vue.component('todo-item',{//这对{}里面就是组件的配置
    ...
    template: '
        <li>
            <slot name="pre-icon"></slot>
            <span v-if="!del">{{title}}</span>
            <span v-else style="text-decoration: line-through">{{title}}</span>
            <slot name="suf-icon"></slot>
            <button v-show="!del">delete</button>
        </li>
    ',
```

3. 作用域插槽，接收子组件传递的值，返回不同的内容

假设每个item里面，维护一个随机value值

修改todo-item组件,添加data，并修改模板里面的前置图标，获取随机value
```js
Vue.component('todo-item',{//这对{}里面就是组件的配置
    ...
    data: function(){
        return {
            value: Math.random()
        }
    },
    template: '
        <li>
            <slot name="pre-icon" :value="value"></slot>
            <span v-if="!del">{{title}}</span>
            <span v-else style="text-decoration: line-through">{{title}}</span>
            <slot name="suf-icon"></slot>
            <button v-show="!del">delete</button>
        </li>
    ',
```

修改DOM视图，"{value}"表示传递出来的是一个对象，对象的值是value。和上面template的value是对应的
span里面加上{{value}}
```html
<div id="app">
    ...
    <todo-list>
        <todo-item @delete="handleDelete" v-for="item in list" :title="item.title" :del="item.del">
            <template v-slot:pre-icon="{value}">
                <span>preIcon {{value}}</span>
            </template>

            <template v-slot:suf-icon>
                <span>sufIcon</span>
            </template>
        </todo-item>
    </
```


作用域插槽本质上是返回组件的函数，将dom当作函数，template里面通过slot形式来调用了函数，并给函数传递了value值，最终返回到dom里面的span标签


## 单文件组件
vue.component的缺点
- 要求名字全局定义，大项目不好维护
- template模板不能代码高亮
- 不支持css
- 没有构建步骤

xx.vue的单文件组件，不仅解决上面问题，还提供webpack构建工具


