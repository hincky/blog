module.exports = {
  title: 'Hincky的博客',
  description: 'All by Hincky',
  base: '/',
  dest: './ROOT',  // 设置输出目录
      head: [],
      plugins: [],
      themeConfig: {
          logo: '/assets/img/logo.png',
          // 添加导航栏
          nav: [
  		{ text: '主页', link: '/' },
  		{ text: '指南', link: '/guide/' },
  		{ text: 'java相关',
  	  	    items: [
  			{ text: 'java基础', link: '/java/java-base/' },
  			{ text: 'java与opc通信', link: '/java/java-opc/' }
  		    ]
  	        }
          ],
      sidebar: [],
      sidebarDepth: 2,
      lastUpdated: 'Last Updated'
  }
}

