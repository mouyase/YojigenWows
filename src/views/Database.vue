<template>
  <div>
<!--    <ShipCard :shipID="3551475152"></ShipCard>-->
  </div>
</template>

<script>
import ShipCard from '@/components/ShipCard'

export default {
  name: "Database",
  components: {
    ShipCard,
  },
  data() {
    return {
      params: {},
    }
  },
  mounted() {
    if (this.$route.params) {
      this.params = this.$route.params
    }
    // console.log(this.params.shipID)
  }
}
</script>

<style scoped>

</style>
