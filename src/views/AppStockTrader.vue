<template>
    <div class="wrapper">
        <stock-navigation></stock-navigation>
        <app-stock-content></app-stock-content>
    </div>
</template>

<script>
import StockNavigation from './Trade/Navigation'
import AppStockContent from './Trade/Content'

export default {
  components: {
    StockNavigation,
    AppStockContent
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style lang="css">
</style>
