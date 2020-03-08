<template>
  <div class="home">
    <h1>Hello world!</h1>
    <ul>
      <li>Session name: {{ $store.state.sessionName }}</li>
      <li>Work session: {{ $store.state.sessionDuration.work }}</li>
      <li>
        Short break session: {{ $store.state.sessionDuration.shortbreak }}
      </li>
      <li>Long Break session: {{ $store.state.sessionDuration.longbreak }}</li>
      <li>Time left in the counter: {{ $store.state.timeLeft }}</li>
      <li>Round number: {{ $store.state.round }}</li>
    </ul>
    <Controllers />
  </div>
</template>

<script>
import Controllers from '@/components/Controllers'

export default {
  components: {
    Controllers,
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
