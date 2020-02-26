<template>
  <div class="controllers">
    <button v-if="!isRunning" @click="startTimer">
      <i class="gg-chevron-right-o"></i>
    </button>
    <button v-else @click="pauseTimer">
      <i class="gg-play-pause-o"></i>
    </button>
    <button @click="resetTimer">
      Stop the timer
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    isRunning() {
      return this.$store.state.timer.isRunning
    }
  },

  methods: {
    startTimer() {
      // eslint-disable-next-line no-console
      this.$store.dispatch('startTimer').then(console.log('Timer started'))
    },

    pauseTimer() {
      this.$store.commit('pause')
    },

    resetTimer() {
      this.$store.commit('reset')
    }
  }
}
</script>

<style>
.controllers button {
  color: #faf7ff;
}
</style>
