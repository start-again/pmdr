<template>
  <div class="home">
    <Timer />
    <InfoCards />
  </div>
</template>

<script>
import InfoCards from '@/components/InfoCards'
import Timer from '@/components/Timer'

export default {
  components: {
    InfoCards,
    Timer,
  },

  beforeMount() {
    this.$store.commit('timer/init')
  },

  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
