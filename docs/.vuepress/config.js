module.exports = {
  host: 'localhost',
  port: '8080',
  title: 'hincky的博客',
  description: 'hincky的个人技术博客，用于记录后端技术相关的文档、笔记。不定期更新，随缘更新，有缘关注。',
  base: '/',
  dest: '.vuepress/dist',  // 设置输出目录
      head: [
        ['link', { rel: 'icon', href: '/assets/img/h-icon.jpg' }]
      ],
      plugins: [],
      themeConfig: {
          logo: '/assets/img/earth-logo.jpg',
          // 添加导航栏
          nav: [
          { text: '博客主页', link: '/' },
          { text: 'k8s', link: '/k8s/' },
          { text: 'mysql', link: '/mysql/' },
          { text: 'redis', link: '/redis/' },
          { text: 'Spring相关',
              items: [
              { text: 'spring核心框架', link: '/spring/spring-framework/' },
              { text: 'Spring Boot', link: '/spring/springboot/' }
              ]
  	      },
          { text: '小工具合集',
              items: [
              { text: 'linux命令', link: '/tools/linux-command/index.html' },
              { text: 'docker命令', link: '/tools/docker-command/' },
              { text: 'k8s命令', link: '/tools/k8s-command/' },
              { text: 'git命令', link: '/tools/git-command/' }
              ]
  	      },
          ],
      sidebar: [],
      sidebarDepth: 2,
      lastUpdated: 'Last Updated'
  }
}

