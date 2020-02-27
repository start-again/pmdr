<template>
  <div class="circle">
    <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(110,110)">
        <circle r="100" class="back-circle" />
        <g transform="rotate(-90)">
          <circle
            r="100"
            class="front-circle"
            :style="{
              stroke: progressBarColor,
              strokeDasharray: this.$store.state.timer.progressBar.length,
              strokeDashoffset:
                this.$store.state.timer.progressBar.offset === 0
                  ? this.$store.commit('timer/updateProgressBar', {
                      value: this.$store.state.timer.defaultValue[
                        this.$store.state.timer.currentSessionType
                      ],
                      timePercent: this.$store.state.timer.defaultValue[
                        this.$store.state.timer.currentSessionType
                      ]
                    })
                  : this.$store.state.timer.progressBar.offset
            }"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  computed: {
    progressBarColor() {
      if (this.$store.state.timer.currentSessionType === 'work') {
        return '#EB5A46'
      } else if (this.$store.state.timer.currentSessionType === 'shortBreak') {
        return '#55C040'
      } else if (this.$store.state.timer.currentSessionType === 'longBreak') {
        return '#13A5E3'
      } else {
        return '#727282'
      }
    }
  }
}
</script>

<style>
.circle .back-circle {
  fill: none;
  stroke: #919199;
  stroke-width: 4px;
  opacity: 0.25;
}

.circle .front-circle {
  fill: none;
  stroke-width: 10px;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s linear;
}
</style>
