<template lang='pug'>
div(class='container-submit')

  form(
    @submit.prevent=''
    class='submit'
  )

    input(
      @click='addToCart'
      value='Add To Cart'
      type='submit'
      class='submit__add-to-cart'
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
  methods: {
    addToCart () {
      console.log('addToCart: ', )
    }
  }
}
</script>


<style lang='sass' scoped>
.container-submit

.submit

  &__add-to-cart
    width: $unit*20
    height: $unit*8
    display: flex
    justify-content: center
    align-items: center
    border: 2px solid $grey
    border-radius: $unit*6
    color: $grey

    &.valid
      border-color: $success
      color: $success
      cursor: pointer

</style>
