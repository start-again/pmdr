<template>
  <div class="timer">
    <Progression>
      <template v-slot:informations>
        <div class="informations">
          <p class="description">{{ $store.state.currentSession.name }}</p>
          <p class="timeLeft">{{ diplayTimeLeft }}</p>
        </div>
      </template>
    </Progression>
    <div class="controllers">
      <Controllers />
    </div>
  </div>
</template>

<script>
import Progression from '@/components/Timer/Progression'
import Controllers from '@/components/Timer/Controllers'

import displayTime from '@/utils/displayTime'

export default {
  components: {
    Progression,
    Controllers,
  },

  computed: {
    diplayTimeLeft() {
      return displayTime(this.$store.state.timeLeft)
    },
  },
}
</script>

<style scoped>
.informations {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);

  color: #ffffff;
  text-align: center;
}

.description {
  font-size: 2rem;
}

.timeLeft {
  font-size: 3.5rem;
}

.controllers {
  display: flex;
  justify-content: center;

  position: relative;
  bottom: 50px;

  text-align: center;
}
</style>
