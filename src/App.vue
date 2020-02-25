<template template lang="pug">
#app
  toolbar
  router-view
  credits
</template>

<script>
import toolbar from '@/components/_toolbar.vue'
import credits from '@/components/_credits.vue'

export default {
  mounted () {
  },
  data () {
    return {
    }
  },
  components: {
    toolbar,
    credits
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
#app {
}
</style>
