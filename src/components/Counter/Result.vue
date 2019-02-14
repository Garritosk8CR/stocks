<template>
    <div>
        <span>Counter: {{ doubleCounter }}</span><br>
        <span>Number of clicks: {{ stringCounter }}</span><br>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
    ])
  }
}
</script>
