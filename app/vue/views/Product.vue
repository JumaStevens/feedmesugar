<template lang='pug'>
main(class='container-product')

  div(class='product')

    ProductDisplay(
      v-if='product'
      :product='product'
      class='product__display'
    )
</template>


<script>
import { mapState, mapActions } from 'vuex'
import ProductDisplay from '~comp/productDisplay/Index.vue'


export default {
  components: {
    ProductDisplay
  },
  data () {
    return {}
  },
  computed: {
    product () {
      return this.products[this.productId]
    },


    ...mapState({
      productId: state => state.route.params.id,
      products: state => state.catalog.products
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'catalog/fetchProducts'
    })
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<style lang='sass' scoped>
.container
  // box-shadow: 0px 0px 0.5rem rgba(33, 33, 33, 0.2)


</style>
