<template>
  <div class="info">
<!--    <div>-->
<!--      <el-input placeholder="请输入玩家昵称" v-model="queryNickName" @change="query" :maxlength="24">-->
<!--        <el-select v-model="region" slot="prepend" placeholder="请选择服务器">-->
<!--          <el-option label="亚服" :value=0></el-option>-->
<!--          <el-option label="美服" :value=1></el-option>-->
<!--          <el-option label="欧服" :value=2></el-option>-->
<!--          <el-option label="俄服" :value=3></el-option>-->
<!--        </el-select>-->
<!--        <el-button slot="append" icon="el-icon-search" @click="query"></el-button>-->
<!--      </el-input>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      params: this.$route.query,
      queryNickName: '_MoeArthur_',
      region: 0
    }
  },
  methods: {
    // query() {
    //   this.$http.post(this.$wows.getAPIHost() +'/wows/account/list/', this.$qs.stringify({
    //     application_id: this.$env.VUE_APP_APPLICATION_ID,
    //     search: this.queryNickName,
    //   })).then(response => {
    //     console.log(response)
    //   })
    // },
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100px;
}
</style>
