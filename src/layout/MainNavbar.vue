<template>
    <md-toolbar id="toolbar" md-elevation="0" class="md-transparent md-absolute text-center" :class="toolbarClass"
        :color-on-scroll="colorOnScroll">
        <div class="md-toolbar-row md-collapse-lateral">
            <div class="md-toolbar-section-start">
                <h5 class="md-headline">{{title}}</h5>
            </div>
            <div class="md-toolbar-section-end ">

                <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: toggledClass}" @click="toggleNavbarMobile()">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse">
                    <div class="md-collapse-wrapper">
                        <mobile-menu nav-mobile-section-start="true">

                            <md-list-item v-for="item in items" v-if="showDownload" class="text--black" :to="item.path">
                                <div class="md-list-item-text ">
                                    <i class="material-icons">{{item.icon}}</i>
                                    <p class="">{{item.text}}</p>
                                </div>
                            </md-list-item>
                            <!-- Here you can add your items from the section-start of your toolbar -->
                        </mobile-menu>
                    </div>
                </div>
                <v-toolbar-items class="hidden-sm-and-down ">
                    <strong v-if="tradeApp">Funds: {{ funds }}</strong>
                    <v-btn left small class="" flat color="white" v-for="item in items" v-if="showDownload"  :to="item.path">
                        <i class="material-icons">{{item.icon}}</i>
                        {{item.text}}
                    </v-btn>
                </v-toolbar-items>
            </div>
        </div>
    </md-toolbar>
</template>

<script>
import MobileMenu from './MobileMenu'

let resizeTimeout
function resizeThrottler (actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66)
  }
}
export default {
  components: {
    MobileMenu
  },
  props: {
    tradeApp: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'danger',
      validator (value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value)
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'Send title as prop'
    },
    items: {
      type: Array,
      default () {
        return [
          { icon: '', text: 'default', path: '/' }
        ]
      }
    },
    toolbarColor: {
        type: String,
        default: 'md-transparent'
    }
  },
  data () {
    return {
      extraNavClasses: '',
      toggledClass: false,
      toolbarClasses: ' md-absolute '
    }
  },
  computed: {
    showDownload () {
      const excludedRoutes = ['login', 'landing', 'profile']
      return excludedRoutes.every(r => r !== this.$route.name)
    },
    funds () {
      return this.$store.getters.funds
    },
    toolbarClass() {
        let newColor = this.extraNavClasses ? this.extraNavClasses : this.toolbarColor
        let newClass = newColor + this.toolbarClasses
        return newClass
    }
  },
  methods: {
    bodyClick () {
      let bodyClick = document.getElementById('bodyClick')

      if (bodyClick === null) {
        let body = document.querySelector('body')
        let elem = document.createElement('div')
        elem.setAttribute('id', 'bodyClick')
        body.appendChild(elem)

        let bodyClick = document.getElementById('bodyClick')
        bodyClick.addEventListener('click', this.toggleNavbarMobile)
      } else {
        bodyClick.remove()
      }
    },
    toggleNavbarMobile () {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll () {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop
      let navbarColor = document.getElementById('toolbar')
      this.currentScrollValue = scrollValue
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`
        navbarColor.classList.remove(this.toolbarColor)
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = ''
          navbarColor.classList.add(this.toolbarColor)
        }
      }
    },
    scrollListener () {
      resizeThrottler(this.handleScroll)
    },
    scrollToElement () {
      let element_id = document.getElementById('downloadSection')
      if (element_id) {
        element_id.scrollIntoView({ block: 'end', behavior: 'smooth' })
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style lang="css" scoped>

a:hover, a:focus {
    color: white !important;
    text-decoration: none !important;
}
.md-toolbar.md-danger .md-title, .md-toolbar.md-danger .md-list .md-list-item-content, .md-toolbar.md-danger .md-toolbar-toggle .icon-bar, .md-toolbar.md-danger, .md-toolbar.md-danger:hover, .md-toolbar.md-danger:focus {
     color: #FFFFFF !important;
}
</style>
