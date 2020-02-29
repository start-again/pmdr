<template>
  <div class="slider">
    <div class="name">{{ sliderName }}</div>
    <div class="rangeSelectorContainer">
      <VueSlider
        v-model="sliderValue"
        :tooltip="'none'"
        :min="0"
        :max="3600"
        :interval="300"
        :rail-style="{ backgroundColor: 'rgba(145, 145, 153, 0.25)' }"
        :process-style="{ backgroundColor: sliderColor }"
        :tooltip-style="{
          backgroundColor: sliderColor,
          borderColor: sliderColor
        }"
        :dot-size="16"
      >
        <template v-slot:dot="{ value, focus }">
          <div
            :class="['dotColor', { focus }]"
            :style="{
              backgroundColor: sliderColor
            }"
          ></div>
        </template>
      </VueSlider>
      <div class="rangeSelectorValue">{{ displayOutput }}</div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  components: {
    VueSlider
  },

  props: {
    sliderName: {
      type: String,
      default: 'Slider name'
    },
    sessionType: {
      type: String,
      default: 'work'
    }
  },

  data() {
    return {
      sliderValue: this.$store.state.timer.defaultValue[this.sessionType]
    }
  },

  computed: {
    sliderColor() {
      if (this.sessionType === 'work') {
        return '#EB5A46'
      } else if (this.sessionType === 'shortBreak') {
        return '#55C040'
      } else if (this.sessionType === 'longBreak') {
        return '#13A5E3'
      } else {
        return '#727282'
      }
    },

    displayOutput() {
      const minutes = Math.floor(this.sliderValue / 60)
      const seconds = this.sliderValue % 60
      const displayString = `${minutes < 10 ? '0' : ''}${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}`
      return displayString
    }
  },

  updated() {
    this.$store.commit('timer/updateDefaultValue', {
      sessionType: this.sessionType,
      newDuration: this.sliderValue
    })
  }
}
</script>

<style>
.slider {
  padding: 0 20px;
}

.slider .name {
  font-size: 20px;
}

.slider .rangeSelectorContainer {
  display: flex;
  justify-content: space-between;

  margin-top: 5px;
}

.slider .rangeSelectorContainer .vue-slider {
  width: 80% !important;
}

.slider .rangeSelectorValue {
  font-family: 'Roboto Mono', monospace;
}

.dotColor {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
