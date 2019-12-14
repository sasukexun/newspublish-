<template>
  <div id="news">
    <img src="./assets/images/lion.png" class="banner">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">
  @import "assets/css/public";
</style>
