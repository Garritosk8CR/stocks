<template>
    <md-list class="nav-mobile-menu nav-mobile-section-start" v-if="navMobileSectionStart === 'true'">
        <md-list-item>
            <div class="md-list-item-text">
                <br />
                <h4 class="text--black">Menu</h4>
                <br />
            </div>
        </md-list-item>
        <br />
        <slot></slot>
    </md-list>
</template>

<script>
export default {
  name: 'mobile-menu',
  props: {
    navMobileSectionStart: {
      type: String,
      default: 'false'
    }
  }
}
</script>
