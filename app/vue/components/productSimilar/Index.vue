<template lang='pug'>
div(class='container-product-similar')

  div(class='product-similar')

    section(class='products-block')
      h2(class='products-block__header') Best Sellers
      ul(class='products-block__list')
        li(
          v-for='(product, index) in similarProducts'
          :key='product.id'
          class='products-block__item'
        )
          ProductCard(
            :product='product'
            class='products-block__product'
          )

</template>


<script>
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    similarProducts () {
      return Object.values(this.products).filter((e, i) => i < 4)
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-product-similar

.product-similar
  display: grid
  justify-items: center


.products-block
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-gap: $unit*5

  &__header
    font-size: $fs1
    text-align: center
    color: $black

  &__list
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: $unit*2
    +mq-xs
      grid-template-columns: repeat(2, 1fr)
    +mq-s
      grid-template-columns: repeat(3, 1fr)
    +mq-m
      grid-template-columns: repeat(4, 1fr)

</style>
