<template>
<div>
    <v-alert :value="true" type="success">
        That's Correct!
    </v-alert>
    <hr>
    <v-btn depressed large color="primary" @click="onNextQuestion">Next Question</v-btn>
</div>
</template>
<style>

</style>
<script>

export default{
  methods: {
    onNextQuestion () {
      this.$emit('confirmed')
    }
  }
}
</script>
