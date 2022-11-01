module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/img/h-icon.jpg' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'hinkcy的个人技术博客,主要记录工作学习中的文档和经验，包括前后端开发以及运维,面试',
      },
    ],
    // 下面这一行是对移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // base: '/blog/', //github发布的访问路径，本地开发的时候不要打开,只有在build时候再打开
  // theme: 'reco', //配置主题为reco
  // theme: '@vuepress/blog', //主题配置为博客类型
  theme: 'vdoing', //配置主题为vdoing

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'hincky的博客',
      description: 'hincky的个人技术博客,用于记录后端技术相关的文档、笔记。不定期更新,随缘更新,有缘关注。',
  }
  },
  themeConfig: {
    //以下是reco主题的配置内容
    // authorAvatar: '/avatar.png', //首页头像，搭配reco主题
    // record: '粤ICP备2022120427号', //ICP 备案文案;配合reco主题使用
    // recordLink: 'https://beian.miit.gov.cn/', //ICP 备案指向链接;配合reco主题使用
    // cyberSecurityRecord: '公安部备案文案', //公安部备案文案;配合reco主题使用
    // cyberSecurityLink: '公安部备案指向链接', //公安部备案指向链接;配合reco主题使用
    // startYear: '2022', // 项目开始时间，只填写年份;配合reco主题使用
    // author: 'hincky', //作者姓名，配合reco主题使用
    // authorAvatar: 'https://hincky-blog.oss-cn-guangzhou.aliyuncs.com/img/hincky-avatar.png',//作者头像，配合reco主题使用
    // blogConfig: { //博客设置,配合reco主题使用
    //   category: {
    //     location: 2,     // 在导航栏菜单中所占的位置，默认2
    //     text: 'Category' // 默认文案 “分类”
    //   },
    //   tag: {
    //     location: 3,     // 在导航栏菜单中所占的位置，默认3
    //     text: 'Tag'      // 默认文案 “标签”
    //   }
    // },


    logo: '/img/earth-logo-removebg.png', //导航栏logo
    repo: 'hincky/vuepress', // 导航栏右侧生成Github链接
    displayAllHeaders: true,  //侧边栏显示所有页面的标题链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: 'Last Updated',
    docsDir: 'docs', // 编辑的文件夹
    editLinks: false, // 启用编辑
    editLinkText: '编辑',
    sidebarDepth: 2, //侧边栏显示深度，默认1，最大2（显示到h3标题）
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },//
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          { // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
            text: '前端文章',
            // items: [
            //   { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
            // ],
          },
          {
            text: '学习笔记',
            items: [ //
              { text: '《Vue》', link: '/note/vue/' }
            ],
          },
        ],
      },
      {
        text: '后端',
        link: '/backend/', 
        items: [
          { 
            text: '后端文章'
          },
          {
            text: '学习笔记',
            items: [ //
              // { text: '《ES6 教程》', link: '/note/es6/' },
              // { text: '《Vue》', link: '/note/vue/' },
              // { text: '《React》', link: '/note/react/' }
            ],
          },
        ],
      },
      {
        text: '运维',
        link: '/operation/', 
        items: [
          { 
            text: '运维文章'
          },
          {
            text: '学习笔记',
            items: [ //
              // { text: '《ES6 教程》', link: '/note/es6/' },
              // { text: '《Vue》', link: '/note/vue/' },
              // { text: '《React》', link: '/note/react/' }
            ],
          },
        ],
      },
      {
        text: '其他技术',
        link: '/operation/', 
        items: [
          { 
            text: '计算机科学CS'
          },
          {
            text: '学习笔记',
            items: [ //
              // { text: '《ES6 教程》', link: '/note/es6/' },
              // { text: '《Vue》', link: '/note/vue/' },
              // { text: '《React》', link: '/note/react/' }
            ],
          },
        ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    updateBar: { // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'hincky', // 必需
      link: 'https://github.com/hincky', // 可选的
    },
    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://hincky-blog.oss-cn-guangzhou.aliyuncs.com/img/hincky-avatar.png',
      name: 'Hincky',
      slogan: '当有趣的人，做想做的事',
    },
    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:hincky@yeah.net',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/hincky',
        },
        {
          iconClass: 'icon-gitee',
          title: '听音乐',
          link: 'https://gitee.com/hincky',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        // 博客版权信息、备案信息等，支持a标签或换行标签</br>
        'Hincky | <a href="https://github.com/hincky/vuepress/blob/master/LICENSE" target="_blank">MIT License</a> | <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022120427号</a>', 
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'hincky',
        link: 'https://github.com/hincky'
      }
    },
  },

  plugins: [
    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在google中搜索',
            frontUrl: 'https://google.com/search?q=',
          },
        ],
      }
    ],
    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: 'https://hm.baidu.com/hm.js?4002ab31d69f3c12dd977b298eec459d',
      },
    ],
    [
      "sitemap", // 网站地图
      {
        hostname: 'hincky.com',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
}

