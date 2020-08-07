<template>
  <div class="home">
    大概是首页
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  mounted() {
    this.$http.get(
        'https://wows.128512.xyz/zh-sg/news/?update=&page=1')
        .then(response => {
          console.log(response)
        })
  }
}
</script>
