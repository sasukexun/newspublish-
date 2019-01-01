<template>
  <div class="content">
    <p class="title">欢迎来到用户操作系统</p>
    <topBanner :banner="banner" :autoPlay="autoPlay" ></topBanner>
    <FooterNav v-bind:class="{'isIndex':isNowPage}"></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '../../components/footer';
  import topBanner from '../../components/banner.vue'
  export default{
    components: {
      FooterNav,
      topBanner
    },
    data(){
      return{
        isNowPage:true,
        autoPlay:true,
        numbers: [ 1, 2, 3, 4, 5 ],
        banner:[
          {href:"kk",img:"http://aa.ulgueom.cn/news/2.jpg"},
          {href:"kk",img:"http://aa.ulgueom.cn/news/11.jpg"},
          {href:"kk",img:"http://aa.ulgueom.cn/news/2.jpg"},
          {href:"kk",img:"http://aa.ulgueom.cn/news/11.jpg"}
        ],
        postFontSize: 1,
        posts: [
          { id: 1, title: 'My journey with Vue' },
          { id: 2, title: 'Blogging with Vue' },
          { id: 3, title: 'Why Vue is so fun' }
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
