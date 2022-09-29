# 网站源码结构介绍

[参考官方网站的目录结构](https://www.vuepress.cn/guide/directory-structure.html)

- docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
- docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
- docs/.vuepress/theme: 用于存放本地主题。
- docs/.vuepress/styles: 用于存放样式相关的文件。
- docs/.vuepress/public: 静态资源目录。
- docs/.vuepress/templates: 存储 HTML 模板文件。
- docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
- docs/.vuepress/enhanceApp.js: 客户端应用的增强。

## 默认页面路由
此处我们把 docs 目录作为 targetDir （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 docs 目录的。在项目根目录下的 `package.json` 中添加 scripts ：
```
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
## 目录结构说明
|url|相关内容|文件路径|
|---|---|---|
|/|默认路径|/docs/|
|/k8s|k8s|/docs/k8s/|
|/mysql|数据库|/docs/mysql/|
|/tag|标签类型|/docs/tag/|

运行`yarn docs:dev`之后，看到的html页面是docs下面经过渲染的README.md文件。

默认访问/，就是访问README.html，而README.html是由README.md渲染而来

同理，访问/about.html就是访问docs下的about.md

而如果访问/about/，就是访问docs文件夹下about文件夹下的README.md



# 配置
## 配置文件：选项配置
配置文件是在docs文件夹下的`.vuepress`文件夹下的`config.js`
可以对比着[官网的配置](https://www.vuepress.cn/config/)，添加或者更换自己喜欢的配置


## 主题配置
除了上面可配置的选项，还可以对负责整个网站的布局和交互细节的**主题**进行配置
在主题配置中，最基本的就是默认主题，这个几乎不用配置，跟着[官网的默认主题](https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)配置即可。

> 下面说说高级的自定义主题

需要自定义主题就直接从[这个官方文档](https://www.vuepress.cn/theme/writing-a-theme.html)参考

建议开启dev分支来开发theme，原因有二
1. 这是全局布局，一旦theme文件目录下有`xxx.vue`之后，整个网站都会遵顼这个文件的布局。如果`xxx.vue`文件里面为空，那页面也是空
2. `create branch from master` 创建dev分支，不影响master分支，可随意在dev代码上修改

