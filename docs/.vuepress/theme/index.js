module.exports = {
    plugins: [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
}