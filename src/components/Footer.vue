<template>
  <div class="footer">
    版本:0.0.1-{{ this.$env.VUE_APP_GIT_COMMIT }}
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
