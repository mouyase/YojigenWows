<template>
  <div class="footer">
    <el-link type="info" :href="'https://github.com/mouyase/YojigenWows/commit/'+this.$env.VUE_APP_GIT_COMMIT">
      版本:0.0.1-{{ this.$env.VUE_APP_GIT_COMMIT }}
    </el-link>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
