<template>
  <div class="countdown">{{ minutes }}:{{ seconds }}</div>
</template>

<script>
export default {
  props: {
    minutes: {
      type: Number,
      default: null
    },
    seconds: {
      type: String,
      default: '00'
    }
  }
}
</script>

<style>
.countdown {
  font-family: 'Roboto Mono', monospace;
  font-size: 48px;
}
</style>
