export const state = () => ({
  isRunning: 0, // If this value different from 0, the timer is running
})

export const mutations = {
  init(state) {
    // Defines the remaining time based on the current session ID
    const sessionName = this.state.currentSession.id
    this.state.timeLeft = this.state.sessionDuration[sessionName]
  },

  start(state) {
    state.isRunning = setInterval(() => {
      if (this.state.timeLeft > 0) {
        // If time is remaining in the timer,
        // Substracts 1 second, each second, from the time left
        this.state.timeLeft = this.state.timeLeft - 1
      } else {
        // If not time remaining in the timer,
        this.commit('timer/pause') // Stop the timer
        this.dispatch(
          'notifications/sessionEnd',
          this.state.currentSession.name
        ) // Send a notification
        this.commit('timer/startNextSession') // Init the timer for the next session
      }
    }, 1000)
  },

  pause(state) {
    // Stop the timer (interval)
    clearInterval(state.isRunning)
    state.isRunning = 0
  },

  reset(state) {
    // Reset the timer without starting a new session
    this.commit('timer/pause')
    this.commit('timer/init')
  },

  startNextSession(state) {
    // Start a new session at the end of the previous session.
    switch (this.state.currentSession.id) {
      case 'work':
        // Add a round to the series
        this.commit('rounds/add')

        // If the previous session was a working one
        // Init the timer with a short break or long break session
        if (this.state.round % this.state.roundSeries === 0) {
          // Check if the last session was the last in a series
          // Then start a long break session
          this.state.currentSession = {
            id: 'longBreak',
            name: 'Long break',
          }
        } else {
          // If the last session was not the last of a series
          // Then start a short break session
          this.state.currentSession = {
            id: 'shortBreak',
            name: 'Short break',
          }
        }
        break

      case 'shortBreak':
        // If the previous session was a short breaking one
        // Init the timer with a working session
        this.state.currentSession = {
          id: 'work',
          name: 'Work',
        }
        break

      case 'longBreak':
        // If the previous session was a long breaking one
        // Init the timer with a working session
        this.state.currentSession = {
          id: 'work',
          name: 'Work',
        }
        break
    }
    this.commit('timer/init')
  },
}
