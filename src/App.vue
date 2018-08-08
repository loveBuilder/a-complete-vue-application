<template>
  <div id="app">
    <el-container>
      <el-aside class="wrapper-nav" width="220px">
        <div class="logo"></div>
        <el-menu
          default-active="1"
          class=""
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <router-link to="/tdp/mywork"><i class="el-icon-menu"></i><span>我的工作</span></router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/tdp/upload/zhang"><i class="el-icon-menu"></i><span>上载管理</span></router-link>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>测试管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link to="/tdp/test"><span>测试管理</span></router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link to="/tdp/usecase"><span>用例管理</span></router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <router-link to="/tdp/devmng"><i class="el-icon-menu"></i><span>开发管理</span></router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/tdp/projectmng"><i class="el-icon-menu"></i><span>项目管理</span></router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/tdp/systemmng"><i class="el-icon-menu"></i><span>系统管理</span></router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <router-link to="/tdp/attendmng"><i class="el-icon-menu"></i><span>考勤管理</span></router-link>
          </el-menu-item>
          <el-menu-item index="8">
            <router-link to="/tdp/svnmng"><i class="el-icon-menu"></i><span>SVN管理</span></router-link>
          </el-menu-item>
          <el-menu-item index="9">
            <router-link to="/tdp/demandmng"><i class="el-icon-menu"></i><span>需求管理</span></router-link>
          </el-menu-item>
          <el-menu-item index="10">
            <router-link to="/tdp/codemng"><i class="el-icon-menu"></i><span>代码管理</span></router-link>
          </el-menu-item>
          <el-menu-item index="11">
            <router-link to="/tdp/issuesmng"><i class="el-icon-menu"></i><span>问题管理</span></router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="wrapper-content">
        <el-header>Header,当前path：{{ username }}</el-header>
        <el-main><router-view/></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: 'jack'
    }
  },
  watch: {
    'username': function (val) {
      console.log('val', val)
    }
  },
  mounted () {
    console.log(this.username)
    this.nameChange()
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log('key:', key)
      console.log('keyPath:', keyPath)
    },
    handleClose (key, keyPath) {
      console.log('key:', key)
      console.log('keyPath:', keyPath)
    },
    nameChange () {
      this.username += '1'
    }
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';

</style>
