<template>
    <div class="wrapper">

        <section-introduction img="img"></section-introduction>

        <section-reasons teamImg1="teamImg1" teamImg2="teamImg2" teamImg3="teamImg3"></section-reasons>

        <parallax-divisor img="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="250" message="Here is our team"></parallax-divisor>
        <section-team></section-team>

        <parallax-divisor img="https://stmed.net/sites/default/files/the-office-%28us%29-wallpapers-31722-4267114.jpg" height="500" message="Work with us"></parallax-divisor>
        <section-contact></section-contact>

    </div>
</template>

<script>
import SectionIntroduction from './landing/SectionIntroduction'
import SectionReasons from './landing/SectionReasons'
import SectionTeam from './landing/SectionTeam'
import SectionContact from './landing/SectionContact'
import ParallaxDivisor from './landing/ParallaxDivisor'
export default {

  props: {
    image: {
      type: String,
      default: require('@/assets/img/b9.jpg')
    },
    image2: {
      type: String,
      default: require('@/assets/img/b1.jpg')
    },
    teamImg1: {
      type: String,
      default: require('@/assets/img/faces/avatar.jpg')
    },
    teamImg2: {
      type: String,
      default: require('@/assets/img/faces/christian.jpg')
    },
    teamImg3: {
      type: String,
      default: require('@/assets/img/faces/kendall.jpg')
    }
  },
  computed: {
    sectionStyle () {
      return {
        backgroundImage: `url(${this.image2})`
      }
    }
  },
  components: {
    SectionIntroduction,
    SectionReasons,
    SectionTeam,
    SectionContact,
    ParallaxDivisor
  }
}
</script>

<style lang="css" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 1px;
}

@media all and (min-width: 930px) {
  .toolbar__title {
    margin-left: 15%;
  }
  #content {
    width: 70%;
    margin: auto;
  }
  .btn-container {
    display: flex;
  }
  .parallax {
   min-height: 380px;
   height: 100%;
}

}

</style>
