<template lang='pug'>
div(class='container-products')

  div(class='products')
    Hero(
      :image='hero.image'
      :header='hero.header'
      class='products__hero'
    )

    ul(class='products__list')
      ProductSortFilter
      //- Dropdown(
      //-   :dropdown='dropdown'
      //-   @select='dropdownSelect'
      //-   class='products__dropdown'
      //- )
      li(
        v-for='(product, index) in sortByAndFilteredProducts'
        :key='product.id'
        class='products__item'
      )
        ProductCard(
          :product='product'
          class='products__product'
        )

</template>


<script>
import { mapState } from 'vuex'
import Hero from '~comp/Hero.vue'
import Dropdown from '~comp/Dropdown.vue'
import heroImage from '~/assets/images/hero_products.jpg'
import ProductCard from '~comp/ProductCard.vue'
import moment from 'moment'
import ProductSortFilter from '~comp/productSortFilter/Index.vue'


export default {
  components: {
    Hero,
    Dropdown,
    ProductCard,
    ProductSortFilter
  },
  props: {},
  data () {
    return {
      hero: {
        image: {
          src: heroImage,
          aspectRatio: '0 0 1 1'
        },
        header: {
          title: 'Shop All Products',
          copy: 'We got you covered'
        }
      },
      dropdown: {
        options: ['Popular', 'Most Recent', 'Price, low to high', 'Price, high to low'],
        selected: 'Popular'
      }
    }
  },
  computed: {
    sortProducts() {
      const { selected } = this.dropdown
      let products = Object.values(this.products)

      if (selected.match(/most recent/i)) products = this.sortByRecent({ products })

      if (selected.match(/price, low to high/i)) products = this.sortByPrice({ products })

      if (selected.match(/price, high to low/i)) products = this.sortByPrice({ products }).reverse()

      return products
    },


    ...mapState({
      products: state => state.catalog.products,
      sortByAndFilteredProducts: state => state.catalog.sortByAndFilteredProducts
    })
  },
  methods: {
    dropdownSelect (option) {
      this.dropdown.selected = option
    },


    sortByRecent ({ products }) {
      return products.sort((a, b) => moment(a.publishedAt).unix() - moment(b.publishedAt).unix())
    },


    sortByPrice ({ products }) {
      // default low to high
      return products.sort((a, b) => a.variants[0].price - b.variants[0].price)
    }

  }
}
</script>


<style lang='sass' scoped>
.container-products

.products
  display: grid
  grid-gap: $unit*10 0

  &__hero

  &__list
    width: 75%
    max-width: 1024px
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-auto-rows: 1fr
    grid-gap: $unit*2
    margin: 0 auto
    +mq-xs
      grid-template-columns: repeat(2, 1fr)
    +mq-s
      grid-template-columns: repeat(3, 1fr)
    +mq-m
      grid-template-columns: repeat(4, 1fr)

  &__dropdown

  &__item

  &__product

</style>
