<template lang='pug'>
main.container
  h1 PDP
  pre {{ productId }}
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      productId: state => state.route.params.id
    })
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
