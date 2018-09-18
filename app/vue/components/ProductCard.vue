<template lang='pug'>
div(class='container-product')

  router-link(
    :to='{ name: "product", params: { id: product.id } }'
    class='product'
  )

    Photo(
      :image='{ src: product.images[0].src, aspectRatio: "0 0 1 1" }'
      class='product__image'
    )
    h3(
      class='product__title'
    ) {{ product.title }}
    p(
      class='product__price'
    ) ${{ product.variants[0].price }}


</template>


<script>
import Photo from '~comp/Photo.vue'


export default {
  components: {
    Photo
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-product
  display: flex

.product
  display: grid
  grid-template-rows: min-content repeat(2, auto)
  grid-gap: $unit 0
  box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)
  padding: $unit $unit $unit*4 $unit
  background: $white

  &__image


  &__title
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    font-size: 12px
    color: $black
    margin-top: $unit*2

  &__price
    font-size: 12px
    color: $dark

</style>
