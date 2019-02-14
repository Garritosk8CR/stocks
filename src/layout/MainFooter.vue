<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">

    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style>
</style>
