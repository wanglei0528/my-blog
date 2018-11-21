<template>
  <div class="login">
    <div class="land">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="from">
            <el-form size="small" ref="login" :rules="rules" :model="login" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input placeholder="请输入邮箱/手机号" v-model="login.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="login.password"></el-input>
                </el-form-item>
                <el-form-item class="left">
                    <el-button @click="submit('login')">登陆</el-button>
                    <el-button @click="register">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>
import AV from "../key";
export default {
  name: "login",
  data(){
      return {
          login:{
              name:'',
              password:''
          },
          rules:{
              name:[
                  {message: '请输入活动名称', trigger: 'blur'},
                  { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              password:[
                  {}
              ]
          }
      }
  },
  methods:{
      submit(formName) {
        var that = this; 
        if(this.login.name!=''&&this.login.password!=''){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                var username = this.login.name;
                var password = this.login.password;
                AV.User.logIn(username, password).then(function (_User) {
                    that.$message({
                    message: '登陆成功',
                    type: 'success'
                }); 
                that.$router.push({path: '/Home'})
                    // console.log(111111)
                }, function (error) {
                    alert(JSON.stringify(error));
                });
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }else{
            this.$message.error('用户名或密码不能为空');
        }
        
      },
      register(){
          this.$router.push({path: '/register'})
      }
  },
  components: {

}
};
</script>
<style  lang="scss" scoped>
    .login{
          .land{
            width: 500px;
            height: 300px;
            background: rgba(241, 243, 245, 0.5);
            margin: auto;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        .logo{
            position: absolute;
            top: 50%;
            left: 30px;
            margin-top: -80px;
        }
        .logo img{
            width: 150px;
        }
        .from{
            width: 280px;
            position: absolute;
            top: 50%;
            right: 20px;
            margin-top: -70px;
            color: #000;
        }
        .from .el-form-item__label{
            color: #000;
        }
        .from .left{
            margin-left: 20px;
        }
    }
   
   

</style>

