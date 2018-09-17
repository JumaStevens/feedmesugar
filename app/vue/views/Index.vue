<template lang='pug'>
main(class='container-index')

  div(class='index')

    section(class='promotion-block')


    section(class='products-block')
      h2(class='products-block__header') Best Sellers
      ul(class='products-block__list')
        li(
          v-for='(product, index) in products'
          :key='product.id'
          class='products-block__item'
        )
          ProductCard(
            :product='product'
            class='products-block__product'
          )
</template>


<script>
import { mapState, mapActions } from 'vuex'
import ProductCard from '~comp/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      products: state => state.catalog.products
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'catalog/fetchProducts'
    })
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<style lang='sass' scoped>
.container-index
  // box-shadow: 0px 0px 0.5rem rgba(33, 33, 33, 0.2)

.index
  display: grid
  justify-items: center


.products-block
  width: 75%
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
