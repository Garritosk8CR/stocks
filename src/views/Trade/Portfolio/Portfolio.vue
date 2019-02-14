<template>
    <v-container grid-list-xl>
        <v-layout row wrap justify-center>
            <my-stock v-for="stock in stocks" :key="stock.id" :propstock="stock"></my-stock>
        </v-layout>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import MyStock from './Stock'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    MyStock
  }
}
</script>
