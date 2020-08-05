<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
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

.el-header {
  padding: 0;
}

.el-main {
  padding: 0;
}
</style>
