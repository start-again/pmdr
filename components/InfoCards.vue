<template>
  <div class="infoCards">
    <InfoCard>
      <template v-slot:icon>
        <TrendingUpIcon />
      </template>
      <template v-slot:title>Cycle Stage</template>
      <template v-slot:description>
        {{ $store.state.round }} of {{ $store.state.roundSeries }}
      </template>
    </InfoCard>
    <InfoCard>
      <template v-slot:icon>
        <ClockIcon />
      </template>
      <template v-slot:title>Next Cycle</template>
      <template v-slot:description>
        {{ $store.state.currentSession.id === 'work' ? 'Break' : 'Work' }}
      </template>
    </InfoCard>
  </div>
</template>

<script>
import { TrendingUpIcon, ClockIcon } from 'vue-feather-icons'
import InfoCard from '@/components/InfoCard'

export default {
  components: { TrendingUpIcon, ClockIcon, InfoCard },
}
</script>

<style scoped>
.infoCards {
  display: grid;

  gap: 1rem;
  grid-template-columns: repeat(2, auto);
}
</style>
