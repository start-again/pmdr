<template>
  <div class="countdown">
    {{
      this.$store.state.timer.displayOutput === ''
        ? this.$store.commit(
            'timer/displayTimeLeft',
            this.$store.state.timer.defaultValue[
              this.$store.state.timer.currentSessionType
            ]
          )
        : this.$store.state.timer.displayOutput
    }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$store.state.timer.displayOutput
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
