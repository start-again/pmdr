export default (timeLeft) => {
  // Display the time left (seconds) into a readable string (min:sec)
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft - minutes * 60

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
