<template>
  <div id="usersList">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- card区块 -->
    <el-card class="box-card">
      <!-- 搜索框区域 -->
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- table区域 -->
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="roles" label="角色"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '王小虎',
          email: '201875234@qq.com',
          phone: '13844815296',
          roles: '吵架管理员1',
          status: true
        },
        {
          name: '王小虎',
          phone: '13844815296',
          roles: '吵架管理员2',
          status: false
        },
        {
          name: '王小虎',
          phone: '13844815296',
          roles: '吵架管理员3',
          status: true
        },
        {
          name: '王小虎',
          phone: '13844815296',
          roles: '吵架管理员4',
          status: true
        },
        {
          name: '王小虎',
          phone: '13844815296',
          roles: '吵架管理员4',
          status: false
        },
        {
          name: '王小虎',
          phone: '13844815296',
          roles: '吵架管理员4',
          status: true
        },
        {
          name: '王小虎',
          phone: '13844815296',
          roles: '吵架管理员4',
          status: false
        }
      ]
    }
  }
}
</script>