<template>
    <div id="navigation">
        <div class="md-layout align-center">
            <div class="md-layout-item">
                <md-toolbar class="md-white md-absolute" md-elevation="0">
                    <div class="md-toolbar-row md-collapse-lateral">
                        <div class="md-toolbar-section-start">
                            <h4 class="md-display-1" :style="{color: '#e91e63'}">Stock Trader</h4>
                        </div>
                        <div class="md-toolbar-section-end">
                            <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: toggledClass}" @click="toggleNavbarMobile()">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </md-button>

                            <div class="md-collapse">
                                <div class="md-collapse-wrapper">
                                    <mobile-menu nav-mobile-section-start="true" class="text-center">
                                        <md-list-item>
                                            <p class="body-2 font-weight-medium" :style="{color: '#7CB342'}">
                                                Funds: {{ funds | currency }}
                                            </p>
                                        </md-list-item>
                                        <md-list-item>
                                            <md-button class="md-simple" :style="{color: 'black'}" @click="endDay">
                                                <p class=" font-weight-medium" :style="{color: '#757575'}">End Day</p>
                                            </md-button>
                                        </md-list-item>
                                        <md-list-item class="text--red">
                                            <drop-down direction="down" :style="{color: 'black'}">
                                                <md-button slot="title" class="md-button md-simple dropdown-toggle"
                                                    data-toggle="dropdown">
                                                    <p class=" font-weight-medium" :style="{color: '#757575'}">Save & Load </p>
                                                </md-button>
                                                <ul class="dropdown-menu " :class="{'dropdown-menu-right': responsive}">
                                                    <li class="dropdown-header "></li>
                                                    <li><a class="body-1  font-weight-regular" @click="saveData">Save</a></li>
                                                    <li> <a class="body-1  font-weight-regular" @click="loadData">Load</a></li>
                                                </ul>
                                            </drop-down>
                                        </md-list-item>
                                        <!-- Here you can add your items from the section-start of your toolbar -->
                                    </mobile-menu>
                                </div>
                            </div>

                            <div class="hidden-sm-and-down">
                                <md-list>
                                    <md-button class=" md-button md-black md-simple" @click="endDay">
                                        <p>End Day</p>
                                    </md-button>
                                    <drop-down direction="down">
                                        <md-button slot="title" class="md-button md-simple md-button-link md-black md-simple dropdown-toggle"
                                            data-toggle="dropdown">
                                            <p>Save & Load</p>
                                        </md-button>
                                        <ul class="dropdown-menu " :class="{'dropdown-menu-right': responsive}" :style="{color: 'red', 'background-color': 'white !important'}">
                                            <li class="dropdown-header "></li>
                                            <li><a class="dropdown-item" @click="saveData">Save</a></li>
                                            <li> <a class="dropdown-item md-danger" @click="loadData">Load</a></li>
                                        </ul>
                                    </drop-down>
                                    <v-spacer></v-spacer>
                                    <v-layout class="text-center" align-start justify-center row >

                                        <v-flex>
                                            <h5 class="body-2 font-weight-medium" :style="{color: '#7CB342', 'margin-left': '10px'}">
                                                Funds:&nbsp;{{ funds|currency }}
                                            </h5>

                                        </v-flex>
                                    </v-layout>

                                </md-list>
                            </div>
                        </div>
                    </div>
                </md-toolbar>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import NavTabsCard from '../../components/cards/NavTabsCard'
import mobileMenu from '@/layout/MobileMenu.vue'

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
  data () {
    return {
      items: [{
        title: 'Click Me'
      },
      {
        title: 'Click Me'
      },
      {
        title: 'Click Me'
      },
      {
        title: 'Click Me 2'
      }
      ],
      toggledClass: false,
      responsive: false
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    onResponsiveInverted () {
      if (window.innerWidth < 500) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    endDay () {
      this.randomizeStocks()
    },
    toggleNavbarMobile () {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData () {
      this.fetchData()
    },
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
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  props: {
    image: {
      type: String,
      default: require('@/assets/img/bg.jpg')
    },
    img: {
      type: String,
      default: require('@/assets/img/faces/avatar.jpg')
    }
  },
  computed: {
    bgImage () {
      return {
        backgroundImage: `url(${this.image})`
      }
    },
    funds () {
      return this.$store.getters.funds
    }
  },
  components: {
    NavTabsCard,
    mobileMenu
  }
}

</script>
<style lang="css" scoped>
.md-collapse-lateral .md-collapse .md-list-item .md-list-item-content .md-button,
.md-collapse-lateral .md-collapse .md-list-item .md-list-item-content .md-button:focus,
.md-collapse-lateral .md-collapse .md-list-item .md-list-item-content .md-button:hover {
    color: #FFFFFF !important;
}

.md-toolbar .dropdown-menu li>a:hover,
.md-toolbar .dropdown-menu li>a:focus {
    color: #FFFFFF !important;
    background-color: transparent !important;
}

.md-toolbar .dropdown-menu li>a:hover,
.md-toolbar .dropdown-menu li>a:focus {
    color: #FFFFFF !important;
    background-color: #ef5350 !important;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.dropdown-menu li a:hover,
.dropdown-menu li a:focus,
.dropdown-menu li a:active {
    background-color: transparent !important;
    background: linear-gradient(60deg, #ef5350, #d32f2f);
    color: #FFFFFF !important;
    transition: all 150ms linear;
}

.md-collapse-lateral .md-collapse .dropdown .dropdown-menu {
    background-color: transparent;
    position: static;
    border: 0;
    padding-bottom: 20px;
    -webkit-transition: none;
    transition: all 150ms linear;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transform: scale(1) !important;
    transform: scale(1) !important;
    width: 100%;
    margin-bottom: 15px;
    padding-top: 0;
    -webkit-animation: none;
    animation: none;
    opacity: 1;
    overflow-y: hidden;
    display: none;
}

.md-menu,
.toggle {
    margin: 24px;
}
</style>
