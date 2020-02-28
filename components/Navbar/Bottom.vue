<template>
  <div class="bottom-navbar">
    <nuxt-link to="/parameters">
      <i class="gg">
        <i class="gg-menu"></i>
      </i>
    </nuxt-link>
    <button @click="stopTimer">
      <i class="gg">
        <i class="gg-undo"></i>
      </i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    stopTimer() {
      this.$store.commit('timer/stop')
    }
  }
}
</script>

<style>
.bottom-navbar {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 20px 20px 20px;
}

.bottom-navbar button {
  color: #faf7ff;
}
</style>
