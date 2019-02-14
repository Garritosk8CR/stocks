<template>
    <v-app id="">
        <v-parallax class="" :style="headerStyle">
            <v-content>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                        <v-flex xs12 sm8 md4>
                            <v-card dark class="elevation-12">
                                <v-toolbar dark color="primary">
                                    <v-toolbar-title>Sign Up</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form ref="form" v-model="valid" lazy-validation>
                                        <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
                                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                        <v-text-field v-model="gamertag" :rules="gamertagRules" label="Gamer tag" required></v-text-field>
                                        <v-text-field :append-icon="showPassword ? 'visibility_off' : 'visibility'" v-model="password" :rules="passwordRules" label="Password" required :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"></v-text-field>
                                        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
                                        <v-btn :disabled="!valid" @click="submit">
                                            Sign up
                                        </v-btn>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-parallax>
    </v-app>
</template>

<script>


export default {
    data: () => ({
        drawer: null,
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required'
        ],
        gamertag: '',
        gamertagRules: [
            v => !!v || 'Gamertag is required'
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required'
        ],
        showPassword: false,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        checkbox: false
    }),
    props: {
        source: String,
        image: {
            type: String,
            default: require('@/assets/img/101A4.jpg')
        }
    },
    computed: {
        headerStyle() {
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
        submit() {
            if (this.$refs.form.validate()) {
                const formData = {
                    name: this.name,
                    gamertag: this.gamertag,
                    email: this.email,
                    password: this.password,
                    clear: () => {
                        this.clear()
                    }
                }
                this.$store.dispatch('signup', formData)

            }
        },
        clear() {
            this.$refs.form.reset()
            if(this.$store.getters.isAuthenticated) {
                this.$router.push('/dashboard')
            }
        }
    }
}
</script>
