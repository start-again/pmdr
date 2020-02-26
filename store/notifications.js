export const actions = {
  sendNotification(context, bodyContent) {
    const options = {
      body: bodyContent,
      icon: '/icon.png',
      badge: '/badge.png'
    }
    navigator.serviceWorker.ready.then(function(sw) {
      sw.showNotification('PomStat', options)
    })
  }
}
