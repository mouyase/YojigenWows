<template>

</template>

<script>
export default {
  name: "Database",
  data() {
    return {
      params: this.$route.params,
    }
  },
  mounted() {
    console.log(this.params.shipID)
  }
}
</script>

<style scoped>

</style>
