<template>
  <div class="progression">
    <div class="background-circle">
      <div class="progression-circle">
        <slot name="informations"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progression {
  overflow: hidden;

  z-index: -1000;
}

@media screen and (min-width: 520px) {
  .progression {
    overflow: visible;
  }
}

.background-circle {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  height: 110vw;
  width: 110vw;

  background-color: #3d5af144;
  border-radius: calc(110vw / 2);
}

@media screen and (min-width: 520px) {
  .background-circle {
    height: 520px;
    width: 520px;

    border-radius: 260px;
  }
}

.progression-circle {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  height: 90vw;
  width: 90vw;

  background: linear-gradient(-45deg, #3d5af1, #0e153a);
  border-radius: calc(90vw / 2);
}

@media screen and (min-width: 520px) {
  .progression-circle {
    height: 430px;
    width: 430px;

    border-radius: 215px;
  }
}
</style>
