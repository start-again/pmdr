<template>
  <div class="home">
    <h1>Hello world!</h1>
    <ul>
      <li>Session name: {{ $store.state.currentSession.name }}</li>
      <li>Work session: {{ $store.state.sessionDuration.work }}</li>
      <li>
        Short break session: {{ $store.state.sessionDuration.shortBreak }}
      </li>
      <li>Long Break session: {{ $store.state.sessionDuration.longBreak }}</li>
      <li>Time left in the counter: {{ $store.state.timeLeft }}</li>
      <li>Round number: {{ $store.state.round }}</li>
      <li>Interval: {{ $store.state.timer.isRunning }}</li>
    </ul>
    <Controllers />
    <InfoCards />
  </div>
</template>

<script>
import Controllers from '@/components/Controllers'
import InfoCards from '@/components/InfoCards'

export default {
  components: {
    Controllers,
    InfoCards,
  },

  beforeMount() {
    this.$store.commit('timer/init')
  },

  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
