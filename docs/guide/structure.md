> 开头先做一个声明和资源分享

本网站项目可以直接从我的gitee上直接clone下来，然后再照着文档学习实践

下面是前端的学习资源分享

[vue官网](https://cn.vuejs.org/guide/introduction.html)

[前端工程师2021教程](https://pan.baidu.com/share/init?surl=S6CkYjq-UPPZbHXYQaHDdw)    密码luyr

[吃透前端工程化，大厂项目以战代练](https://pan.baidu.com/share/init?surl=UihCugfAi8Poa7wgAVKquQ&pwd=i12p) 密码i2p

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

运行`yarn docs:dev`之后，看到的html页面是docs下面经过渲染的`README.md`文件。

默认访问/，就是访问`README.html`，而`README.html`是由`README.md`渲染而来

同理，访问/about.html就是访问docs下的`about.md`

而如果访问/about/，就是访问docs文件夹下about文件夹下的`README.md`


