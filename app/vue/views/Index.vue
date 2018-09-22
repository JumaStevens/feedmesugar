<template lang='pug'>
main(class='container-index')

  div(class='index')
    //- HERO
    //- FEATURED COLLECTIONS
    //- DEAL OF THE DAY
    //- COLLECTION
    //- ACCOUNT PROMOTIONS - EARN POINTS/INVITE A FRIEND/AFFILIATE LINKING, ETC
    //- COLLECTION
    //- THE CULTURE
    //- EMAIL SUBSCRIPTION
    //- FOOTER

    Hero(
      :image='hero.image'
      :header='hero.header'
      class='index-hero'
    )

    DealOfTheDay(
      v-if='productDealOfTheDay'
      :product='productDealOfTheDay'
      class='index__promotion'
    )

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
import { mapState, mapGetters } from 'vuex'
import Hero from '~comp/Hero.vue'
import heroImage from '~/assets/images/hero_index.jpg'
import ProductCard from '~comp/ProductCard.vue'
import DealOfTheDay from '~comp/dealOfTheDay/Index.vue'




export default {
  components: {
    Hero,
    ProductCard,
    DealOfTheDay
  },
  data () {
    return {
      hero: {
        image: {
          src: heroImage,
          aspectRatio: '0 0 1 1'
        },
        header: {
          title: 'Feed Me Sugar',
          copy: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      productDealOfTheDay: 'catalog/productDealOfTheDay'
    }),


    ...mapState({
      products: state => state.catalog.products
    })
  },
  methods: {}
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
