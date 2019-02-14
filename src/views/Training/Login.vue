<template>
    <v-app id="">
        <v-parallax class="" :style="headerStyle">
            <v-content>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                        <v-flex xs12 sm8 md4>
                            <v-card  dark class="elevation-12">
                                <v-toolbar dark color="primary">
                                    <v-toolbar-title>Login</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form ref="form">
                                        <v-text-field prepend-icon="person" name="login" v-model="email" label="Email" type="text"></v-text-field>
                                        <v-text-field id="password" prepend-icon="lock" v-model="password" name="password" label="Password" type="password"></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click="login">Login</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-parallax>

    </v-app>
</template>

<script>
import axios from '../../axios-auth.js'

export default {
  data: () => ({
    drawer: null,
    email: '',
    password: ''
  }),
  props: {
    source: String,
    image: {
        type: String,
        default: require('@/assets/img/101A10.jpg')
    }
  },
  computed: {
    headerStyle () {
      return {
        height: '100%',
        overflow: 'hidden',
        background: `url(${this.image}) no-repeat 0 0 fixed`,
        'background-size': 'cover',
        position: 'initial',
        width: '100%'
      }
    }
  },
    methods: {
        login() {
            this.$store.dispatch('login', {email: this.email, password: this.password, clear: () => { this.clear() }})

        },
        clear() {
            this.$refs.form.reset()
            if(this.$store.getters.isAuthenticated) {
                this.$router.push('/dashboard')
            }

        }
    },
    created() {

    }
}
</script>
