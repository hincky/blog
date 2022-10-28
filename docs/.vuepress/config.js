module.exports = {
  // host: 'localhost',
  // port: '8080',
  title: 'hincky的博客',
  description: 'hincky的个人技术博客,用于记录后端技术相关的文档、笔记。不定期更新,随缘更新,有缘关注。',
  base: '/',
  dest: '.vuepress/dist',  // 设置输出目录
  repo:  'https://github.com/hincky/vuepress',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/h-icon.jpg' }]
  ],
  plugins: [],
  themeConfig: {
    logo: '/assets/img/earth-logo-removebg.png',
    // 添加导航栏
    nav: [
      // { text: '博客主页', link: '/' },
      // { text: '技术分享', link: '/share/' },
      // { text: '算法', link: '/algorithm/' },
      // { text: 'vue',
      //   items: [
      //   { text: 'vue', link: '/vue/-/introduction' },
      //   { text: 'vue-router', link: '/vue/router/' },
      //   { text: 'vue-admin', link: '/vue/admin/' },
      //   { text: 'geek', link: '/vue/geek/base' },
      //   ]
      // },
      { text: 'mybatis',
        items: [
        { text: '基础用法', link: '/mybatis/basic/' },
        { text: '分页', link: '/mybatis/pagehelper/' },
        { text: '代码生成', link: '/mybatis/generator/' },
        ]
      },
      { text: 'spring',
        items: [
        { text: 'spring核心框架', link: '/spring/spring-framework/' },
        { text: 'Spring Boot', link: '/spring/springboot/' },
        ]
      },
      { text: 'sql',
        items: [
        { text: '快查', link: '/database/sql/quick' },
        { text: 'ddl', link: '/database/sql/1-ddl' },
        { text: '查询', link: '/database/sql/2-select' },
        { text: '查询条件', link: '/database/sql/3-where' },
        { text: '函数', link: '/database/sql/4-function' },
        { text: '子查询', link: '/database/sql/5-subquery' },
        ]
      },
      { text: '数据库相关',
        items: [
        // { text: 'sql', link: '/database/sql/' },
        { text: 'mysql', link: '/database/mysql/' },
        { text: 'redis', link: '/database/redis/' },
        { text: 'mongo', link: '/database/mongo/' },
        ]
      },
      // { text: '运维',
      //   items: [
      //   { text: 'k8s', link: '/operation/k8s/' },
      //   { text: 'docker', link: '/operation/docker/' },
      //   { text: 'helm', link: '/operation/helm/' },
      //   { text: 'prometheus', link: '/operation/prometheus/' },
      //   { text: 'grafana', link: '/operation/grafana/' },
      //   { text: 'nginx', link: '/operation/nginx/nic' },
      //   ]
      // },
      { text: '协议',
        items: [
        { text: 'http', link: '/protocol/http/' },
        { text: 'tcp', link: '/protocol/tcp/' },
        ]
      },
      { text: '小工具合集',
        items: [
        { text: 'linux命令', link: '/tools/linux-command/' },
        { text: 'docker命令', link: '/tools/docker-command/' },
        { text: 'kubectl命令', link: '/tools/k8s-command/' },
        { text: 'crictl命令', link: '/tools/cri-command/' },
        { text: 'git命令', link: '/tools/git-command/git' },
        ]
      },
      { text: '留言板', link: '/board/' },
    ],
    displayAllHeaders: true,  //侧边栏显示所有页面的标题链接
    // sidebar: 'auto',
    sidebar:  {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],
      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],
      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    sidebarDepth: 3,
    lastUpdated: 'Last Updated'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}

