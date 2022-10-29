module.exports = {
  title: 'hincky的博客',
  description: 'hincky的个人技术博客,用于记录后端技术相关的文档、笔记。不定期更新,随缘更新,有缘关注。',
  // 移动端优化
  head: [
    ['link', { rel: 'icon', href: '/assets/img/h-icon.jpg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // theme: 'reco', //配置主题为reco
  themeConfig: {
    logo: '/assets/img/earth-logo-removebg.png', //导航栏logo
    displayAllHeaders: true,  //侧边栏显示所有页面的标题链接
    lastUpdated: 'Last Updated',
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    // base: '/',
    // dest: '.vuepress/dist',  // 设置输出目录
    // repo:  'https://github.com/hincky/vuepress', //导航栏右侧生成GitHub链接
    sidebarDepth: 2, //侧边栏显示深度，默认1，最大2（显示到h3标题）
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: 'auto',
    nav: [],
  },

  // plugins: [],
}

