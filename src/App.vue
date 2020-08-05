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
  }
}
</script>
<style lang="scss">
body {
  //background-color: #0b344d;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

#app {
  .el-header {
    padding: 0;
  }

  .el-main {
    padding: 0;
  }

  .el-footer {
    padding: 0;
  }
}
</style>
