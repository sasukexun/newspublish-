<template>
  <div class="content">
    <p class="title">欢迎来到用户操作系统</p>
    <FooterNav v-bind:class="{'isIndex':isNowPage}"></FooterNav>
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
        isNowPage: true
      }
    }
  }
</script>
