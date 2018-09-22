<template lang='pug'>
div(class='container-submit')

  form(
    @submit.prevent=''
    class='submit'
  )

    input(
      @click='addToCart'
      :class='{ valid: variant.available }'
      value='Add To Cart'
      type='submit'
      class='submit__add-to-cart'
    )

</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {
    variant: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    async addToCart () {
      if (!this.variant.available) return

      try {
        const lineItems = [{ variantId: this.variant.id, quantity: this.quantity }]
        await this.addLineItems({ lineItems })
      }
      catch (e) {
        console.log(e)
      }
    },


    ...mapActions({
      addLineItems: 'checkout/addLineItems'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-submit

.submit

  &__add-to-cart
    width: 100%
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
