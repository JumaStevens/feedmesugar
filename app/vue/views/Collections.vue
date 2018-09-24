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
        v-for='(collection, key, index) in collections'
        :key='collection.id'
        class='collections__item'
      )
        CollectionBlock(
          :collection='collection'
          :reverse='index % 2 === 0'
        )
        
</template>


<script>
import { mapState } from 'vuex'
import Hero from '~comp/Hero.vue'
import CollectionBlock from '~comp/CollectionBlock.vue'
import heroImage from '~/assets/images/hero_collections.jpg'


export default {
  components: {
    Hero,
    CollectionBlock
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

</style>
