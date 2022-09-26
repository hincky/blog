module.exports = {
  host: 'localhost',
  port: '8080',
  title: 'hincky的博客',
  description: 'Hincky的个人技术博客，用于记录后端技术相关的文档、笔记。不定期更新，随缘更新，有缘关注。',
  base: '/',
  dest: '.vuepress/dist',  // 设置输出目录
      head: [],
      plugins: [],
      themeConfig: {
          logo: '/assets/img/logo.png',
          // 添加导航栏
          nav: [
  		{ text: '主页', link: '/' },
  		{ text: 'k8s', link: '/k8s/' },
        { text: 'mysql', link: '/mysql/' },
        { text: 'k8s', link: '/guide/' },
  		// { text: 'java相关',
  	  	//     items: [
  		// 	{ text: 'java基础', link: '/java/java-base/' },
  		// 	{ text: 'java与opc通信', link: '/java/java-opc/' }
  		//     ]
  	    //     }
          ],
      sidebar: [],
      sidebarDepth: 2,
      lastUpdated: 'Last Updated'
  }
}

