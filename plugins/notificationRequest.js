const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  if (permission !== 'granted') {
    alert('You will not be able to receive notification from the app')
  }
}

const main = async () => {
  if (!('Notification' in window)) {
    alert('Notification API not supported!')
    return
  }
  await requestNotificationPermission()
}

main()
