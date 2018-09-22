<template lang='pug'>
div(class='container-header')

  header(class='header')
    h2(class='header__title') Your Shopping Bag
    p(class='header__copy') Review of {{ lineItemsQuantityTotal }} item(s) ${{ checkout.totalPrice }}

</template>


<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  props: {
    checkout: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
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
.container-header

.header
  display: grid
  grid-gap: $unit 0
  justify-items: center

  &__title
    font-size: $fs1

  &__copy

</style>
