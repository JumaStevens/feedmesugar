<template lang='pug'>
div(class='container-cart')

  div(
    v-if='checkout'
    class='cart'
  )

    CartHeader(
      :checkout='checkout'
      class='cart__header'
    )

    CartList(
      :checkout='checkout'
      class='cart__list'
    )

    DiscountEntry(class='cart__discount-entry')

    Submit(
      :checkout='checkout'
      class='cart__submit'
    )
</template>


<script>
import { mapState, mapActions } from 'vuex'
import Header from '~comp/cart/Header.vue'
import CartList from '~comp/cart/CartList.vue'
import DiscountEntry from '~comp/cart/DiscountEntry.vue'
import Submit from '~comp/cart/Submit.vue'


export default {
  components: {
    CartHeader: Header,
    CartList,
    DiscountEntry,
    Submit
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      checkout: state => state.checkout
    })
  },
  methods: {
    ...mapActions({
      initCheckout: 'checkout/initCheckout'
    })
  },
  created () {
    this.initCheckout()
  }
}
</script>


<style lang='sass' scoped>
.container-cart
  // display: none
  position: fixed
  z-index: 99
  top: 0
  left: 0
  width: 100%
  min-height: 100vh
  background: white

.cart
  display: grid
  grid-template-rows: repeat(4, auto)
  grid-gap: $unit*10 0

  &__header
    grid-row: 1 / 2

  &__list
    grid-row: 2 / 3

  &__discount-entry
    grid-row: 3 / 4

  &__submit
    grid-row: 4 / 5

</style>
