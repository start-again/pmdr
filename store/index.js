export const strict = false

export const state = () => ({
  timer: {
    defaultValue: {
      work: 5000,
      shortbreak: 3000,
      longbreak: 4000
    },
    timeLeft: 5000,
    currentSession: 'work',
    interval: null,
    isRunning: false
  }
})

export const actions = {
  async startTimer({ commit }) {
    await commit('play')
  }
}

export const mutations = {
  play(state) {
    state.timer.isRunning = true // Define the status of the timer

    state.timer.interval = setInterval(() => {
      if (state.timer.timeLeft > 0) {
        state.timer.timeLeft = state.timer.timeLeft - 1000
      } else {
        this.commit('stop')
      }
    }, 1000)
  },

  pause(state) {
    clearInterval(state.timer.interval)
  },

  stop(state) {
    clearInterval(state.timer.interval) // Stop the timer
    state.timer.isRunning = false // Define the status of the timer

    if (state.timer.currentSession === 'work') {
      state.timer.timeLeft = state.timer.defaultValue.shortbreak
      state.timer.currentSession = 'shortbreak'
    } else {
      state.timer.timeLeft = state.timer.defaultValue.work
      state.timer.currentSession = 'work'
    }
  }
}
