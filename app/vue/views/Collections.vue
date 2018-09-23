<template lang='pug'>
div(class='container-collections')

  div(class='collections')

    Hero(
      :image='hero.image'
      :header='hero.header'
      class='collections__hero'
    )

    ul(class='collections__list')
      li(
        v-for='(collection, index) in collections'
        :key='collection.id + index'
        class='collections__item'
      )

        header(class='collections__header')
          h3(class='collections__title') {{ collection.title }}
          //- p(class='collections__copy') {{ collection.description }}
          router-link(
            :to='{ name: "collection", params: { id: collection.id } }'
            class='collections__link'
          ) Shop Collection

        router-link(
          :to='{ name: "collection", params: { id: collection.id } }'
          class='collections__collection'
        )
          Photo(
            :image='{ src: collection.image.src, aspectRatio: "0 0 1 1" }'
            class='collections__image'
          )

        ProductCard(
          v-for='(product, index) in collection.products.filter((e, i) => i < 2)'
          :key='product.id + index'
          :product='product'
          class='collections__product'
        )



</template>


<script>
import { mapState } from 'vuex'
import Hero from '~comp/Hero.vue'
import Photo from '~comp/Photo.vue'
import heroImage from '~/assets/images/hero_collections.jpg'
import ProductCard from '~comp/ProductCard.vue'


export default {
  components: {
    Hero,
    Photo,
    ProductCard
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
          title: 'Shop All Collections',
          copy: 'Curated pieces, just for you'
        }
      }
    }
  },
  computed: {
    ...mapState({
      collections: state => state.catalog.collections
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-collections

.collections
  display: grid
  grid-gap: $unit*10
  justify-items: center
  +mq-m
    grid-gap: $unit*20 0

  &__hero

  &__list
    width: 75%
    display: grid
    grid-gap: $unit*10 0
    +mq-m
      grid-gap: $unit*20 0

  &__item
    display: grid
    grid-template-rows: repeat(4, auto)
    grid-template-columns: repeat(2, auto)
    grid-gap: $unit*3 0
    +mq-xs
      grid-template-rows: repeat(3, auto)
      grid-gap: $unit*5 $unit*3
    +mq-s
      grid-gap: $unit*5
    +mq-m
      grid-template-rows: repeat(3, auto)
      grid-template-columns: repeat(4, 1fr)

  &__header
    grid-row: 1 / 2
    grid-column: 1 / -1
    display: grid
    grid-gap: $unit*2 0
    justify-items: center

    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 3

  &__title
    font-size: $fs2
    line-height: 1
    text-align: center

  &__copy
    text-align: center

  &__link
    text-decoration: underline

  &__collection
    grid-row: 2 / 3
    grid-column: 1 / -1
    align-self: end
    +mq-m
      grid-row: 1 / 4
      grid-column: 3 / 5

  &__image


  &__product
    grid-row: 3 / 4
    grid-column: 1 / -1
    align-self: end
    +mq-xs
      grid-row: 3 / 4
      grid-column: 1 / 2
    +mq-m
      grid-row: 2 / 4
      grid-column: 1 / 2

    &:last-child
      grid-row: 4 / 5
      +mq-xs
        grid-row: 3 / 4
        grid-column: 2 / 3
      +mq-m
        grid-row: 2 / 4
        grid-column: 2 / 3



  &__item:nth-child(odd)

    & .collections__header
      +mq-m
        grid-row: 1 / 2
        grid-column: 3 / 5

    & .collections__collection
      +mq-m
        grid-row: 1 / 4
        grid-column: 1 / 3

    & .collections__product
      +mq-m
        grid-row: 2 / 4
        grid-column: 3 / 4

      &:last-child
        +mq-m
          grid-row: 2 / 4
          grid-column: 4 / 5



</style>
