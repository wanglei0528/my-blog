<template>
  <div class="IndexMenu">
   <ul class="header-div">
     <li class="logo">
       <img src="../assets/logo-ss.png" alt="">
     </li>
     <li>
       <ul>
           <router-link to="HomePage" exact tag="li"><span class="">社区</span></router-link>
           <router-link to="MyBlog" exact tag="li"><span>我的</span></router-link>
         <li>
           <input type="text" placeholder="请输入搜索内容">
           <i class="el-icon-search pointer"></i>
         </li>
       </ul>
     </li>
     <li class="navRight">
       <div>
          <span v-if="userName==''" class="userName">去登陆</span>
          <el-dropdown v-else>
            <span class="el-dropdown-link userName">
              Hi~ {{userName}}
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="MyData" exact tag="span">我的资料</router-link>
                </el-dropdown-item>
                <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
       </div>
       <button class="write">
           <router-link to="AddBlog" exact tag="span">写博客</router-link>
       </button>
      
     </li>
   </ul>
  </div>
</template>
<script>
import AV from "../key";
export default {
  name:'IndexMenu',
  data(){
    return {
      userName:'瑞破破'
    }
  },
  methods:{
   show(index){
     console.log(index)
   }
  }
}
</script>
<style lang="scss">
  
  .IndexMenu{
    width:100%;
    height: 60px;
    // background: rgb(179, 211, 236);
    border: 1px solid #f0f0f0;
    
    .header-div{
      max-width:1500px;
      height: 100%;
      // background: #999;
      margin: 0 auto;
      padding: 0 30px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      .logo{
        line-height: 75px;
      }
      li{
        height: 60px;
        // line-height: 50px;
        
        img{
          width:120px;
        }
        ul{
          list-style: none;
          width: 600px;
          display: flex;
          li{
            width: 80px;
            // background: red;
            text-align: center;
            color: #666;
            font-size: 22px;
            line-height: 60px;
          }
          .router-link-active{
            color: #0d42ac
          }
          li:nth-child(3){
            width: 400px;
            height: 40px;
            background: #fff;
            border-bottom: 1px solid #999;
            border-radius: 20px;
            margin: 7.5px 50px;
            display: flex;
            justify-content:center;
            align-items:Center;

            input{
              width: 300px;
              height: 24px;
              border: none;
              background: none;
              outline: none;
            }
            button{
              width: 60px;
              height: 24px;
              border: none;
              outline: none;
              background:none;
              margin-top: 1px;
              font-size: 22px;
            }
          }
        }
      }
    }
    .navRight{
      display: flex;
      align-items:Center;
    }
    .navRight .userName{
      color: #333;
      font-size: 18px;
    }
    .write{
      height: 40px;
      width: 150px;
      margin: 0 20px ;
      background: #0d42ac;
      border: none;
      border-radius: 20px;
      color: #fff;
      font-size: 20px; 
      outline: none;
      cursor: pointer;
    }
    .pointer{
      cursor: pointer;
    }
  }
</style>


