<template>
    <div class="main ">
        <div class="section text-center">
            <div class="container">
                <div class="team">
                    <div class="md-layout">
                        <div class="md-layout-item md-medium-size-33 md-small-size-100">
                            <div class="team-player">
                                <md-card class="md-card-plain">
                                    <div class="md-layout-item md-size-50 mx-auto">
                                        <img :src="teamImg1" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                                    </div>
                                    <h4 class="card-title">Gigi Hadid
                                        <br>
                                        <small class="card-description text-muted">Model</small>
                                    </h4>
                                    <md-card-content>
                                        <p class="card-description">You can write here details about one of your
                                            team members. You can give more details about what they do. Feel free
                                            to add some <a href="#">links</a> for people to be able to follow them
                                            outside the site.</p>
                                    </md-card-content>
                                    <md-card-actions class="text-center">
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-twitter"></i>
                                        </md-button>
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-instagram"></i>
                                        </md-button>
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-facebook-square"></i>
                                        </md-button>
                                    </md-card-actions>
                                </md-card>
                            </div>
                        </div>
                        <div class="md-layout-item md-medium-size-33 md-small-size-100">
                            <div class="team-player">
                                <md-card class="md-card-plain">
                                    <div class="md-layout-item md-size-50 mx-auto">
                                        <img :src="teamImg2" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                                    </div>
                                    <h4 class="card-title">Carla Hortensia
                                        <br>
                                        <small class="card-description text-muted">Designer</small>
                                    </h4>
                                    <md-card-content>
                                        <p class="card-description">You can write here details about one of your
                                            team members. You can give more details about what they do. Feel free
                                            to add some <a href="#">links</a> for people to be able to follow them
                                            outside the site.</p>
                                    </md-card-content>
                                    <md-card-actions class="text-center">
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-twitter"></i>
                                        </md-button>
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-linkedin"></i>
                                        </md-button>
                                    </md-card-actions>
                                </md-card>
                            </div>
                        </div>
                        <div class="md-layout-item md-medium-size-33 md-small-size-100">
                            <div class="team-player">
                                <md-card class="md-card-plain">
                                    <div class="md-layout-item md-size-50 mx-auto">
                                        <img :src="teamImg3" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                                    </div>
                                    <h4 class="card-title">Kendall Jenner
                                        <br>
                                        <small class="card-description text-muted">Model</small>
                                    </h4>
                                    <md-card-content>
                                        <p class="card-description">You can write here details about one of your
                                            team members. You can give more details about what they do. Feel free
                                            to add some <a href="#">links</a> for people to be able to follow them
                                            outside the site.</p>
                                    </md-card-content>
                                    <md-card-actions class="text-center">
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-twitter"></i>
                                        </md-button>
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-instagram"></i>
                                        </md-button>
                                        <md-button href="javascript:void(0)" class="md-just-icon md-simple">
                                            <i class="fab fa-facebook-square"></i>
                                        </md-button>
                                    </md-card-actions>
                                </md-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
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
  }
}

</script>

<style scoped>

</style>
