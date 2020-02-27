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

<style>
.countdown {
  font-family: 'Roboto Mono', monospace;
  font-size: 48px;
}
</style>
