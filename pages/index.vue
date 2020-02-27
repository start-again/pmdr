<template>
  <div class="home">
    <Timer />
    <Controllers />
    <BottomNavBar />
  </div>
</template>

<script>
import Timer from '@/components/Timer/index'
import Controllers from '@/components/Controllers'
import BottomNavBar from '@/components/NavBar/Bottom'

export default {
  components: {
    Timer,
    Controllers,
    BottomNavBar
  }
}
</script>

<style>
.home {
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */

  height: 100vh;
  width: 100%;
}
</style>
