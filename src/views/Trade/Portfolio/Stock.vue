<template>
    <v-flex (xs12 | sm4 | md3) offset-(xs0 | lg2) align-center>
        <v-card color="grey darken-3" flat class="elevation-5 white--text" dark>
            <v-img :src="propstock.img" aspect-ratio="2.75"></v-img><br />
            <p class="headline" :style="{'color': '#E0E0E0'}">
                {{ propstock.name }} | {{propstock.quantity}}
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
            <v-text-field label="Quantity:" type="number" :class="{'red--text': insufficientQuantity}" :error="insufficientQuantity" v-model="quantity" :color="insufficientQuantity ? 'error' : 'green'" prefix="$" placeholder="10.000" value=""></v-text-field>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn round :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(Number(quantity))" @click="sellStock" color="orange">
                    {{ insufficientQuantity ? 'Not enough Stocks' : 'SELL'}}
                </v-btn>
            </v-card-actions>
        </v-card>
        <br />
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      quantity: 0
    }
  },
  props: ['propstock'],
  methods: {
    ...mapActions([
      'sell_Stock'
    ]),
    sellStock () {
      const order = {
        stockId: this.propstock.id,
        stockPrice: Number(this.propstock.price),
        quantity: Number(this.quantity)
      }
      this.sell_Stock(order)
    }
  },
  computed: {

    insufficientQuantity () {
      let result = false

      if (this.quantity > this.propstock.quantity) { result = true }
      return result
    }
  }
}
</script>
