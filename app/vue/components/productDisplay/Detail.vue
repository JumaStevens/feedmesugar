<template lang='pug'>
div(class='container-detail')

  div(class='detail')

    h2 {{ product.title }}
    p $120


</template>


<script>

export default {
  components: {},
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

</style>
