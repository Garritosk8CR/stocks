<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
import Introduction from './components/SectionIntroduction'
export default {
  components: {
    Introduction
  },
  data () {
    return {
      title: '101A Training Platform',
      description: 'Here we manage our members training progress',
      img: require('@/assets/img/101A10.jpg')
    }
  }
}

</script>

<style scoped>

</style>
