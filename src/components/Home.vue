<template>
  <div id="home">
    <el-container class="home-container">
      <el-header>
        <div class="header_left">
          <img src="../assets/image/avator.jpeg" alt />
          <span>后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse?'auto':'200px'">
          <div class="toggle-btn" @click="toToggle">
            <i class="el-icon-notebook-1"></i>切换
          </div>
          <el-menu
            class="el-menu-vertical-demo"
            active-text-color="#409EFF"
            :unique-opened='true'
            :collapse = 'isCollapse'
            :collapse-transition = 'false'
            :router = 'true'
            :default-active="activePath"
          >

            <el-submenu :index="item.path" v-for="(item,idx) in menuList" :key="idx"> 
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item  :index="subItem.path" v-for="(subItem,subIdx) in item.children" :key="subIdx" @click="activePathFn(subItem.path)">
                <i :class="subItem.icon"></i>
                <span slot="title">{{subItem.title}}</span>
              </el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { DURATION } from '../utils/constants'
import menuList from '../config/menuConfig'
var that;
export default {
  data() {
    return {
      msg: '',
      menuList:menuList,   // menuConfig文件返回的
      isCollapse:false,
      activePath:''
    }
  },
  created(){
    console.log(menuList);
    this.activePath = window.sessionStorage.getItem('activePath');
  },
  methods: {
    // 退出登录
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
    },
    // 展开折叠
    toToggle(){
      this.isCollapse = !this.isCollapse;
    },
    // 当前激活的菜单
    activePathFn(path){
      console.log(path)
      window.sessionStorage.setItem('activePath',path);
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
    .header_left {
      display: flex;
      align-items: center;
      color: #ffffff;
      span {
        padding-left: 15px;
      }
      img {
        width: 40px;
      }
    }
  }
  .el-aside {
    background: #333744;
    .toggle-btn{
      background: #ffffff;
      text-align: center;
      padding:10px 0;
    }
  }
  .el-main {
    background: #efefef;
  }
}
</style>