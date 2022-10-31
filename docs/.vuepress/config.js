module.exports = {
  title: 'hincky的博客',
  description: 'hincky的个人技术博客,用于记录后端技术相关的文档、笔记。不定期更新,随缘更新,有缘关注。',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/h-icon.jpg' }],
    // 下面这一行是对移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/blog/', //github发布的访问路径，本地开发的时候不要打开,只有在build时候再打开
  // theme: 'reco', //配置主题为reco
  // theme: '@vuepress/blog', //主题配置为博客类型
  themeConfig: {
    logo: '/assets/img/earth-logo-removebg.png', //导航栏logo
    authorAvatar: '/avatar.png', //首页头像，搭配reco主题
    displayAllHeaders: true,  //侧边栏显示所有页面的标题链接
    lastUpdated: 'Last Updated',
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    record: '粤ICP备2022120427号', //ICP 备案文案;配合reco主题使用
    recordLink: 'https://beian.miit.gov.cn/', //ICP 备案指向链接;配合reco主题使用
    // cyberSecurityRecord: '公安部备案文案', //公安部备案文案;配合reco主题使用
    // cyberSecurityLink: '公安部备案指向链接', //公安部备案指向链接;配合reco主题使用
    startYear: '2022', // 项目开始时间，只填写年份;配合reco主题使用
    author: 'hincky', //作者姓名，配合reco主题使用
    authorAvatar: 'https://hincky-blog.oss-cn-guangzhou.aliyuncs.com/img/hincky-avatar.png',//作者头像，配合reco主题使用
    sidebarDepth: 2, //侧边栏显示深度，默认1，最大2（显示到h3标题）
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // sidebar: 'auto',
    sidebar: {
      // '/guide/vue/': [
      //   'test01', 'test02', 'test03'
      // ],
      '/oauth2/': [
        // 'test01', 'test02', 'test03'
        {
          title: '原理',
          collapsable: true,
          children: ['1-template-grammar','2-data-mount','3-el-data']
        }
      ],
      '/oauth2/action/': [
        {
          title: '应用',
          collapsable: true,
          children: ['1-non-single-file','2-single-file']
        }
      ],
      '/database/sql/': [
        {
          title: 'SQL',
          collapsable: true,
          children: ['1-ddl','2-select','3-where','4-function','5-subquery','6-multi-query','quick']
        }
      ],          
      // '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
    },
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }, //时间线
      // { text: '分类', link: '/categories/' },
      // { text: '归档', link: '/archives/' },
      // { text: '友链', link: '/links/' },
      // { text: '关于', link: '/about/' },
      // { text: '域名', link: '/domains/' },
      // {
      //   text: '语言',
      //   items: [
      //     { text: '中文', link: '/cn/' },
      //     { text: '英语', link: '/en/' }
      //   ]
      // }
      // {
      //   text: '前端',
      //   items: [
      //     { text: 'vue', link: '/oauth2/' },
      //   ]
      // },
      // {
      //   text: '后端',
      //   items: [
      //     { text: '原理', link: '/oauth2/' },
      //     { text: '应用', link: '/oauth2/action/' }
      //   ]
      // },
      {
        text: '数据库',
        items: [
          { text: 'sql', link: '/database/sql/' },
          // { text: 'mysql', link: '/oauth2/' },
          // { text: 'redis', link: '/oauth2/action/' }
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
        { text: 'linux命令', link: 'https://hincky.github.com/blog/tools/linux-command/index.html' },
        { text: 'docker命令', link: '/tools/docker-command/' },
        { text: 'kubectl命令', link: '/tools/k8s-command/' },
        // { text: 'crictl命令', link: '/tools/cri-command/' },
        { text: 'git命令', link: '/tools/git-command/git' },
        ]
      },
    ],
    blogConfig: { //博客设置
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    }
  },
  plugins: [
    // '@vuepress/pwa',
    // {
    //   serviceWorker: true,
    //   updatePopup: true
    // }
  ],
}

