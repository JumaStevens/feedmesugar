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

    CollectionBlock(
      v-if='featuredCollection'
      :collection='featuredCollection'
      :reverse='true'
      class='index__featured-collection'
    )

    DealOfTheDay(
      v-if='productDealOfTheDay'
      :product='productDealOfTheDay'
      class='index__promotion'
    )

    section(class='products-block')
      h2(class='products-block__header') New Arrivals
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

    //- FeaturedProfile(
    //-   class='index__featured-profile'
    //- )
    AccountPromotion(
      class='index__acount-promotion'
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
import CollectionBlock from '~comp/CollectionBlock.vue'
import DealOfTheDay from '~comp/dealOfTheDay/Index.vue'
import FeaturedProfile from '~comp/featuredProfile/Index.vue'
import AccountPromotion from '~comp/accountPromotion/Index.vue'



export default {
  components: {
    Hero,
    ProductCard,
    DealOfTheDay,
    CollectionBlock,
    FeaturedProfile,
    AccountPromotion
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
    featuredCollection () {
      console.log('collections: ', this.collections)
      return Object.values(this.collections)[0]
    },


    ...mapGetters({
      productDealOfTheDay: 'catalog/productDealOfTheDay'
    }),


    ...mapState({
      products: state => state.catalog.products,
      collections: state => state.catalog.collections
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
  grid-gap: $unit*10 0
  justify-items: center
  +mq-m
    grid-gap: $unit*20 0


  &__featured-collection
    width: 75%

.products-block
  width: 75%
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-gap: $unit*5

  &__header
    font-size: $fs2
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
