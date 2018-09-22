<template lang='pug'>
div(class='container-cart-list')

  ul(class='cart-list')
    CartItem(
      v-for='(item, index) in checkout.lineItems'
      :key='item.id'
      :item='item'
      class='cart-list__item'
    )

</template>


<script>
import CartItem from '~comp/cart/CartItem.vue'


export default {
  components: {
    CartItem
  },
  props: {
    checkout: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container

</style>
