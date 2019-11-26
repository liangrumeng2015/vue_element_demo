<template>
  <div id="home">
    <el-container class="home-container">
      <el-header>
        <div class="header_left">
            <img src="../assets/image/avator.jpeg" alt=""/>
            <span>后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { DURATION } from '../utils/constants'
var that
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    logout() {
      that = this
      that
        .$confirm('确定要退出?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          that.$message({
            type: 'success',
            duration: DURATION,
            message: '退出成功!'
          })
          window.sessionStorage.clear()
          that.$router.push('/login')
        })
        .catch(() => {
          that.$message({
            type: 'error',
            duration: DURATION,
            message: '已取消退出'
          })
        })
    }
  }
}
</script>
<style scoped lang="less">
#home {
  height: 100%;
}
.home-container {
    height: 100%;
  .el-header {
    background: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_left{
        display: flex;
        align-items: center;
        color: #ffffff;
        span{
            padding-left: 15px;
        }
        img{
            width: 40px;
        }
    }
  }
  .el-aside {
    background: #333744;
  }
  .el-main {
    background: #ccc;
  }
}
</style>