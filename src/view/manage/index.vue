<template>
  <div class="manage">
    <button class="add-button" v-on:click="add">新增</button>
    <div class="input-area" v-show="showAdd">
      <input type="text" placeholder="请输入人员姓名" v-model="nameValue">
      <button class="sub-button" v-on:click="addName">确定</button>
    </div>
    <table class="form">
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in peoples">
        <td>{{item.name}}</td>
        <td><span>编辑</span><span>删除</span></td>
      </tr>
    </table>
    <FooterNav v-bind:class="{'isManage':isNowPage}"></FooterNav>
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
        showAdd:false,
        peoples: [{'name':'Jack'},{'name':'Joe'}],
        nameValue:''
      }
    },
    methods:{
      add(){
        this.showAdd=true
      },
      addName(){
        var v = this.nameValue;
        //trim - 输入首尾空格过滤
        if(v.trim() == ""){
          console.log("请输入新增人员姓名")
        }else{
          var data = {};
          data.name = v;
          this.peoples.push(data)
        }
      }
    }
  }
</script>
