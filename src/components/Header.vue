<template>
  <div class="header">
    <div class="header-content">
      <div class="header-logo">
        <el-image style="height: 40px" fit="contain"
                  src="https://wows-static-production.gcdn.co/wowsp/80a8ce9e/assetsV2/ee10ad95160443e5741917dcf1c3d330.png">
        </el-image>
      </div>
      <div>
        <el-menu :default-active="$route.path" :router=true mode="horizontal">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/info">水表</el-menu-item>
          <el-menu-item index="/battleinfo">对战水表</el-menu-item>
          <el-menu-item index="" v-if="oauth===null||oauth.status!=='ok'" @click="login">登陆</el-menu-item>
          <el-submenu index="" v-if="oauth!==null&&oauth.status==='ok'">
            <template slot="title">{{ oauth.nickname }}</template>
            <el-menu-item index="">我的信息</el-menu-item>
            <el-menu-item index="" @click="logout">登出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      oauth: JSON.parse(localStorage.getItem('oauth')),
    }
  },
  mounted() {
  },
  methods: {
    login() {
      const loading = this.$loading({
        lock: true,
        text: '跳转中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      });
      window.location.href = 'https://api.worldoftanks.asia/wot/auth/login/?application_id=' + this.$env.VUE_APP_APPLICATION_ID + '&redirect_uri=' + this.$env.VUE_APP_DOMAIN + '/oauth.html'
    },
    logout() {
      this.oauth = {}
      localStorage.removeItem('oauth')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  .header-content {
    width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo {
      display: flex;
    }
  }
}
</style>
