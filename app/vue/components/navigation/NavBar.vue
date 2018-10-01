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

    //- ShopLogo(
    //-   class='nav-bar__shop-logo'
    //- )

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
  background: $white
  +mq-m
    width: $unit*6
    height: 100vh

.nav-bar
  height: inherit
  display: grid
  grid-template-rows: auto
  grid-template-columns: auto 1fr repeat(3, auto)
  padding: 0 $unit*2
  align-items: center
  +mq-m
    grid-gap: 0 $unit*2
    grid-template-rows: 40px 40px 1fr 40px 1fr 40px 40px
    grid-template-columns: auto
    align-items: unset
    justify-items: center
    padding: $unit*2 0

  &__hamburger
    grid-column: 1 / 2
    +mq-m
      grid-row: 4 / 5
      grid-column: 1 / 2
      align-self: center


  &__search,
  &__account
    width: $unit*5
    height: $unit*5
    grid-column: 3 / 4
    display: flex
    justify-content: center
    align-items: center
    +mq-m
      grid-row: 6 / 7
      grid-column: 1 / 2

    &-icon
      width: $unit*3
      height: $unit*3

  &__account
    grid-column: 4 / 5
    +mq-m
      grid-row: 7 / 8
      grid-column: 1 / 2

    &-icon
      width: 18px

  &__bag
    grid-column: 5 / 6
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__shop-logo
    justify-self: center

</style>
