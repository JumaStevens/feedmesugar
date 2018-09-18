<template lang='pug'>
div(
  :class='{ active: navMenuActive }'
  class='container-nav-menu'
)

  ul(
    :class=''
    class='nav-menu'
  )
    li(
      class='nav-menu__item'
    )
      router-link(
        to='/'
        class='nav-menu__link'
      ) TR
    li(
      class='nav-menu__item'
    )
      router-link(
        to='/account'
        class='nav-menu__link'
      )

</template>


<script>
import { mapState, mapMutations } from 'vuex'


export default {
  components: {
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      route: state => state.route,
      routeId: state => state.route.params.id,
      navMenuActive: state => state.app.navMenuActive
    })
  },
  methods: {

    ...mapMutations({
      openNavMenu: 'app/OPEN_NAV_MENU',
      closeNavMenu: 'app/CLOSE_NAV_MENU',
      toggleNavMenu: 'app/TOGGLE_NAV_MENU'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-nav-menu
  position: absolute
  top: $unit*5
  left: -100%
  width: 100%
  height: calc(100vh - #{$unit*5})
  background: grey
  transition: transform 500ms

  &.active
    transform: translateX(100%)

.nav-menu
  display: grid
  grid-template-rows: auto
  grid-gap: $unit*2
  justify-content: center
  align-items: stretch

  &__item

  &__link
    width: $unit*5
    height: $unit*5
    display: flex
    justify-content: center
    align-items: center

  &__icon
    width: $unit*3
    height: $unit*3
</style>
