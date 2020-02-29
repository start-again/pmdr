export const state = () => ({
  displayOutput: '',
  intervalTimer: null,
  timeLeft: null,
  defaultValue: {
    work: 1800,
    shortBreak: 300
  }, // Initial timer in seconds,
  currentSessionType: 'work',
  isPaused: false,
  isStarted: false,
  isRunning: false,
  progressBar: {
    length: Math.PI * 2 * 100,
    offset: 0
  }
})

export const mutations = {
  updateProgressBar(state, payload) {
    const offset =
      -state.progressBar.length -
      (state.progressBar.length * payload.value) / payload.timePercent
    state.progressBar.offset = offset
  },

  displayTimeLeft(state, timeLeft) {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const displayString = `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
    state.displayOutput = displayString
    this.commit('timer/updateProgressBar', {
      value: timeLeft,
      timePercent: state.defaultValue[state.currentSessionType]
    })
  },

  timer(state, seconds) {
    //  counts time, takes seconds
    const remainTime = Date.now() + seconds * 1000
    this.commit('timer/displayTimeLeft', seconds)

    state.intervalTimer = setInterval(() => {
      state.timeLeft = Math.round((remainTime - Date.now()) / 1000)
      if (state.timeLeft < 0) {
        // If the timer is done
        // Stop and reset the timer
        this.commit('timer/stop')
        return
      }
      this.commit('timer/displayTimeLeft', state.timeLeft)
    }, 1000)
  },

  playPause(state) {
    if (state.isStarted === false) {
      // Start the timer at the beginning
      this.commit('timer/timer', state.defaultValue[state.currentSessionType])
      state.isStarted = true
      state.isRunning = true
    } else if (state.isPaused) {
      // Start the timer when he's paused
      this.commit('timer/timer', state.timeLeft)
      state.isPaused = !state.isPaused
      state.isRunning = true
    } else {
      // Pause the timer
      clearInterval(state.intervalTimer)
      state.isPaused = !state.isPaused
      state.isRunning = false
    }
  },

  stop(state) {
    // Stop the timer
    clearInterval(state.intervalTimer)
    state.isStarted = false
    state.isRunning = false

    // Check if it was stopped by the user or by itself
    if (state.timeLeft < 0) {
      // Stopped by itself so start the next session
      if (state.currentSessionType === 'work') {
        state.currentSessionType = 'shortBreak'
        this.commit(
          'timer/displayTimeLeft',
          state.defaultValue[state.currentSessionType]
        )
        this.dispatch(
          'notifications/sendNotification',
          'Your work session is done!'
        )
      } else if (state.currentSessionType === 'shortBreak') {
        state.currentSessionType = 'work'
        this.commit(
          'timer/displayTimeLeft',
          state.defaultValue[state.currentSessionType]
        )
        this.dispatch(
          'notifications/sendNotification',
          'Your short break session is done!'
        )
      }
    } else {
      // Stopped by user so reset the timer
      this.commit(
        'timer/displayTimeLeft',
        state.defaultValue[state.currentSessionType]
      )
    }
  },

  updateDefaultValue(state, payload) {
    state.defaultValue[payload.sessionType] = payload.newDuration
  }
}
