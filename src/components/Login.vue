<template>
  <div id="login" class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/image/avator.jpeg" />
      </div>
      <el-form
        :model="loginForm"
        :rules="loginFornRules"
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-goods"></el-input>
        </el-form-item>
        <!-- button -->
        <el-form-item class="btns">
          <el-button type="primary" @click="toLogin()">登录</el-button>
          <el-button type="info" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
var that;
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginFornRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 2, max: 8, message: '密码必须在2-8之间', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    //   重置按钮
    resetForm: function () {
      this.$refs.loginFormRef.resetFields()
    },
    toLogin: function () {
      that = this;
      that.$refs.loginFormRef.validate(async valid => {
        // 表单与验证
        if (!valid) {
          return
        }
        const result = await that.$http.post('/users/api/login.do',that.$qs.stringify(that.loginForm));
        const {message,token} = result.data;
        console.log(message);
        if(message != 'ok') return that.$message.error('登录失败')
        that.$message({
          message:'登录成功',
          type:'success'
        })
        window.sessionStorage.setItem('token',token);
        that.$router.push('/home');
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    background: #ffffff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #eeeeee;
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
