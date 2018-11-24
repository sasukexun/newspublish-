<template>
  <div class="content manage">
    <div class="input-area">
      <input type="text" placeholder="请输城市名称" v-model="cityValue">
      <button class="sub-button" >确定</button>
    </div>
    <FooterNav v-bind:class="{'isWeather':isNowPage}"></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '../../components/footer'
  export default{
    components: {
      FooterNav
    },
    data(){
      return{
        isNowPage: true,
        cityValue:"jjj"
      }
    },
    mounted() {
      this.getCity();
    },
    methods:{
      getCity:function () {
        this.$http.get('' +
          'http://api.map.baidu.com/location/ip?ak=ia6HfFL660Bvh43exmH9LrI6').
        then(response => {
          console.log(response.data);
        }, response => {
          console.log("error");
        });

      }
    }
  }
</script>
