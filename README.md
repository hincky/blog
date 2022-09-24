# VuePress

由于v2版本还在beta测试阶段，所以推荐使用v1的稳定版本

[官方网址](https://vuepress.vuejs.org/zh/)

## 目录结构说明

运行yarn docs:dev之后，看到的html页面是docs下面经过渲染的README.md文件。

默认访问/，就是访问README.html，而README.html是由README.md渲染而来

同理，访问/about.html就是访问docs下的about.md

而如果访问/about/，就是访问docs文件夹下about文件夹下的README.md



## 配置

配置文件是在docs文件夹下的.vuepress文件夹下的config.js

对比着官网的配置，可以更换自己喜欢的配置