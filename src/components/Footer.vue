<template>
  <div class="footer">
    <div>
      <el-select v-model="region" placeholder="请选择" @change="onRegionChange">
        <el-option label="亚洲" value="asia"/>
        <el-option label="欧洲" value="eu"/>
        <el-option label="北美" value="na"/>
        <el-option label="俄罗斯" value="ru"/>
      </el-select>
    </div>
    <div>
      <el-link type="info" :href="'https://github.com/mouyase/YojigenWows/commit/'+this.$env.VUE_APP_GIT_COMMIT">
        版本:0.0.1-{{ this.$env.VUE_APP_GIT_COMMIT }}
      </el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      region: this.$wows.getRegion(),
    }
  },
  methods: {
    onRegionChange() {
      this.$wows.setRegion(this.region)
      location.reload()
    },
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
