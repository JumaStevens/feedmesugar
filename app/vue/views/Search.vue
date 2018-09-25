<template lang='pug'>
div(class='container-search')

  div(class='search')

    form(class='search__form')
      IconSearch(class='search__icon')
      input(
        v-model='search'
        placeholder='Search our inventory'
        class='search__input'
      )
      input(
        type='Submit'
        value='Search'
        class='search__submit'
      )
      a(
        v-show='search.length'
        @click='clearSearch'
        class='search__clear'
      )
        IconCancel(class='search__icon')

    ul(class='search__list')
      li(
        v-for='(product, index) in searchResults.products'
        :key='product.id + index'
        class='search__item'
      )
        ProductCard(
          :product='product'
          class='search__product'
        )

</template>


<script>
import { mapState } from 'vuex'
import ProductCard from '~comp/ProductCard.vue'
import IconSearch from '~/assets/svg/icon-search.svg'
import IconCancel from '~/assets/svg/icon-cancel.svg'


export default {
  components: {
    ProductCard,
    IconSearch,
    IconCancel
  },
  props: {},
  data () {
    return {
      search: ''
    }
  },
  computed: {
    searchResults () {
      const search = new RegExp(this.search, 'i')
      const products = Object.values(this.products).filter(product => product.title.match(search))
      return {
        products
      }
    },


    ...mapState({
      products: state => state.catalog.products
    })
  },
  methods: {
    clearSearch () { this.search = '' }
  }
}
</script>


<style lang='sass' scoped>
.container-search

.search
  width: 75%
  margin: 0 auto
  display: grid
  grid-gap: $unit*10 0
  +mq-m
    grid-gap: $unit*20 0

  &__form
    display: grid
    grid-template-rows: $unit*5
    grid-template-columns: 1fr min-content
    grid-gap: $unit*3
    background: rgba(232, 234, 237, 1)
    border-radius: $unit*3
    overflow: hidden

  &__icon
    width: $unit*3
    height: $unit*3
    grid-row: 1 / 2
    grid-column: 1 / 2
    align-self: center
    margin-left: $unit*2
    pointer-events: none

  &__clear
    grid-row: 1 / 2
    grid-column: 1 / 2
    justify-self: end
    align-self: center

    & .search__icon
      width: 12px
      height: 12px
      padding: 2px
      margin: 0
      border-radius: 50%
      background: $dark
      fill: rgba(239, 239, 239, 1)

  &__input
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding-left: $unit*9
    margin-right: $unit*4
    background: transparent

  &__submit
    grid-row: 1 / 2
    grid-column: 2 / 3
    color: $white
    padding: 0 $unit*3
    cursor: pointer

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

  &__item

  &__product

</style>
