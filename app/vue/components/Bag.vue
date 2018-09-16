<template lang='pug'>
div(
  class='container-bag'
)

  div(
    class='bag'
  )
    a(
      class='bag__link'
    )
      IconCart(
        class='bag__icon'
      )

</template>


<script>
import IconCart from '~/assets/svg/icon-cart.svg'

export default {
  components: {
    IconCart
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
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

</style>
