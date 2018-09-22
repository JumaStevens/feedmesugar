<template lang='pug'>
div(class='container-collection')

  div(class='collection')


    ul(class='collection__product-list')
      li(
        v-for='(product, index) in products'
        :key='product.id'
        class='collection__product-item'
      )
        ProductCard(
          :product='product'
          class='collection__product-card'
        )

</template>


<script>


export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-collection

.collection

  &__product-list
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
