<template>
  <div class="app-container">
  </div>
</template>

<script>
export default {
  name: 'ts-vue-test',
}
</script>

<style lang="scss">
@import "node_modules/normalize-scss/sass/_normalize";
@include normalize();

$background: #EEE;

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font-family: Helvetica, sans-serif;
  background: $background;
}
</style>
