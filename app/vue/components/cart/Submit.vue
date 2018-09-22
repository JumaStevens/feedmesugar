<template lang='pug'>
div(class='container-submit')

  div(class='submit')

    div(class='submit__estimation')
      IconOrder(class='submit__estimation-icon')
      h3(class='submit__estimation-title') Estimation

      p(class='submit__estimation-total') Total
      span(class='submit__estimation-total-value') ${{ checkout.totalPrice }}

      p(class='submit__estimation-shipping') Shipping &amp; Handling
      span(class='submit__estimation-shipping-value') $0.00

      p(class='submit__estimation-discount') Bonus/Discount
      span(class='submit__estimation-discount-value') {{ discount }}

      //- p(class='submit__estimation-taxes')
      //- span(class='submit__estimation-taxes-value')


    form(
      @submit.prevent='goToCheckout'
      class='submit__form'
    )

      h3(class='submit__form-title') Subtotal

      p(class='submit__form-subtotal') ${{ checkout.subtotalPrice }}

      input(
        :class='{ valid: checkout.lineItems.length }'
        type='submit'
        value='Proceed to checkout'
        class='submit__form-submit'
      )

      p(class='submit__form-disclosure') *Taxes calculated at checkout.

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
  },
  methods: {
    goToCheckout () {
      const { webUrl, lineItems } = this.checkout
      lineItems.length ? window.open(webUrl, '_blank') : null
    }
  }
}
</script>


<style lang='sass' scoped>
.container-submit

.submit
  display: grid
  grid-gap: $unit*5 0
  +mq-m
    grid-template-rows: min-content
    grid-template-columns: auto auto
    grid-gap: 0 $unit*3

  &__estimation
    display: grid
    grid-template-rows: repeat(3, min-content)
    grid-template-columns: min-content repeat(2, auto)
    grid-gap: $unit $unit*2
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 2

    &-icon
      width: $unit*3
      grid-row: 1 / -1
      grid-column: 1 / 2

    &-title
      grid-row: 1 / 2
      grid-column: 2 / 3
      margin-bottom: $unit
      font-weight: bold

    &-total
      grid-row: 2 / 3
      grid-column: 2 / 3

      &-value
        grid-row: 2 / 3
        grid-column: 3 / 4
        justify-self: end

    &-shipping
      grid-row: 3 / 4
      grid-column: 2 / 3

      &-value
        grid-row: 3 / 4
        grid-column: 3 / 4
        justify-self: end

    &-discount
      grid-row: 4 / 5
      grid-column: 2 / 3

      &-value
        grid-row: 4 / 5
        grid-column: 3 / 4
        justify-self: end


  &__form
    display: grid
    justify-items: end
    grid-gap: $unit*2 0
    +mq-m
      grid-row: 1 / 2
      grid-column: 2 / 3

    &-title
      font-weight: bold

    &-subtotal

    &-submit
      height: $unit*8
      padding: 0 $unit*5
      border-radius: $unit*3
      text-transform: capitalize
      background: $grey
      color: $white

      &.valid
        background: $success
        cursor: pointer

    &-disclosure
      text-align: right
      font-size: 12px
      color: $grey

</style>
