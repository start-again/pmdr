<template>
  <div class="timer">
    <ProgressBar />
    <div class="timer">
      <Countdown />
      <SessionDescription />
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar'
import Countdown from './Countdown'
import SessionDescription from './SessionDescription'

export default {
  components: {
    ProgressBar,
    Countdown,
    SessionDescription
  }
}
</script>

<style>
.timer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: -1000;
}
</style>
