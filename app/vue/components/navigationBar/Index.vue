<template lang='pug'>
div(
  class='container-navigation-bar'
)

  div(
    class='navigation-bar'
  )

    Hamburger(
      @handleClick='handleHamburgerClick'
      @handleBackClick='handleHamburgerBackClick'
      :active='isHamburgerActive'
      :back='isHamburgerBack'
      class='navigation-bar__hamburger'
    )

    router-link(
      :to='{ name: "search" }'
      class='navigation-bar__search'
    )
      IconSearch(class='navigation-bar__search-icon')


    router-link(
      :to='{ name: "account" }'
      class='navigation-bar__account'
    )
      IconAccount(
        class='navigation-bar__account-icon'
      )

    Bag(
      class='navigation-bar__bag'
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
.container-navigation-bar
  position: sticky
  top: 0
  left: 0
  z-index: 99
  width: 100%
  background: rgba(255, 255, 255, 0.98)

.navigation-bar
  width: 90%
  height: inherit
  display: grid
  grid-template-rows: auto
  grid-template-columns: auto 1fr repeat(3, auto)
  align-items: center
  margin: 0 auto

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
