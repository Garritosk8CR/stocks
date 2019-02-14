<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img :src="img" alt="Circle Image" class="img-raised rounded-circle img-fluid">
                </div>
                <div class="name">
                  <h3 class="title">Emilio Montero Rangel</h3>
                  <h6>< SOFTWARE DEVELOPER /></h6>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-dribbble"><i class="fab fa-github"></i></md-button>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-twitter"><i class="fab fa-instagram"></i></md-button>
                  <md-button href="javascript:void(0)" class="md-just-icon md-simple md-pinterest"><i class="fab fa-xbox"></i></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>A Software developer who loves video games and coffee. </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Vue examples', 'Work']"
              :tab-icon="['camera', 'palette']"
              plain
              nav-pills-icons
              color-button="success">
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <projects :projects="projects"></projects>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">

                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '../components/Tabs'
import Projects from './Profile/Projects'
export default {
    components: {
        Tabs,
        Projects
    },
    bodyClass: 'profile-page',
    data() {
        return {
            tabPane1: [{
                    image: require('../assets/img/examples/studio-1.jpg')
                },
                {
                    image: require('../assets/img/examples/studio-2.jpg')
                },
                {
                    image: require('../assets/img/examples/studio-4.jpg')
                },
                {
                    image: require('../assets/img/examples/studio-5.jpg')
                }
            ],
            tabPane2: [{
                    image: require('../assets/img/examples/olu-eletu.jpg')
                },
                {
                    image: require('../assets/img/examples/clem-onojeghuo.jpg')
                },
                {
                    image: require('../assets/img/examples/cynthia-del-rio.jpg')
                },
                {
                    image: require('../assets/img/examples/mariya-georgieva.jpg')
                },
                {
                    image: require('../assets/img/examples/clem-onojegaw.jpg')
                }
            ],
            tabPane3: [{
                    image: require('../assets/img/examples/mariya-georgieva.jpg')
                },
                {
                    image: require('../assets/img/examples/studio-3.jpg')
                },
                {
                    image: require('../assets/img/examples/clem-onojeghuo.jpg')
                },
                {
                    image: require('../assets/img/examples/olu-eletu.jpg')
                },
                {
                    image: require('../assets/img/examples/studio-1.jpg')
                }
            ]
        }
    },
    props: {
        header: {
            type: String,
            default: require('../assets/img/bg.jpg')
        },
        img: {
            type: String,
            default: require('../assets/img/pp.jpg')
        },
        projects: {
            type: Array,
            default: () => [{
                title: 'Stock Trader',
                img: '../assets/img/stocktrader.png',
                path: '/stocktrader'
            }]

        }
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.header})`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs /deep/ {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
