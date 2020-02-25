<template>
  <div class="timer">
    <Countdown :minutes="minutes" :seconds="seconds" />
    <SessionDescription />
  </div>
</template>

<script>
import Countdown from './Countdown'
import SessionDescription from './SessionDescription'

export default {
  components: {
    Countdown,
    SessionDescription
  },

  computed: {
    timeLeft() {
      return this.$store.state.timer.timeLeft
    },

    minutes() {
      return Math.floor(this.timeLeft / 1000 / 60)
    },

    seconds() {
      if (this.timeLeft / 1000 < 10) {
        return '0' + this.timeLeft / 1000
      } else {
        return (this.timeLeft / 1000).toString()
      }
    }
  }
}
</script>

<style>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
