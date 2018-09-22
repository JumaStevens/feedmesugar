<template lang='pug'>
div(class='container-discount')

  div(class='discount')

    header(class='discount__header')
      IconDiscount(class='discount__header-icon')
      h3(class='discount__header-title') Discount/Promo Code
      p(class='discount__header-copy') Don't have any yet? Check out our discount programs

    form(
      @submit.prevent='applyDiscount'
      class='discount__form'
    )
      input(
        v-model='discountCode'
        placeholder='XXX-XXX-XXX'
        class='discount__form-input'
      )
      input(
        type='submit'
        value='Enter'
        class='discount__form-submit'
      )

</template>


<script>
import { mapActions } from 'vuex'
import IconDiscount from '~/assets/svg/icon-discount.svg'


export default {
  components: {
    IconDiscount
  },
  props: {},
  data () {
    return {
      discountCode: ''
    }
  },
  computed: {},
  methods: {
    async applyDiscount () {
      const discountCode = this.discountCode
      if (!discountCode) return

      try {
        await this.addDiscount({ discountCode })
      }
      catch (e) {
        console.error(e)
      }
    },


    ...mapActions({
      addDiscount: 'checkout/addDiscount'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-discount

.discount
  display: grid
  grid-gap: $unit*2 0
  +mq-m
    grid-auto-flow: column
    grid-gap: 0 $unit*2


  &__header
    display: grid
    grid-template-rows: repeat(2, auto)
    grid-template-columns: min-content auto
    grid-gap: 0 $unit*2

    &-icon
      width: $unit*3
      grid-row: 1 / -1
      grid-column: 1 / 2

    &-title
      grid-row: 1 / 2
      grid-column: 2 / 3
      font-weight: bold

    &-copy
      grid-row: 2 / 3
      grid-column: 2 / 3
      color: $dark


  &__form
    justify-self: start
    display: flex
    margin-left: $unit*5
    border: 1px solid $grey
    +mq-m
      justify-self: end

    &-input
      height: $unit*5
      padding: 0 $unit

    &-submit
      height: $unit*5
      padding: 0 $unit
      background: transparent

</style>
