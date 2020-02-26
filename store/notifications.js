export const actions = {
  sendNotification() {
    const options = {
      body: 'This is a test notification',
      icon: '/icon.png',
      badge: '/badge.png'
    }
    navigator.serviceWorker.ready.then(function(sw) {
      sw.showNotification('PomStat', options)
    })
  }
}
