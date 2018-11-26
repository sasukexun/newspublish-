<template>
  <div class="content Weather">
    <div class="input-area">
      <input type="text" placeholder="请输城市名称" v-model="cityValue">
      <button class="sub-button" v-on:click="cityWeather">搜索</button>
      <div v-for="(item,index) in temperature" class="Weather_box">
        <div class="cityWeather">
          <div class="date">{{item.date}}</div>
          <div class="cold">
            <p>{{item.high}}</p>
            <p>{{item.low}}</p>
            <p>{{item.type}}</p>
          </div>
        </div>
      </div>
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
        cityValue:"",
        weather:"",
        temperature:[]
      }
    },
    mounted() {
      this.getCity();
    },
    methods:{
      getCity:function () {
        this.$http.jsonp('' +
          'http://api.map.baidu.com/location/ip?ak=ia6HfFL660Bvh43exmH9LrI6').
        then(response => {
          this.cityValue=response.data.content.address_detail.city;
          // console.log(response.data)
        }, response => {
          console.log("error");
        });
      },
      cityWeather:function () {
        this.$http.get('' +
          'https://www.apiopen.top/weatherApi?city='+this.cityValue).
        then(response => {
          // console.log(response.data);
          this.temperature=response.data.data.forecast;
        }, response => {
          console.log("error");
        });
      }
    }
  }
</script>
