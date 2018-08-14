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
      <tr v-for="(item,index) in peoples">
        <td>{{item.name}}</td>
        <td v-bind:id="index">
          <span>编辑</span>
          <span v-on:click="del">删除</span>
        </td>
      </tr>
    </table>
    <FooterNav v-bind:class="{'isManage':isNowPage}"></FooterNav>
  </div>
</template>
<script>
  //v-model在表单控件或者组件上创建双向绑定
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
        var v=this.nameValue;
        //trim - 输入首尾空格过滤
        if(v.trim()==""){
          console.log(请输入姓名)
        }else{
          var data={};
          data.name=v;
          //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
          this.peoples.push(data)
        }
      },
      del(e){
        //offsetParent就是距离该子元素最近的进行过定位的父元素
        var id=e.target.offsetParent.id;
        this.peoples.splice(id,1)
      }
    }
  }
</script>
