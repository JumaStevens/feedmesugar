<template lang='pug'>
div(class='container-product-display')

  div(class='product-display')

    Product(
      class='product-display__product'
    )

    Detail(
      :product='product'
      class='product-display__detail'
    )

    div(class='product-display__divider')

    Controller(
      :product='product'
      :variants='variants'
      @activeVariant='setActiveVariant'
      class='product-display__controller'
    )

    div(class='product-display__divider')

    Submit(
      class='product-display__submit'
    )

    pre {{ variants }}
</template>


<script>
import Detail from '~comp/productDisplay/Detail.vue'
import Controller from '~comp/productDisplay/Controller.vue'
import Product from '~comp/productDisplay/Product.vue'
import Submit from '~comp/productDisplay/Submit.vue'

export default {
  components: {
    Detail,
    Controller,
    Product,
    Submit
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeVariant: {}
    }
  },
  computed: {
    variants () {
      const variantData = {}
      const { variants } = this.product

      variants.forEach(variant => {
        const { id, available, image, price } = variant
        const options = variant.title.split('/').map(item => item.trim())
        variantData[id] = { id, available, image, price, options }
      })

      return variantData
    }
  },
  methods: {
    setActiveVariant (variant) {
      this.activeVariant = variant
      console.log('set active variant: ', variant)
    }
  }
}
</script>


<style lang='sass' scoped>

.container-product-display

.product-display
  display: grid
  grid-gap: $unit*2 0

  &__product

  &__detail

  &__controller

  &__submit

  &__divider
    height: 1px
    background: $grey



</style>
