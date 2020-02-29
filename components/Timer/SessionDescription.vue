<template>
  <div class="sessionDescription">
    <span v-if="currentSession === 'work'">WORK</span>
    <span v-else-if="currentSession === 'shortBreak'">SHORT BREAK</span>
  </div>
</template>

<script>
export default {
  computed: {
    currentSession() {
      return this.$store.state.timer.currentSessionType
    }
  }
}
</script>

<style>
.sessionDescription {
  margin-top: 15px;

  font-family: 'Roboto', sans-serif;
  font-size: 24px;
}
</style>
