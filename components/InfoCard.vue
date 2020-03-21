<template>
  <div class="infoCard">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <p class="title">
      <slot name="title"></slot>
    </p>
    <p class="description">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<style scoped>
.infoCard {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  background-color: #ffffff;
  text-align: center;
  border-radius: 10px;
}

.infoCard:first-child {
  margin-left: 1rem;
}

.infoCard:last-child {
  margin-right: 1rem;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.4rem;

  height: 2.6rem;
  width: 2.6rem;

  color: #293c9b;
  background-color: #22cfee44;
  border-radius: 1.3rem;
}

.title {
  font-size: 12px;
  font-weight: 500;
  opacity: 0.6;
}

.description {
  font-size: 18px;
  font-weight: 600;
}
</style>
