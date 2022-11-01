module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/assets/img/h-icon.jpg' }],
    // 下面这一行是对移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // base: '/blog/', //github发布的访问路径，本地开发的时候不要打开,只有在build时候再打开
  // theme: 'reco', //配置主题为reco
  // theme: '@vuepress/blog', //主题配置为博客类型
  theme: 'vdoing', //配置主题为vdoing
  markdown: {
    toc: {
        includeLevel:[1, 2, 3, 4]
    }
  },
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


    logo: '/assets/img/earth-logo-removebg.png', //导航栏logo
    repo: 'hincky/vuepress', // 导航栏右侧生成Github链接
    displayAllHeaders: true,  //侧边栏显示所有页面的标题链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    // lastUpdated: 'Last Updated',
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    sidebarDepth: 2, //侧边栏显示深度，默认1，最大2（显示到h3标题）
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }, //时间线
      // { text: '分类', link: '/categories/' },
      // { text: '归档', link: '/archives/' },
      // { text: '友链', link: '/links/' },
      // {
      //   text: '前端',
      //   items: [
      //     { text: 'vue', link: '/oauth2/' },
      //   ]
      // },
      {
        text: '后端',
        items: [
          { text: 'spring', link: '/spring/' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'sql', link: '/database/sql/' }
        ]
      },
      {
        text: 'oauth2',
        items: [
          { text: '原理', link: '/oauth2/' },
          { text: '应用', link: '/oauth2/action/' },
        ]
      },
      { text: '小工具合集',
        items: [
        { text: 'docker命令', link: '/tools/docker-command/' },
        { text: 'kubectl命令', link: '/tools/k8s-command/' },
        { text: 'git命令', link: '/tools/git-command/git' },
        ]
      },
    ],
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
    'fulltext-search' //支持全文搜索
  ]
}

