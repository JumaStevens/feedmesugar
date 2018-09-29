<template lang='pug'>
div(class='container-estimation')

  div(class='estimation')

    div(class='estimation__detail')
      IconOrder(class='estimation__detail-icon')
      h3(class='estimation__detail-title') Estimation

      p(class='estimation__detail-order') Order
      span(class='estimation__detail-order-value') ${{ checkout.totalPrice }}

      p(class='estimation__detail-shipping') Shipping &amp; Handling
      span(class='estimation__detail-shipping-value') $0.00

      p(class='estimation__detail-discount') Bonus/Discount
      span(class='estimation__detail-discount-value') {{ discount }}

    div(class='estimation__subtotal')
      h3(class='estimation__subtotal-title') Subtotal
      p(class='estimation__subtotal-value') ${{ checkout.subtotalPrice }}

      //- p(class='submit__estimation-taxes')
      //- span(class='submit__estimation-taxes-value')

</template>


<script>
import IconOrder from '~/assets/svg/icon-order.svg'


export default {
  components: {
    IconOrder
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
  computed: {
    discount () {
      const { totalPrice, subtotalPrice } = this.checkout
      const discount = Math.round((subtotalPrice - totalPrice) * 100) / 100
      return discount ? `- $${discount}` : `$0.00`
    }
  }
}
</script>


<style lang='sass' scoped>
.container-submit

.estimation
  display: grid
  grid-gap: $unit*5 0
  +mq-m
    grid-template-rows: min-content
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 0 $unit*3

  &__detail
    display: grid
    grid-template-rows: repeat(3, min-content)
    grid-template-columns: repeat(2, auto)
    grid-gap: $unit $unit*2
    +mq-xs
      grid-template-columns: min-content repeat(2, auto)
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 2

    &-icon
      display: none
      +mq-xs
        display: unset
        width: $unit*3
        grid-row: 1 / -1
        grid-column: 1 / 2

    &-title
      grid-row: 1 / 2
      grid-column: 1 / 2
      margin-bottom: $unit
      font-weight: bold
      +mq-xs
        grid-column: 2 / 3

    &-order
      grid-row: 2 / 3
      grid-column: 1 / 2
      +mq-xs
        grid-column: 2 / 3

      &-value
        grid-row: 2 / 3
        grid-column: 2 / 3
        justify-self: end
        +mq-xs
          grid-column: 3 / 4

    &-shipping
      grid-row: 3 / 4
      grid-column: 1 / 2
      +mq-xs
        grid-column: 2 / 3

      &-value
        grid-row: 3 / 4
        grid-column: 2 / 3
        justify-self: end
        +mq-xs
          grid-column: 3 / 4

    &-discount
      grid-row: 4 / 5
      grid-column: 1 / 2
      +mq-xs
        grid-column: 2 / 3

      &-value
        grid-row: 4 / 5
        grid-column: 2 / 3
        justify-self: end
        +mq-xs
          grid-column: 3 / 4

  &__subtotal
    display: grid
    grid-template-rows: repeat(2, min-content)
    grid-gap: $unit 0
    justify-items: end

    &-title
      margin-bottom: $unit
      font-weight: bold

    &-value
</style>
