<template>
  <div class="content Weather">
    <div class="input-area">
      <input type="text" placeholder="请输城市名称" v-model="cityValue">
      <button class="sub-button" v-on:click="cityWeather">搜索</button>
      <p class="tip">{{answer}}</p>
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
  var lodash = require('lodash');
  export default{
    components: {
      FooterNav
    },
    data(){
      return{
        isNowPage: true,
        cityValue:"",
        weather:"",
        temperature:[],
        answer: '请输入您想知道的城市天气'
      }
    },
    watch: {
      cityValue: function () {
        this.answer = '搜索中';
        this.debouncedcityWeather()
      }
    },
    created: function () {
      this.debouncedcityWeather = _.debounce(this.cityWeather, 500)
    },
    mounted() {
      // this.getCity();
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
        if(this.cityValue==""){
          this.answer="";
          this.temperature=[];
        }else{
          this.$http.get('https://www.apiopen.top/weatherApi?city='+this.cityValue).
          then(response => {
            this.temperature=response.data.data.forecast;
            this.answer=this.cityValue+":近七天的温度";
          }, response => {
            this.answer="很抱歉没有找到该城市";
            console.log("error");
          });
        }
      }
    }
  }
</script>
