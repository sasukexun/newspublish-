<template>
  <div class="banner" ref="banner">
    <div class="slider-wrapper">
      <ul class="slider-box"
          :style="{width:allWidth,left:positionLeft}"
          ref="sliderBox"
          @touchmove="fn"
       >
      <li class="slider-item"
          :class="indexBox==index? activeClass : ''"
          v-for="(item,index) in banner"
          :index="index"
          :style="{width:listWidth}"
          @touchstart="bannerStart"
          @touchmove="bannerMove"
          @touchend="bannerEnd"
        >
        <a :href="item.href">
          <img :src="item.img" alt="">
        </a>
      </li>
      </ul>
      <div class="carousel-indicators" v-if="pageIcon">
        <span v-for="(item,index) in carousel"
              :index="index"
              :class="indexBox==index? iconClass : ''"
        ></span>
      </div>
      <div v-if="bannerButton">
        <span class="carousel-btn carousel-prev-btn"></span>
        <span class="carousel-btn carousel-next-btn"></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      //初始页面
      initialSlide:{
        type: Number,
        default:1
      },
      //是否自动滑动
      autoPlay: {
        type:Boolean,
        default: true
      },
      //两次滑动间隔的时间
      interval: {
        type: Number,
        default: 2500
      },
      //底部小圆按钮
      pageIcon: {
        type:Boolean,
        default: true
      },
      //两边的按钮
      bannerButton: {
        type:Boolean,
        default: false
      },
      banner:{}
    },
    data(){
      return{
        allWidth:'',//总长度
        listWidth:'',//单位长度
        bannerLength:"",//个数
        positionLeft:0,//位移多少
        carousel:[],//icon
        timer1: '',//滑动函数
        indexBox:'',//滑动到的页面位置
        activeClass:"activeSlider",
        iconClass:"active",
        touch:{
          start: 0,
          move: 0,
          end: 0
        }
      }
    },
    mounted: function() {
      var that =this;
      //初始传值
      that.bannerLength=that.banner.length;
      that.indexBox=that.initialSlide-1;
      //初始化底部icon
      for (var n = 0; n < that.bannerLength; n++){
        that.carousel.push("");
      };
      //初始化节点style
      var widths=that.$refs.banner.offsetWidth;
      that.allWidth=(widths*that.bannerLength)+"px";
      that.listWidth=widths+"px";
      that.positionLeft=-(that.indexBox*parseInt(that.listWidth))+"px";
     // 初始化滚动
      that.autoPlay&&that.sliders();
    },
    methods: {
      //滑动函数
      sliders(){
        var that =this;
        that.timer1=setInterval(function(){
          var  bannerBox=that.$refs.sliderBox.style.left;
          that.positionLeft=(parseInt(bannerBox)- parseInt(that.listWidth))+"px";
          var indexs=-(parseInt(that.positionLeft)/parseInt(that.listWidth));
          that.indexBox=indexs;
          if((that.indexBox+1)>that.bannerLength){
            that.positionLeft=0;
            that.indexBox=0;
          }
        },that.interval);
      },
      bannerStart(e){
          this.clears();
          this.touch.start = e.touches[e.touches.length - 1].clientX;
      },
      bannerMove(e){
        this.touch.move= e.touches[e.touches.length - 1].clientX;
      },
      bannerEnd(){
          var that =this;
          if(this.touch.start-this.touch.move>0 &&(that.indexBox+1)<that.bannerLength) {
            that.indexBox=that.indexBox+1;
            that.positionLeft=(parseInt(that.positionLeft)-parseInt(that.listWidth))+"px";
          }
          if(this.touch.start-this.touch.move<0 && that.indexBox>0){
            that.indexBox=that.indexBox-1;
            that.positionLeft=(parseInt(that.positionLeft)+parseInt(that.listWidth))+"px";
          }
        setTimeout(that.sliders(), 12000)
      },
      fn(e) {
        e.preventDefault()
      },
      clears() {
        clearInterval(this.timer1);
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
  .banner{
    width: 100%;
    height: 6rem;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    background: #000;
    .slider-wrapper{
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .slider-box{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        transition-property:left;
        transition-timing-function: ease-in-out;
        transition-duration: 1000ms;
        .slider-item{
          float: left;
          height: 100%;
          img{
            width: 100%;
          }
        }
      }
      .carousel-indicators {
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 100%;
        text-align: center;
        font-size: 0;
        span {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #fff;
          margin: 0 4px;
          border-radius: 50%;
          cursor: pointer;
        }
        .active{
          background-color: #0fdebd;
        }
      }
      .carousel-btn {
        position: absolute;
        top: 50%;
        width: 50px;
        height: 45px;
        margin-top: -25px;
        cursor: pointer;
      }
      .carousel-prev-btn  {
        left: 0;
        background: url(../assets/images/arrow-prev.png) no-repeat;
      }
      .carousel-next-btn{
        right: 0;
        background: url(../assets/images/arrow-next.png) no-repeat;
      }
    }
  }
</style>
