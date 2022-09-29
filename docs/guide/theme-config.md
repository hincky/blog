# 主题的配置
和插件几乎一样，主题的配置文件 themeEntry 应该导出一个普通的 `JavaScript` 对象（`#1`），它也可以是一个返回对象的函数（`#2`），这个函数接受用户在 `siteConfig.themeConfig` 为第一个参数、包含编译期上下文的 `ctx` 对象作为第二个参数。
```
// .vuepress/theme/index.js
// #1
module.exports = {
   // ...
}
// .vuepress/theme/index.js
// #2
module.exports = (themeConfig, ctx) => {
   return {
      // ...
   }
}
```

>TIP
1. 你应该能看到 `themeEntry` 和 `themeConfig` 的区别，前者是一个主题本身的配置，这些配置由 `VuePress` 本身提供；而后者则是用户对主题的配置，这些配置选项则由当前使用的主题来实现，如 默认主题配置。
2. 除了本节列出的选项，`themeEntry` 也支持插件支持的所有 [配置选项](https://www.vuepress.cn/plugin/option-api.html) 和 [生命周期](https://www.vuepress.cn/plugin/life-cycle.html)。

## plugins
- 类型: Array|Object
- 默认值: undefined

参考:
[插件 > 使用插件.](https://www.vuepress.cn/plugin/using-a-plugin.html)

注意

你可能不需要使用下面这些带有 Danger Zone 的选项，除非你知道你在做什么！

#devTemplate Danger Zone
类型: String
默认值: undefined
dev 模式下使用的 HTML 模板路径，默认模板见 这里 (opens new window)。

#ssrTemplate Danger Zone
类型: String
默认值: undefined
build 模式下使用的 HTML 模板路径，默认模板见 这里 (opens new window)。

参考:

Vue SSR Guide > template (opens new window).
#extend Danger Zone
类型: String
默认值: undefined
// .vuepress/theme/index.js
module.exports = {
  extend: '@vuepress/theme-default'
}
VuePress 支持一个主题继承于另一个主题。VuePress 将遵循 override 的理念自动帮你解决各种主题属性（如样式、布局组件）的优先级。

参考:

主题继承
例子: @vuepress/theme-vue(opens new window)
#globalLayout Danger Zone
类型: String
默认值: undefined
// .vuepress/theme/index.js
module.exports = {
  globalLayout: '/path/to/your/global/vue/sfc'
}
全局布局组件是负责管理全局布局方案的一个组件，VuePress 默认的 globalLayout (opens new window)会帮你根据 $frontmatter.layout 来渲染不同的布局，所以大部分情况下你不要配置此选项。

举例来说，当你想为当前主题设置全局的 header 和 footer 时，你可以这样做：

<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <header><h1>Header</h1></header>
    <component :is="layout"/>
    <footer><h1>Footer</h1></footer>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>