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


## ssrTemplate Danger Zone
类型: String
默认值: undefined
build 模式下使用的 HTML 模板路径，默认模板:
```
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ title }}</title>
    <meta name="generator" content="VuePress {{ version }}">
    {{{ userHeadTags }}}
    {{{ pageMeta }}}
    {{{ canonicalLink }}}
    {{{ renderResourceHints() }}}
    {{{ renderStyles() }}}
  </head>
  <body>
    <!--vue-ssr-outlet-->
    {{{ renderScripts() }}}
  </body>
</html>
```
