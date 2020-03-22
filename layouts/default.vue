<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #e2f3f5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  height: 100vh;
  width: 100%;
}

@media screen and (min-width: 520px) {
  .container {
    margin: 0 auto;
    width: 500px;
  }
}
</style>
