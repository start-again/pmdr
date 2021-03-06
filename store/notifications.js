export const actions = {
  sessionEnd(context, payload) {
    // Default notification when a session is over. WIP
    // TODO: Action button to close the notification and go on the website
    const options = {
      body: `Your ${payload.toLowerCase()} session is done!`,
      icon: '/icon.png',
      badge: '/badge.png',
    }
    navigator.serviceWorker.ready.then(function (sw) {
      sw.showNotification('PomStat', options)
    })
  },
}
