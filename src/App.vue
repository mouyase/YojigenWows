<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$http.get('https://cdn.jsdelivr.net/gh/mouyase/YojigenWows@gh-pages/zh_CN.json')
        // this.$http.get('/zh_CN.json')
        .then(response => {
          localStorage.setItem('zh_CN', JSON.stringify(response.data))
        })
  }
}
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

a {
  text-decoration: none;
}

#app {
  .el-header {
    padding: 0;
    //display: flex;
    //justify-content: center;
    //align-items: center;
  }

  .el-main {
    padding: 0;
    //display: flex;
    //justify-content: center;
    //align-items: center;
  }

  .el-footer {
    padding: 0;
    //display: flex;
    //justify-content: center;
    //align-items: center;
  }
}
</style>
