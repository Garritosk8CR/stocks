<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar color="teal" dark>
                    <v-toolbar-title class="text-xs-center">Users</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="fetchData">
                        <v-icon>autorenew</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <v-btn icon @click="emitShowCreateUser">
                        <v-icon>add</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-list subheader>
                    <v-list-tile v-for="user in users" :key="user.phone" avatar @click="emitShowUserDetails(user)">
                        <v-list-tile-action>
                            <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="user.name"></v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon color="teal">notes</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
  props: ['propUsers'],
  methods: {
    fetchData () {
      this.$http.get('')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.users = []
          for (let key in data) {
            this.users.push(data[key])
          }
        })
    },
    emitShowCreateUser () {
      this.$emit('openCreateUser', true)
    },
    emitShowUserDetails (puser) {
      this.$emit('openUserDetails', puser)
    }
  },
  data () {
    return {
      users: [],
      node: 'data'
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
