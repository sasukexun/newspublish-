<template>
  <div class="content">
    <p>banner</p>
    <topBanner :banner="banner" :autoPlay="autoPlay" ></topBanner>
    <p>nav切换</p>
    <button
      v-for="item in tabs"
      :key="item"
      :class="['tab-button',{active:current===item}]"
      @click="current=item"
    >{{item}}</button>
    <component
      :is="currentPage"
      class="tab"
    >
    </component>

    <FooterNav v-bind:class="{'isComponents':isComponents}"></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '../../components/footer';
  import topBanner from '../../components/banner.vue'
  import tabHome from '../../components/pagePost/item1';
  import tabPosts from '../../components/pagePost/item2'
  import tabArchive from '../../components/pagePost/item3'
  export default{
    components: {
      FooterNav,
      topBanner,
      tabHome,
      tabPosts,
      tabArchive
    },
    data(){
      return{
        isComponents:true,
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
        ],
        current: 'Home',
        tabs: ['Home','Posts','Archive']
      }
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      currentPage: function () {
        return 'tab' + this.current
      }
    }
  }
</script>
<style>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
