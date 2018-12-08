<template>
  <div class="content">
    <p class="title">欢迎来到用户操作系统</p>
    <news
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </news>
    <FooterNav v-bind:class="{'isIndex':isNowPage}"></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '../../components/footer';
  import news from '../../components/news'
  export default{
    components: {
      FooterNav,
      news
    },
    data(){
      return{
        isNowPage: true,
        groceryList: [
          { id: 0, text: '蔬菜' },
          { id: 1, text: '奶酪' },
          { id: 2, text: '随便其它什么人吃的东西' }
        ]
      }
    }
  }
</script>
