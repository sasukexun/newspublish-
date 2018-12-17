<template>
  <div class="content">
    <p class="title">欢迎来到用户操作系统</p>
    <topBanner :banner="banner" :autoPlay="autoPlay" ></topBanner>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <news
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-on:enlarge-text="postFontSize += $event"
      ></news>
    </div>
    <p>下一节：动态组件</p>
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
        isNowPage:true,
        autoPlay:false,
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
