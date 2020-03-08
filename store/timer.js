export const state = () => ({
  intervalTimer: 0,
})

export const mutations = {
  init(state) {
    // Get the session name and transform it to be an object key
    // Example: Short Break => shortbreak
    const sessionName = this.state.sessionName
      .split(' ')
      .join('')
      .toLowerCase()
    // Defines the remaining time based on the current session name
    this.state.timeLeft = this.state.sessionDuration[sessionName]
  },

  start(state) {
    // On each second, substracts 1 second from the time left
    state.timer.intervalTimer = setInterval(() => {
      this.state.timeLeft = this.state.timeLeft - 1
    }, 1000)
  },

  pause(state) {
    // Stop the timer (interval)
    clearInterval(state.timer.intervalTimer)
  },

  reset(state) {
    // Reset the timer without starting a new session
    this.commit('timer/pause')
    this.commit('timer/init')
  },

  startNextSession(state) {
    // Start a new session at the end of the previous session. WIP
  },
}
