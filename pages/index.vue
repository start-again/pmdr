<template>
  <div class="home">
    <Timer />
    <Controllers />
  </div>
</template>

<script>
import Timer from '@/components/Timer/index'
import Controllers from '@/components/Controllers'

export default {
  components: {
    Timer,
    Controllers
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;
}
</style>
