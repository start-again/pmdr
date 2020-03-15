<template>
  <div class="controllers">
    <button @click="startTimer">Play</button>
    <button @click="pauseTimer">Pause</button>
    <button @click="resetTimer">Reset</button>
  </div>
</template>

<script>
export default {
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
