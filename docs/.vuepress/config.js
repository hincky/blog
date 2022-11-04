const DOMAIN_NAME = 'hincky.com' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/img/h-icon.jpg' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'hincky的个人技术博客,主要记录工作学习中的文档和经验，包括前后端开发以及运维,面试',
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
    logo: '/img/earth-logo-removebg.png', //导航栏logo
    repo: 'hincky/vuepress', // 导航栏右侧生成Github链接
    displayAllHeaders: true,  //侧边栏显示所有页面的标题链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: 'Last Updated',
    categoryText: '随笔', //碎片化文章默认分类值为 随笔
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
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
          {
            text: '学习笔记',
            items: [ //
              { text: 'Vue笔记', link: '/pages/114158caa9e96df0/' },
              { text: 'SEO搜索引擎优化', link: '/pages/b1fd98/' },
              { text: 'nginx', link: '/pages/72044b/' },
            ],
          }
        ],
      },
      {
        text: '后端',
        link: '/backend/', 
        items: [
          { 
            text: '语言类',
            items: [
              { text: 'java', link: '/pages/bb6521/' },
              { text: 'python', link: '/pages/32beb7/' },
              { text: '设计模式', link: '/pages/89dab9/' }
            ]
          },        
          { 
            text: '框架类',
            items: [ 
              { text: 'Spring', link: '/pages/f5b0a7/' },
              { text: 'Spring Security', link: '/pages/00c080/' },
              { text: 'Mybatis', link: '/pages/77c768/' }
            ],
          },
        ],
      },
      {
        text: '运维',
        link: '/operation/', 
        items: [
          { 
            text: '容器技术',
            items: [ 
              { text: 'docker', link: '/pages/77610c/' },
              { text: 'k8s', link: '/pages/f53749/' },
              { text: 'helm', link: '/pages/ad19df/' },
              { text: 'prometheus', link: '/pages/c8a3c2/' },
              { text: 'grafana', link: '/pages/59dbc6/' },
              { text: 'jenkins', link: '/pages/b3ef60/' }
            ],
          },
          {
            text: '命令集合',
            items: [ 
              { text: 'linux命令', link: 'https://wangchujiang.com/linux-command/' },
              { text: 'docker命令', link: '/pages/0541ed/' },
              { text: 'git命令', link: '/pages/339047/' },
              { text: 'vim命令', link: '/pages/906419/' },
              { text: 'k8s命令', link: '/pages/50f84a/' }
            ],
          },
        ],
      },
      {
        text: '其他技术',
        link: '/cs/', 
        items: [
          {
            text: '数据库',
            items: [
              { text: 'sql', link: '/pages/1f3cb0/' },
              // { text: 'mysql', link: '/cs/database/mysql/' },
              // { text: 'redis', link: '/cs/database/redis' },
              // { text: 'mongoDB', link: '/cs/database/mongodb/' },
            ],
          },
          {
            text: '协议',
            items: [
              { text: 'http', link: '/pages/6c5dfb/' },
              { text: 'tcp', link: '/pages/67bc6d/' },
              // { text: 'netty', link: '/cs/protocol/' },
              // { text: 'dubbo', link: '/cs/protocol/' },
            ],
          },
          {
            text: '通用',
            items: [
              { text: 'Git', link: '/pages/8292d8/' }
            ],
          },
          // {
          //   text: '算法',
          //   items: [
          //     { text: '数组', link: '/algorithm/array/' },
          //     { text: '链表', link: '/algorithm/list/' },
          //     { text: '树', link: '/algorithm/tree/' },
          //     { text: '排序', link: '/algorithm/sort/' },
          //     { text: '动态规划', link: '/algorithm/dp/' },
          //   ]
          // },
          {
            text: '技术分享',
            items: [
              { text: 'git push/pull总是超时怎么办', link: '/pages/6b6220/' },
              { text: 'idea debug技巧', link: '/pages/1afd08/' },
              { text: 'postman使用', link: '/pages/5e185e/' },
              { text: '问题总结', link: '/pages/6386cf/' },
            ]
          },
          {
            text: 'Oauth2',
            items: [
              { text: 'Oauth2原理', link: '/pages/f85137/' },
            ]
          }
        ],
      },
      {
        text: '项目实战',
        link: '/project/', 
        items: [
          { 
            text: '项目列表',
            items: [ 
              { text: 'redis项目', link: '/pages/68617d/' },
              { text: '微服务项目', link: '/pages/2888db/' }
            ],
          }
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
          {
            title: '通过百度搜索本站的',
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
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
        hostname: WEB_SITE,
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    toc: {
        includeLevel:[1, 2, 3, 4]
    }
  },
}

