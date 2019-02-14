<template>
    <v-flex (xs12 | sm4 | md3) offset-(xs0 | lg2) align-center>
        <v-card color="grey darken-3" flat class="elevation-5 white--text" dark>
            <v-img :src="propstock.img" aspect-ratio="2.75"></v-img><br />
            <p class="headline" :style="{'color': '#E0E0E0'}">
                {{ propstock.name }}
            </p>
            <v-divider class="mx-3" color="orange"></v-divider>
            <label class="md-display-1 orange--text">
                <p class="md-subheading" :style="{'color': '#E0E0E0'}">
                    Price:
                </p>

                <span class="md-headline " :style="{'color': '#BDBDBD'}">
                    {{ parseInt(propstock.price) | currency}}
                </span>
            </label><br />
            <v-text-field label="Quantity:" type="number"  v-model="quantity" :error="insufficientFunds" :class="{'red--text': insufficientFunds}" :color="insufficientFunds ? 'error' : 'green'" placeholder="10.000" value=""></v-text-field>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn round :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(Number(quantity))" @click="buyStock" color="orange">
                    {{ insufficientFunds ? 'Insufficient funds' : 'BUY'}}
                </v-btn>
            </v-card-actions>
        </v-card>
        <br />
    </v-flex>
</template>

<script>
export default {
  data () {
    return {
      quantity: 0,
      card_text: ''
    }
  },
  props: ['propstock'],
  methods: {
    buyStock () {
      const order = {
        stockId: this.propstock.id,
        stockPrice: Number(this.propstock.price),
        quantity: Number(this.quantity)
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insufficientFunds () {
      let result = false
      let total = this.quantity * this.propstock.price
      if (total > this.funds) { result = true }
      return result
    }
  }
}
</script>
