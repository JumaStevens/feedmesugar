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
      :header='hero.header'
      class='index-hero'
    )

    DealOfTheDay(
      v-if='productDealOfTheDay.length > 0'
      :products='productDealOfTheDay'
      class='index__promotion'
    )

    CollectionProducts(
      v-if='featuredCollections[0]'
      :collection='featuredCollections[0]'
      class='index__collections-products'
    )

    AccountPromotion(
      class='index__acount-promotion'
    )

    CollectionProducts(
      v-if='featuredCollections[1]'
      :collection='featuredCollections[1]'
      class='index__collections-products'
    )

    CollectionProducts(
      v-if='featuredCollections[2]'
      :collection='featuredCollections[2]'
      class='index__collections-products'
    )
</template>


<script>
import { mapState, mapGetters } from 'vuex'
import Hero from '~comp/Hero.vue'
import CollectionProducts from '~comp/CollectionProducts.vue'
import DealOfTheDay from '~comp/dealOfTheDay/Index.vue'
import AccountPromotion from '~comp/accountPromotion/Index.vue'




export default {
  components: {
    Hero,
    CollectionProducts,
    DealOfTheDay,
    AccountPromotion
  },
  data () {
    return {
      hero: {
        header: {
          title: 'Feed Me Sugar',
          copy: ''
        }
      }
    }
  },
  computed: {
    featuredCollections () {
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

.index
  display: grid
  grid-gap: $unit*5 0
  +mq-m
    // grid-gap: $unit*20 0

</style>
