<template>
  <div class="dev">
    {{ chineseJSON }}
  </div>
</template>

<script>
export default {
  name: "Dev",
  data() {
    return {
      chineseJSON: '',
    }
  },
  mounted() {
    this.getChinese()
  },
  methods: {
    getChinese() {
      this.$http.get('/data/global.html').then(response => {
        let html = response.data
        const regexAll = /<tr class='i'>[\s]*<td class='src'  lang='en'>[\s]*IDS_(P[A-Z]S[A-Z]+[0-9]+)<\/td>[\s]*<td class='tra'  lang='zh'>[\s]*(.*)<\/td>[\s]*<\/tr>/g
        const regex = /<tr class='i'>[\s]*<td class='src'  lang='en'>[\s]*IDS_(P[A-Z]S[A-Z]+[0-9]+)<\/td>[\s]*<td class='tra'  lang='zh'>[\s]*(.*)<\/td>[\s]*<\/tr>/
        let elements = html.match(regexAll)
        let strings = {}
        elements.forEach((value, index) => {
          let string = regex.exec(value)
          strings[string[1]] = string[2]
        })
        this.chineseJSON = JSON.stringify(strings)
      })
    },
  },
}
</script>

<style scoped>

</style>
