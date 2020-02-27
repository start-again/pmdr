<template>
  <div class="controllers">
    <button v-if="!this.$store.state.timer.isRunning" @click="playPause">
      <i class="gg"> <i class="gg-chevron-right-o"></i></i>
    </button>
    <button v-else @click="playPause">
      <i class="gg"> <i class="gg-play-pause-o"></i></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    playPause() {
      this.$store.commit('timer/playPause')
    }
  }
}
</script>

<style>
.controllers {
  position: absolute;
  left: 0;
  bottom: 150px;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 0;
}

.controllers button {
  color: #faf7ff;
}

.controllers button .gg {
  height: 40px;
  width: 40px;
}

.controllers button .gg-chevron-right-o,
.controllers button .gg-play-pause-o {
  transform: scale(1.8);
}
</style>
