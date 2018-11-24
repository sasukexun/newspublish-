<template>
  <div id="news">
    <img src="./assets/lion.png" class="banner">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  // mounted() {
  //   this.getAjax();
  // },
  // methods:{
  //   getAjax:function () {
  //     this.$http.get('https://www.apiopen.top/weatherApi?city=%E6%88%90%E9%83%BD').then(response => {
  //
  //       console.log(response.data);
  //     }, response => {
  //       console.log("error");
  //     });
  //
  //   }
  // }
}
</script>
<style lang="scss">
  @import "assets/css/public";
</style>
