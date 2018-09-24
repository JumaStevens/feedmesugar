<template lang='pug'>
div(
  class='container-nav-bar'
)

  div(
    class='nav-bar'
  )

    Hamburger(
      @handleClick='handleHamburgerClick'
      :active='isHamburgerActive'
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

    Account(
      class='nav-bar__account'
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


export default {
  components: {
    Hamburger,
    ShopLogo,
    Bag,
    Account,
    IconSearch
  },
  data () {
    return {
      conditions: ['menu', 'search', 'account', 'cart']
    }
  },
  computed: {
    isHamburgerActive () {
      const { name } = this.route
      return this.conditions.includes(name)
    },


    ...mapState({
      route: state => state.route,
    })
  },
  methods: {
    handleHamburgerClick () {
      const { name } = this.route
      this.conditions.includes(name) ? this.$router.go(-1) : this.$router.push({ name: 'menu' })
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
  display: grid
  grid-template-rows: auto
  grid-template-columns: repeat(2, auto) 1fr repeat(2, auto)
  grid-gap: 0 $unit*2
  padding: 0 $unit*2
  align-items: center
  +mq-m
    height: inherit
    grid-template-rows: 40px 40px 1fr 40px 1fr 40px 40px
    grid-template-columns: auto
    align-items: unset
    justify-items: center
    padding: unset

  &__hamburger
    +mq-m
      grid-row: 4 / 5
      grid-column: 1 / 2
      align-self: center


  &__search
    width: $unit*5
    height: $unit*5
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
    +mq-m
      grid-row: 7 / 8
      grid-column: 1 / 2

  &__bag
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__shop-logo
    justify-self: center

</style>
