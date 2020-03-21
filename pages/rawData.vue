<template>
  <div class="home">
    <ul>
      <li>Session name: {{ $store.state.currentSession.name }}</li>
      <li>Work session: {{ $store.state.sessionDuration.work }}</li>
      <li>
        Short break session: {{ $store.state.sessionDuration.shortBreak }}
      </li>
      <li>Long Break session: {{ $store.state.sessionDuration.longBreak }}</li>
      <li>
        Time left in the counter (in seconds): {{ $store.state.timeLeft }}
      </li>
      <li>Time left in the counter (in minutes): {{ diplayTimeLeft }}</li>
      <li>Round number: {{ $store.state.round }}</li>
      <li>Round series: {{ $store.state.roundSeries }}</li>
      <li>Interval: {{ $store.state.timer.isRunning }}</li>
    </ul>
    <div class="controllers">
      <button @click="startTimer">Play</button>
      <button @click="pauseTimer">Pause</button>
      <button @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script>
import displayTime from '@/utils/displayTime'

export default {
  computed: {
    diplayTimeLeft() {
      return displayTime(this.$store.state.timeLeft)
    },
  },

  beforeMount() {
    this.$store.commit('timer/init')
  },

  methods: {
    startTimer() {
      this.$store.commit('timer/start')
    },
    pauseTimer() {
      this.$store.commit('timer/pause')
    },
    resetTimer() {
      this.$store.commit('timer/reset')
    },
  },
}
</script>
