<template lang='pug'>
div(class='container-discount')

  div(class='discount')

    IconDiscount(class='discount__icon')
    h3(class='discount__title') Discount/Promo Code
    p(class='discount__copy') Don't have any yet? Check out our discount programs.

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
  grid-template-rows: repeat(3, min-content)
  grid-template-columns: auto
  grid-gap: $unit*2 $unit*2
  +mq-xs
    grid-template-columns: repeat(2, min-content)
  +mq-s
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: min-content auto min-content


  &__icon
    display: none
    +mq-xs
      display: unset
      width: $unit*3
      grid-row: 1 / -1
      grid-column: 1 / 2

  &__title
    grid-row: 1 / 2
    grid-column: 1 / 2
    font-weight: bold
    +mq-xs
      grid-column: 2 / 3


  &__copy
    max-width: 280px
    grid-row: 2 / 3
    grid-column: 1 / 2
    color: $dark
    +mq-xs
      grid-column: 2 / 3


  &__form
    justify-self: start
    height: min-content
    display: flex
    border: 1px solid $grey
    +mq-s
      grid-row: 2 / 3
      justify-self: end

    &-input
      height: $unit*5
      padding: 0 $unit

    &-submit
      height: $unit*5
      padding: 0 $unit
      background: transparent

</style>
