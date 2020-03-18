/* eslint-disable no-console */

// Handle event when user click on the notification
self.addEventListener('notificationclick', function(event) {
  const notification = event.notification // Get the notification
  const action = event.action // Get the actions of the notification

  console.log(action)

  if (action === 'confirm') {
    console.log('Action confirmed')
    notification.close()
  } else {
    console.log(this)
    notification.close()
  }
})
