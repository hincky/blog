---
title: develop-theme
date: 2022-09-29 17:26:33
permalink: /pages/7f1ea4/
categories:
  - guide
tags:
  - 
---

# 配置
## 配置文件：选项配置
配置文件是在docs文件夹下的`.vuepress`文件夹下的`config.js`
可以对比着[官网的选项配置](https://www.vuepress.cn/config/)，添加或者更换自己喜欢的配置


## 主题配置
除了上面可配置的选项，还可以对负责整个网站的布局和交互细节的**主题**进行配置
在主题配置中，最基本的就是默认主题，这个几乎不用配置，跟着[官网的默认主题](https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)配置即可。

> 下面说说高级的自定义主题

建议开启dev分支来开发theme，原因有三
1. 这是全局布局，一旦theme文件目录下有`xxx.vue`之后，整个网站都会遵顼这个文件的布局。如果`xxx.vue`文件里面为空，那页面也是空
2. `create branch from master` 创建dev分支，不影响master分支，可随意在dev代码上修改
3. 在完全开发好自定义主题之前，都不要在`.vuepress`目录下创建`theme/global-components/`，否则页面也是为空，因为这个官方的全局组件扫描文件

需要自定义主题就直接从[这个官方文档](https://www.vuepress.cn/theme/writing-a-theme.html)参考

创建并切换到dev分支，并创建好theme的各个目录以及文件，准备开发自定义主题

### 布局组件
假设你的主题 layouts 目录如下：
```
theme
└── layouts
   ├── Layout.vue
   ├── AnotherLayout.vue
   └── 404.vue


```
所有的页面将会默认使用 `Layout.vue` 作为布局组件，对于那些匹配不到的路由将会使用 `404.vue`。

如果你想要在某一个页面中使用 `AnotherLayout.vue` 作为布局组件，在.md文件里面更新这个页面的 `frontmatter`指定具体的layout组件，如下:
```
---
layout: AnotherLayout
---

...(md的其他内容)
```

### 使用插件
你可以通过主题的配置文件 `theme/index.js` 来给主题应用一些插件：
```
// .vuepress/theme/index.js
module.exports = {
  plugins: [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ]
}
```

### 网站和页面的元数据
`Layout `组件将会对每一个文档目录下的 `.md` 执行一次，同时，整个网站以及特定页面的元数据将分别暴露为 `this.$site` 和 `this.$page` 属性，它们将会被注入到每一个当前应用的组件中。

这是你现在看到的这个网站的 `$site` 的值：
```
{
  "title": "VuePress",
  "description": "Vue 驱动的静态网站生成器",
  "base": "/",
  "pages": [
    {
      "lastUpdated": 1524027677000,
      "path": "/",
      "title": "VuePress",
      "frontmatter": {}
    },
    ...
  ]
}
```
`title`, `description` 和 `base` 会从 `.vuepress/config.js` 中对应的的字段复制过来，而 `pages` 是一个包含了每个页面元数据对象的数据，包括它的路径、页面标题（明确地通过 `YAML front matter` 指定，或者通过该页面的第一个标题取到），以及所有源文件中的 `YAML front matter` 的数据。

下面的这个对象是你正在看的这个页面的 `$page` 的值：

```
{
  "lastUpdated": 1524847549000,
  "path": "/custom-themes.html",
  "title": "自定义主题",
  "headers": [/* ... */],
  "frontmatter": {}
}
```

如果用户在 `.vuepress/config.js` 配置了 `themeConfig`，你将可以通过 `$site.themeConfig` 访问到它。如此一来，你可以通过它来对用户开放一些自定义主题的配置 —— 比如指定目录或者页面的顺序，你也可以结合 `$site.pages` 来动态地构建导航链接。

最后，别忘了，作为 `Vue Router API` 的一部分，`this.$route` 和 `this.$router` 同样可以使用。

> 提示：
`lastUpdated` 是这个文件最后一次 git 提交的 UNIX 时间戳，更多细节请参考：最后更新时间。

### 应用配置

自定义主题也可以通过主题根目录下的 `enhanceApp.js` 文件来对 `VuePress` 应用进行拓展配置。这个文件应当 `export default` 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：

```
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
}
```

