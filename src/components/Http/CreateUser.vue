<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar color="teal" dark>
                    <v-toolbar-title class="text-xs-center">Create User</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>
                        <v-flex xs12 align-center justify-space-between>
                            <v-layout align-center>
                                <v-avatar size="40px" class="mr-3">
                                    <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt="">
                                </v-avatar>
                                <v-text-field placeholder="Name" v-model="user.name"></v-text-field>
                            </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field prepend-icon="business" placeholder="Company" v-model="user.company"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field placeholder="Job title" v-model="user.jobTitle"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field prepend-icon="mail" placeholder="Email" v-model="user.email"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field type="tel" prepend-icon="phone" placeholder="(000) 000 - 0000" mask="phone"
                                v-model="user.phone"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field prepend-icon="notes" placeholder="Notes" v-model="user.notes"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-btn flat color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="emitGoback()">Cancel</v-btn>
                    <v-btn flat @click="submit()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import User from '../Models/User.js'

export default {

  data () {
    return {
      ...User,
      submited: false
    }
  },
  methods: {
    submit () {
      this.$http.post('', this.user)
        .then(response => {
          this.emitGoback()
        }, error => {
          console.log('------------------------------------')
          console.log(error)
          console.log('------------------------------------')
        })
    },
    emitGoback () {
      this.$emit('backToUsers', true)
    }
  }
}
</script>

<style>

</style>
