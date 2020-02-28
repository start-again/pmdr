<template>
  <div class="options">
    <TopNavBar :page-title="'Parameters'" />
    <Slider :slider-name="'Work'" :session-type="'work'" />
    <Slider :slider-name="'Short break'" :session-type="'shortBreak'" />
  </div>
</template>

<script>
import TopNavBar from '@/components/Navbar/Top'
import Slider from '@/components/Slider'

export default {
  components: {
    TopNavBar,
    Slider
  },

  head() {
    return {
      title: 'Parameters'
    }
  }
}
</script>
