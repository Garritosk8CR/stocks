<template>
    <v-parallax :style="parallaxStyle" :height="Number(height)">
            <v-layout align-center column justify-center>
                <div class="md-display-1 white--text mb-3 text-xs-center">{{message}}</div>
            </v-layout>
        </v-parallax>
</template>

<script>
export default {
  computed: {
    parallaxStyle () {
      return {
        background: `url(${this.img}) no-repeat 50% 0  fixed`
      }
    }
  },
  props: {
    img: {
      type: String,
      default: 'https://stmed.net/sites/default/files/the-office-%28us%29-wallpapers-31722-4267114.jpg'
    },
    height: {
      type: String,
      default: '500'
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
