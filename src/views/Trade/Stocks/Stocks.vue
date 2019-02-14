<template>
    <v-container grid-list-xl>
        <v-layout row wrap justify-center>
            <stock v-for="stock in stocks" :key="stock.id" :propstock="stock"></stock>
        </v-layout>
    </v-container>
</template>
<script>
import Stock from './Stock'

export default {
  components: {
    Stock
  },
  data () {
    return {

    }
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>
