<template lang='pug'>
section(
  class='container-nav'
)

  nav(
    class='nav'
  )
    NavBar(
      class='nav__bar'
    )

</template>


<script>
import NavBar from '~comp/navigation/NavBar.vue'


export default {
  components: {
    NavBar
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>

.container-nav


.nav

  &__bar


</style>
