# 组件

尽可能局部，细致，单一。方便以后的维护和复用，用哪个加哪个即可。

---

## 非单文件组件

```html
<div id="app">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校名称：{{address}}</h2>
    <hr>
    <h2>学生名称：{{studentName}}</h2>
    <h2>学生名称：{{age}}</h2>
    {{name}}
</div>
	
<script type="text/javascript">
var app = new Vue({
    el: '#app',
    data: {
        schoolName: 'SCUT',
        address : 'guangzhou',
        studentName: 'hincky',
        age : 25,
    }
});
</script>
```

> 拆分组件步骤
1. 创建组件（html模板，数据）
2. 注册组件：
    局部注册：Vue实例中`components`属性添加组件k-v
    全局注册：Vue.component('组件标签名',组件名)
3. 使用组件：在模板中添加组件名称的html标签

```html
<body>
    <div id='app'>
        <!-- 添加组件标签来使用组件 -->
        <school></school>
        <hr>
        <student></student>
        <hello></hello>
    </div>

    <div id='root'>
        <!-- 添加组件标签来使用组件 -->
        <school></school>
        <hr>
        <student></student>
        <hello></hello>
    </div>
</body>

<script type="text/javascript">
//创建school组件
const a = Vue.extend({
    template: `
        <div>
            <h2>学校名称：{{schoolName}}</h2>
            <h2>学校名称：{{address}}</h2>
        </div>
    `,
    data(){
        return {
            schoolName: 'SCUT',
            address : 'guangzhou',
        }
    }
})

//创建student组件
const b = Vue.extend({
    template: `
        <div>
            <h2>学生名称：{{studentName}}</h2>
            <h2>学生名称：{{age}}</h2>
        </div>
    `,
    data(){
        return {
            studentName: 'hincky',
            age : 25,
        }
    }
})

//创建hello组件
const c = Vue.extend({
    template: `
        <div>
            <h2>你好呀：{{name}}</h2>
            
        </div>
    `,
    data(){
        return {
            name: 'hincky',
        }
    }
})

//注册组件（这是全局注册）没有s，会给每个vm都加上这个hello组件
Vue.component('hello',c)

//注册组件（这是局部注册）有s
new Vue({
    el: '#app',  //这里表示这个vm绑定id为app的dom
    components:{
        school:a
        student:b
    }
})

//下面这个dom虽然没有用components注册局部组件，但是已经有hello的全局组件在里面了
new Vue({
    el: '#root',  //这里表示这个vm绑定id为root的dom
})
</script>
```
> 注意项
1. 组件不能写`el`
2. 组件的`data`用函数式的方式写，不记得就去会看core的[el和data的两种写法]()
