export const strict = false

export const state = () => ({
  sessionDuration: {
    // All the values inside this are in seconds
    work: 10, // Default time for the work session
    shortBreak: 5, // Default time for the short break session
    longBreak: 8, // Default time for the long session break
  },
  currentSession: {
    id: 'work', // ID of the current session, this is used by the app
    name: 'Work', // Name of the current session, this value is displayed on the app
  },
  timeLeft: 0, // Time left in the counter
  round: 0, // Round number, if a multiple of 4, start a long break session
})
