<template lang='pug'>
main.container
  a(@click='fetchProducts()') Fetch Products
  img(src='//cdn.shopify.com/s/files/1/0045/5321/1977/products/product-image-634593642_300x300.jpg?v=1537109383')
</template>


<script>
import { mapActions } from 'vuex'

export default {
  components: {
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      fetchProducts: 'catalog/fetchProducts'
    })
  }
}
</script>

<style lang='sass' scoped>
.container
  // box-shadow: 0px 0px 0.5rem rgba(33, 33, 33, 0.2)


</style>
