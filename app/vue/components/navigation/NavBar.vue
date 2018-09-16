<template lang='pug'>
div(
  class='container-nav-bar'
)

  div(
    class='nav-bar'
  )

    Hamburger(
      @handleClick='toggleNavMenu()'
      :active='navMenuActive'
      class='nav-bar__hamburger'
    )

    Search(
      class='nav-bar__search'
    )

    ShopLogo(
      class='nav-bar__shop-logo'
    )

    Account(
      class='nav-bar__account'
    )

    Bag(
      class='nav-bar__bag'
    )


</template>


<script>
import { mapState, mapMutations } from 'vuex'
import Hamburger from '~comp/Hamburger.vue'
import Search from '~comp/Search.vue'
import ShopLogo from '~comp/ShopLogo.vue'
import Bag from '~comp/Bag.vue'
import Account from '~comp/Account.vue'

export default {
  components: {
    Hamburger,
    Search,
    ShopLogo,
    Bag,
    Account
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
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
.container-nav-bar

.nav-bar
  display: grid
  grid-template-rows: auto
  grid-template-columns: repeat(2, auto) 1fr repeat(2, auto)
  grid-gap: 0 $unit*2
  padding: 0 $unit*2

  &__hamburger


  &__search

  &__shop-logo
    justify-self: center

</style>
