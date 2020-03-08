export const strict = false

export const state = () => ({
  sessionDuration: {
    // All the values inside this are in seconds
    work: 10, // Default time for the work session
    shortbreak: 5, // Default time for the short break session
    longbreak: 8, // Default time for the long session break
  },
  sessionName: 'Short Break', // Name of the session, this value is displayed on the app
  timeLeft: 0, // Time left in the counter
  round: 0, // Round number, if a multiple of 4, start a long break session
})
