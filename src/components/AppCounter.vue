<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline"></span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-title>
                    <app-result></app-result>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange" @click="increment">Increment</v-btn>
                    <v-btn flat color="orange"@click="decrement">Decrement</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

import result from './Counter/Result'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  },
  components: {
    appResult: result
  }
}

</script>
