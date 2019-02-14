<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" height="300px">
                    <v-layout column fill-height>
                        <v-card-title>
                            <v-btn dark icon @click.stop="emitGoBack">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn dark icon class="mr-3">
                                <v-icon>edit</v-icon>
                            </v-btn>

                            <v-btn dark icon>
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-card-title>

                        <v-spacer></v-spacer>

                        <v-card-title class="white--text pl-5 pt-5">
                            <div class="display-1 pl-5 pt-5">{{propUser.name}}</div>
                        </v-card-title>
                    </v-layout>
                </v-img>

                <v-list two-line>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">phone</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{propUser.phone}}</v-list-tile-title>
                            <v-list-tile-sub-title>Phone</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">business</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title> {{propUser.company}} </v-list-tile-title>
                            <v-list-tile-sub-title>Company</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">work</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title> {{propUser.jobTitle}} </v-list-tile-title>
                            <v-list-tile-sub-title>Job title</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">mail</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title> {{propUser.email}} </v-list-tile-title>
                            <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">subject</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title> {{propUser.notes}} </v-list-tile-title>
                            <v-list-tile-sub-title>Notes</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
  props: ['propUser'],
  methods: {
    emitGoBack () {
      let val = true
      this.$emit('goToUsers', val)
    }
  }
}

</script>
