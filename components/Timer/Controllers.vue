<template>
  <div class="controllers">
    <button v-if="$store.state.timer.isRunning === 0" @click="startTimer">
      <PlayCircleIcon size="38" />
    </button>
    <button v-else @click="pauseTimer">
      <PauseCircleIcon size="38" />
    </button>
  </div>
</template>

<script>
import { PlayCircleIcon, PauseCircleIcon } from 'vue-feather-icons'

export default {
  components: {
    PlayCircleIcon,
    PauseCircleIcon,
  },

  methods: {
    startTimer() {
      this.$store.commit('timer/start')
    },
    pauseTimer() {
      this.$store.commit('timer/pause')
    },
  },
}
</script>

<style scoped>
button {
  padding: 0;

  height: 2.2rem;
  width: 2.2rem;

  color: #ffffff;
  background-color: #22cfee44;
  border-radius: 1.1rem;
  border: none;
}

button:focus {
  outline: none;
}

button > svg {
  position: relative;
  top: -1px;
  left: -1px;
}

button > svg > circle {
  display: none;
}

button > svg > polygon {
  fill: #ffffff;
}
</style>
