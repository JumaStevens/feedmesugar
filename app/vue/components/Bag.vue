<template lang='pug'>
div(
  class='container-bag'
)

  div(class='bag')

    router-link(
      :to='{ name: "cart" }'
      class='bag__link'
    )

      IconCart(class='bag__icon')

      div(
        :class='{ empty: lineItemsQuantityTotal === 0 }'
        class='bag__quantity'
      )

</template>


<script>
import { mapGetters } from 'vuex'
import IconCart from '~/assets/svg/icon-cart.svg'

export default {
  components: {
    IconCart
  },
  props: {},
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      lineItemsQuantityTotal: 'checkout/lineItemsQuantityTotal'
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-bag

.bag

  &__link
    position: relative
    width: $unit*5
    height: $unit*5
    display: block
    border-radius: 50%
    background: rgba(255, 255, 255, 0.5)

  &__icon
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  &__quantity
    position: absolute
    top: 6px
    right: 6px
    width: $unit
    height: $unit
    border-radius: 50%
    background: rgba(18, 201, 18, 1)

    &.empty
      visibility: hidden

</style>
