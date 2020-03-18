export const actions = {
  sessionEnd(context, payload) {
    // Default notification when a session is over. WIP
    const options = {
      body: `Your ${payload.toLowerCase()} session is done!`,
      icon: '/icon.png',
      badge: '/badge.png',
    }
    navigator.serviceWorker.ready.then(function(sw) {
      sw.showNotification('PomStat', options)
    })
  },
}
