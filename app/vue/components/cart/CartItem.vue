<template lang='pug'>
div(class='container-cart-item')

  li(class='cart-item')

    Photo(
      :image='image'
      class='cart-item__image'
    )

    h3(class='cart-item__title') {{ item.title }}

    p(class='cart-item__price') ${{ price }}

    p(
      v-show='color'
      class='cart-item__color'
    ) {{ color }}

    p(
      v-show='size'
      class='cart-item__size'
    ) {{ size }}

    a(
      @click='removeLineItems({ lineItems: [ item.id ] })'
      class='cart-item__remove'
    ) X

    div(class='cart-item__quantity')
      a(
        class='cart-item__quantity-button'
        @click='quantity--'
      ) -
      p(
        class='cart-item__quantity-count'
      ) {{ quantity }}
      a(
        class='cart-item__quantity-button'
        @click='quantity++'
      ) +


</template>


<script>
import { mapActions } from 'vuex'
import _ from 'lodash'
import Photo from '~comp/Photo.vue'


export default {
  components: {
    Photo
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      quantity: 1
    }
  },
  computed: {
    variant () {
      console.log('variant: ', this.item.variant)
      return this.item.variant
    },


    image () {
      return { src: this.variant.image.src, aspectRatio: '0 0 1 1' }
    },


    color () {
      const option = this.variant.selectedOptions.find(option => option.name.match(/color/i))
      return option ? option.value : ''
    },


    size () {
      const option = this.variant.selectedOptions.find(option => option.name.match(/size/i))
      return option ? option.value : ''
    },


    price () {
      return Math.round(this.variant.price * this.quantity * 100) / 100
    }
  },
  watch: {
    quantity (value) {
      if (value < 1) this.quantity = 1
      this.updateLineItemsDebounce()
    }
  },
  methods: {
    updateLineItemsDebounce: _.debounce(function() {
      const lineItems = [{ id: this.item.id, quantity: this.quantity }]
      this.updateLineItems({ lineItems })
      console.log("???")
    }, 2000),


    ...mapActions({
      updateLineItems: 'checkout/updateLineItems',
      removeLineItems: 'checkout/removeLineItems'
    })
  },
  created () {
    this.quantity = this.item.quantity
  }
}
</script>


<style lang='sass' scoped>
.container-cart-item

.cart-item
  width: 75%
  display: grid
  grid-template-rows: repeat(3, auto) 1fr
  grid-template-columns: repeat(3, auto) 1fr auto
  grid-gap: $unit $unit*2

  &__image
    grid-row: 1 / -1
    grid-column: 1 / 2
    width: $unit*18

  &__title
    grid-row: 1 / 2
    grid-column: 2 / 5
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    font-weight: bold

  &__price
    grid-row: 2 / 3
    grid-column: 2 / 5

  &__color
    grid-row: 3 / 4
    grid-column: 2 / 3
    text-transform: capitalize

  &__size
    grid-row: 3 / 4
    grid-column: 3 / 4
    text-transform: capitalize

  &__quantity
    grid-row: 4 / 5
    grid-column: 2 / 5
    align-self: end

  &__remove
    grid-row: 1 / 2
    grid-column: 5 / 6

  &__price,
  &__color,
  &__size,
  &__quantity
    color: $dark

  &__quantity
    width: min-content
    display: grid
    grid-auto-flow: column

    &-button,
    &-count
      display: flex
      justify-content: center
      align-items: center
      width: $unit*5
      height: $unit*5

    &-button
      border-radius: 50%
      border: 1px solid $grey
      user-select: none

</style>
