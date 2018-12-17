<template>
  <div class="content">
    <p class="title">欢迎来到用户操作系统</p>
    <topBanner :banner="banner" :autoPlay="autoPlay" ></topBanner>
    <FooterNav v-bind:class="{'isIndex':isNowPage}"></FooterNav>

  </div>
</template>
<script>
  import FooterNav from '../../components/footer';
  import news from '../../components/news'
  import buttonCounter  from'../../components/test.vue'
  import topBanner from '../../components/banner.vue'
  export default{
    components: {
      FooterNav,
      news,
      topBanner
    },
    data(){
      return{
        isNowPage: true,
        autoPlay:false,
        groceryList: [
          { id: 0, text: '蔬菜' },
          { id: 1, text: '奶酪' },
          { id: 2, text: '随便其它什么人吃的东西' }
        ],
        msg:'',
        numbers: [ 1, 2, 3, 4, 5 ],
        postFontSize: 1,
        hhhhh:'jjjj',
        banner:[
          {href:"kk",img:"http://aa.ulgueom.cn/news/2.jpg"},
          {href:"kk",img:"http://aa.ulgueom.cn/news/11.jpg"},
          {href:"kk",img:"http://aa.ulgueom.cn/news/2.jpg"},
          {href:"kk",img:"http://aa.ulgueom.cn/news/11.jpg"}
        ]
      }
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
  }
</script>
