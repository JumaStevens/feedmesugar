<template lang='pug'>
div(class='container-collection')


  div(class='collection')

    Hero(
      :image='{ src: collection.image.src, aspectRatio: "0 0 1 1" }'
      :header='{ title: collection.title, copy: collection.description }'
      class='collection__hero'
    )

    ul(class='collection__list')
      li(
        v-for='(product, index) in products'
        :key='product.id + index'
        class='collection__item'
      )
        ProductCard(
          :product='product'
          class='collection__product'
        )
</template>


<script>
import { mapState } from 'vuex'
import Hero from '~comp/Hero.vue'
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    Hero,
    ProductCard
  },
  props: {},
  data () {
    return {
      hero: {
        header: {
          title: '',
          copy: ''
        }
      }
    }
  },
  computed: {
    collection () {
      console.log('collection: ', this.collections[this.collectionId])
      return this.collections[this.collectionId]
    },


    products () {
      return this.collection.products
    },


    ...mapState({
      collectionId: state => state.route.params.id,
      collections: state => state.catalog.collections
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-collection

.collection

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
