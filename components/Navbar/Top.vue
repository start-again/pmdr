<template>
  <div class="top-navbar">
    <nuxt-link to="/">
      <i class="gg">
        <i class="gg-arrow-left"></i>
      </i>
      <span>{{ pageTitle }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: 'Page title'
    }
  }
}
</script>

<style>
.top-navbar {
  position: relative;
  top: 0;
  right: 0;
  left: 0;

  margin: 20px 20px 20px;
}

.top-navbar a {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.top-navbar a span {
  margin-left: 30px;
  font-size: 20px;
}
</style>
