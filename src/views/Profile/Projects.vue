<template>
    <v-container fluid grid-list-lg align-start  fill-height>
        <v-layout row wrap align-start justify-center fill-height>
            <project v-for="project in projects" :project="project" :key="project.path"></project>
        </v-layout>
    </v-container>
</template>

<script>
import Project from './Project'
export default {
  props: {
    projects: {
      type: Array,
      default: () => [
        {
          title: 'Stock Trader',
          img: '../assets/img/stocktrader.png',
          path: '/stocktrader'
        }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
