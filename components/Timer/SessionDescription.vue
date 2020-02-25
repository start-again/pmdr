<template>
  <div class="sessionDescription">{{ currentSession }}</div>
</template>

<script>
export default {
  computed: {
    currentSession() {
      return this.$store.state.timer.currentSession
    }
  }
}
</script>

<style>
.sessionDescription {
  margin-top: 15px;

  font-family: 'Roboto', sans-serif;
  font-size: 24px;

  text-transform: uppercase;
}
</style>
