<template>
  <div class="top-navbar">
    <button @click="reset">
      <RotateCwIcon />
    </button>
    <button @click="skip">
      Skip
    </button>
  </div>
</template>

<script>
import { RotateCwIcon } from 'vue-feather-icons'

export default {
  components: {
    RotateCwIcon,
  },

  methods: {
    reset() {
      this.$store.commit('timer/reset')
    },
    skip() {
      this.$store.commit('timer/skip')
    },
  },
}
</script>

<style scoped>
.top-navbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 1rem 1.5rem 0rem;
}

button {
  padding: 0;

  background-color: transparent;
  font-size: 1.3rem;
  border: none;
}

button:focus {
  outline: none;
}
</style>
