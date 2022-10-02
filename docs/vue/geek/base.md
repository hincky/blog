# 基础篇
vue 核心技术
事件，插槽

指令的本质是什么：一句话概括：其实指令就是一个标志位，它被标记的什么标志。vue底层就根据这个标志去作相应的逻辑处理


1. 创建html文件，并导入模板
2. 在body标签里面添加script标签，src引入cdn。
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
```

3. 创建div标签，id为app，动态变量为message（用{{}}来表示）
```
<div id="app">
    {{message}}
    {{message + message}}
</div>
```
4. 创建script标签，在里面创建vue实例。el表示关联id为app的dom，data实例储存的数据，名为message，数据为hello hincky
```
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'hello hincky'
        }
    })
</script>
```


```
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
2. 