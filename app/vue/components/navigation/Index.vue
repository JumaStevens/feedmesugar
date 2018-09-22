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

    NavMenu(
      class='nav__menu'
    )


</template>


<script>
import NavBar from '~comp/navigation/NavBar.vue'
import NavMenu from '~comp/navigation/NavMenu.vue'

export default {
  components: {
    NavBar,
    NavMenu
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
  // position: relative
  //
  // &::after
  //   content: ''
  //   position: absolute
  //   width: 100%
  //   height: 1px
  //   background: $grey

.nav
  position: relative

  &__bar

  &__menu


</style>
