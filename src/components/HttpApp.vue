<template>
    <div>
        <br />
        <br />
        <br />
        <users-list v-if="showList" @openCreateUser="eventShowCreate($event)" @openUserDetails="eventShowDetails($event)"></users-list>
        <create-user v-if="showCreateUser" @backToUsers="eventShowUsers($event)"></create-user>

        <div v-if="showUserDetails">
            <user-details :propUser="user" @goToUsers="eventShowUsers($event)"></user-details>
        </div>
    </div>
</template>

<script>
import User from './Models/User.js'
import UserDetails from './Http/Details.vue'
import CreateUser from './Http/CreateUser'
import Users from './Http/Users'

export default {

  data () {
    return {
      ...User,
      users: [],
      'showCreate': false,
      'showDetails': false,
      'showUsers': true,
      resource: {}
    }
  },
  methods: {
    submit () {
      this.$http.post('', this.user)
        .then(response => {
          this.submited = true
          this.users.push(this.user)
          this.eventShowUsers(true)
        }, error => {
          console.log('------------------------------------')
          console.log(error)
          console.log('------------------------------------')
        })
    },
    eventShowCreate (val) {
      this.user = { ...User }
      this.showCreate = val
      this.showDetails = !val
      this.showUsers = !val
    },
    eventShowDetails (val) {
      this.user = val
      this.showDetails = true
      this.showCreate = false
      this.showUsers = false
    },
    eventShowUsers (val) {
      this.showUsers = val
      this.showCreate = !val
      this.showDetails = !val
    }
  },
  components: {
    'user-details': UserDetails,
    'users-list': Users,
    'create-user': CreateUser
  },
  computed: {
    showCreateUser () {
      if (this.showUsers == false && this.showDetails == false) { return true }
      return false
    },
    showList () {
      if (this.showCreate == false && this.showDetails == false) { return true }
      return false
    },
    showUserDetails () {
      if (this.showCreate == false && this.showUsers == false) { return true }
      return false
    }
  }
}
</script>

<style>

</style>
