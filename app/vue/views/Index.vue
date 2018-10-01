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
      v-if='featuredCollections[0]'
      :collection='featuredCollections[0]'
      :reverse='true'
      class='index__featured-collection'
    )

    DealOfTheDay(
      v-if='productDealOfTheDay'
      :product='productDealOfTheDay'
      class='index__promotion'
    )

    section(
      v-if='featuredCollections[1]'
      class='products-block'
    )
      h2(class='products-block__header') {{ featuredCollections[1].title }}
      ul(class='products-block__list')
        li(
          v-for='(product, index) in featuredCollections[1].products'
          :key='product.id'
          class='products-block__item'
        )
          ProductCard(
            :product='product'
            class='products-block__product'
          )
      router-link(
        :to='{ name: "collection", params: { id: featuredCollections[1].id } }'
        class='products-block__link'
      ) See More

    //- FeaturedProfile(
    //-   class='index__featured-profile'
    //- )
    AccountPromotion(
      class='index__acount-promotion'
    )

    section(
      v-if='featuredCollections[2]'
      class='products-block'
    )
      h2(class='products-block__header') {{ featuredCollections[2].title }}
      ul(class='products-block__list')
        li(
          v-for='(product, index) in featuredCollections[2].products'
          :key='product.id'
          class='products-block__item'
        )
          ProductCard(
            :product='product'
            class='products-block__product'
          )
      router-link(
        :to='{ name: "collection", params: { id: featuredCollections[2].id } }'
        class='products-block__link'
      ) See More

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
    featuredCollections () {
      console.log('collections: ', this.collections)
      const collections = Object.values(this.collections)
      return this.shuffleArray({ array: collections })
    },


    ...mapGetters({
      productDealOfTheDay: 'catalog/productDealOfTheDay'
    }),


    ...mapState({
      products: state => state.catalog.products,
      collections: state => state.catalog.collections
    })
  },
  methods: {
    shuffleArray ({ array }) {
      return array.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])
    }
  }
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

  &__link
    width: $unit*20
    height: $unit*5
    justify-self: center
    display: flex
    justify-content: center
    align-items: center
    background: $success
    color: $white
    box-shadow: 0 24px 32px rgba(33, 206, 156, 0.15)

</style>
