<template lang='pug'>
div(
  class='container-nav-bar'
)

  div(
    class='nav-bar'
  )

    Hamburger(
      @handleClick='handleHamburgerClick'
      @handleBackClick='handleHamburgerBackClick'
      :active='isHamburgerActive'
      :back='isHamburgerBack'
      class='nav-bar__hamburger'
    )

    router-link(
      :to='{ name: "search" }'
      class='nav-bar__search'
    )
      IconSearch(class='nav-bar__search-icon')


    router-link(
      :to='{ name: "account" }'
      class='nav-bar__account'
    )
      IconAccount(
        class='nav-bar__account-icon'
      )

    Bag(
      class='nav-bar__bag'
    )


</template>


<script>
import { mapState } from 'vuex'
import Hamburger from '~comp/Hamburger.vue'
import ShopLogo from '~comp/ShopLogo.vue'
import Bag from '~comp/Bag.vue'
import Account from '~comp/Account.vue'
import IconSearch from '~/assets/svg/icon-search.svg'
import IconAccount from '~/assets/svg/icon-account.svg'


export default {
  components: {
    Hamburger,
    ShopLogo,
    Bag,
    Account,
    IconSearch,
    IconAccount
  },
  data () {
    return {
      conditions: ['menu', 'search', 'account', 'cart']
    }
  },
  computed: {
    isHamburgerActive () {
      const { name } = this.route
      return name === 'menu'
    },


    isHamburgerBack () {
      const { name } = this.route
      return name !== 'menu' && name !== 'index'
    },


    ...mapState({
      route: state => state.route,
    })
  },
  methods: {
    handleHamburgerClick () {
      const { name } = this.route
      console.log('router: ', this.$router)
      name === 'menu' ? this.$router.go(-1) : this.$router.push({ name: 'menu' })
    },


    handleHamburgerBackClick () {
      this.$router.go(-1)
    }
  }
}
</script>


<style lang='sass' scoped>
.container-nav-bar
  position: fixed
  top: 0
  left: 0
  z-index: 99
  width: 100%
  height: $unit*6
  background: rgba(255, 255, 255, 0.98)

.nav-bar
  height: inherit
  display: grid
  grid-template-rows: auto
  grid-template-columns: auto 1fr repeat(3, auto)
  align-items: center
  padding: 0 $unit*2

  &__hamburger
    grid-column: 1 / 2

  &__search,
  &__account
    width: $unit*5
    height: $unit*5
    grid-column: 3 / 4
    display: flex
    justify-content: center
    align-items: center

    &-icon
      width: $unit*3
      height: $unit*3

  &__account
    grid-column: 4 / 5

    &-icon
      width: 18px

  &__bag
    grid-column: 5 / 6

</style>
