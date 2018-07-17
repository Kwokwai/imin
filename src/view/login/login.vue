<template>
  <div class="login">
    <div class="login_screen">
      <div class="login_logo">
        <h1>imin</h1>
      </div>
      <el-form class="login_form" ref="loginForm" :model="user" :rules="rules">
        <div class="login_input">
          <el-input placeholder="输入账号" v-model="user.name" prop="name" @keyup.enter.native="login">
            <template slot="prepend" >账号</template>
          </el-input>
        </div>
        <div class="login_input">
          <el-input placeholder="输入密码" v-model="user.pass" prop="pass"  @keyup.enter.native="login">
            <template slot="prepend" >密码</template>
          </el-input>
        </div>
      </el-form>
      <div class="login_res">
        <a>注册</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a>忘记密码?</a>
      </div>
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>export default {
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.user.name === 'admin' && this.user.pass === '123') {
            this.$notify({
              type: 'success',
              message: '欢迎你,' + this.user.name + '!',
              duration: 3000
            })
            this.$router.push({path: '/'})
          } else {
            this.$message({
              type: 'error',
              message: '用户名或密码错误',
              showClose: true
            })
          }
        } else {
          return false
        }
      })
    }
  },
  data () {
    return {
      user: {},
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
  .login {
    background: #0e0a13;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &_screen{
      background: #fbf8ff;
      width: 260px;
      padding: 25px;
      border-radius: 6px;
      box-shadow: 0 0 6px 6px rgba(51, 133, 255, 0.5);
    }
    &_logo{
      margin: 5px;
    }
    &_form{
      position: relative;
      width: 100%;
    }
    &_input{
      margin: 10px;
    }
    &_res{
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-pack: end;
      justify-content: flex-end;
      width: 100%;
      height: 35px;
      padding-top: 5px;
      color: #bbbec4;
    }
  }
</style>
