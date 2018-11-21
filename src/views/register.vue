<template>
  <div class="register">
    <div class="register-land">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="from">
            <el-form status-icon size="small" ref="login" :rules="rules" :model="login" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input placeholder="请输入用户名" v-model="login.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="Email">
                    <el-input type="Email" placeholder="请输入密码" v-model="login.Email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="login.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" placeholder="请输入密码" v-model="login.password2"></el-input>
                </el-form-item>
                <el-form-item class="left">
                    <el-button @click="register('login')">注册</el-button>
                    <el-button @click="Tologin">返回登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>
import AV from "../key";
export default {
  name: "register",
  data(){
      
      var validatePass2 = (rule, value, callback) => {
        if (value !== this.login.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
              callback();
            }
      };
      return {
          login:{
              name:'',
              password:'',
              password2:'',
              Email:''
          },
          rules:{
              name:[
                  {required: true,message: '请输入用户名', trigger: 'blur'},
                  { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ],
              Email:[
                  {required: true,message: '请输入邮箱', trigger: 'blur'},
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ],
              password:[
                  {required: true,message: '请输入密码', trigger: 'blur'},
                  { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '不允许输入空格等特殊符号' },
                  { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' },

              ],
              password2:[
                  {required: true,message: '请再次输入密码', trigger: 'blur'},
                  { validator: validatePass2, trigger: 'blur' }

              ]
          }
      }
  },
  methods:{
      register(formName){
          var that = this;
          this.$refs[formName].validate((valid) => {
          if (valid) {
            var username = this.login.name;
            var password = this.login.password;
            var email = this.login.Email;
            var user = new AV.User();
            user.setUsername(username);
            user.setPassword(password);
            user.setEmail(email);
            user.signUp().then(function (_User) {
                that.$message({
                    message: '注册成功，去登陆',
                    type: 'success'
                });
                that.$router.push({path: '/'})
                // console.log(111)
            }, (function (error) {
                alert(JSON.stringify(error));
            }));
          } else {
            alert('error submit!!');
            
          }
        });
      },
      Tologin(){
           this.$router.push({path: '/'})
      }
      
  },
  components: {

}
};
</script>
<style  lang="scss" scoped>
    .register{
         .register-land{
            width: 500px;
            height: 600px;
            background: rgba(241, 243, 245, 0.5);
            margin: auto;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 30px;
            box-sizing:border-box;
        }
        .logo{
            width: 150px;
            margin: 30px auto
        }
        .logo img{
            width: 150px;
        }
        .from{
            
           
        }
        .from .el-form-item__label{
            color: #000;
        }
        
        .but{
            border: none;
            width: 100px;
            height: 30px;
            background: #fff;
            margin: 0 auto;
            color: #000;
            border-radius: 5px;
        }
    }
   
    

</style>

