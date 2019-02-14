<template>
    <v-flex >
        <v-card width="350" >
            <v-img
            :src="project.img"
            aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{project.title}}</h3>
                <div> Coming soon...</div>
            </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange" :to="project.path">Watch sample</v-btn>

            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>

export default {
  props: {
    project: {
      type: Object,
      default () {
        return {
          title: 'Stock Trader',
          img: '../assets/img/stocktrader.png',
          path: '/stocktrader'
        }
      }
    }
  }
}

</script>
