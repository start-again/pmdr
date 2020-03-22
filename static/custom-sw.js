/* eslint-disable no-undef */

// Handle event when user click on the notification
self.addEventListener('notificationclick', function(event) {
  // Close the notification when she's clicked
  event.notification.close()

  // This looks to see if the current window is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
      })
      .then(function(clientList) {
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i]
          if (
            (client.url === 'https://pmdr.lucasalt.fr' && 'focus' in client) ||
            (client.url === 'https://pmdr-dev.lucasalt.fr' &&
              'focus' in client) ||
            (client.url === 'http://localhost:3000/' && 'focus' in client)
          )
            return client.focus()
        }
        if (clients.openWindow) return clients.openWindow('/')
      })
  )
})
