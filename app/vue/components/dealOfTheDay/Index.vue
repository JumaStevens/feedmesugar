<template lang='pug'>
div(
  class='container-promotion'
)

  div(class='promotion')

    h3(class='promotion__title') Deal of the day

    div(class='promotion__countdown')
      span(class='promotion__countdown-time') {{ countDown.hours }}
      span(class='promotion__countdown-time') :
      span(class='promotion__countdown-time') {{ countDown.minutes }}
      span(class='promotion__countdown-time') :
      span(class='promotion__countdown-time') {{ countDown.seconds }}
      span(class='promotion__countdown-label') Hours
      span
      span(class='promotion__countdown-label') Mins
      span
      span(class='promotion__countdown-label') Secs

    router-link(
      :to='{ name: "product", params: { id: product.id } }'
      class='promotion__product'
    )
      Photo(
        :image='image'
        class='promotion__product-image'
      )
      p(class='promotion__product-discount')
        span(class='promotion__product-discount-copy') {{ discountPercent }}%
        span(class='promotion__product-discount-copy') off!

    router-link(
      :to='{ name: "product", params: { id: product.id } }'
      class='promotion__link'
    ) View Product

</template>


<script>
import moment from 'moment'
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
    return {
      date: moment.duration(1, 'day')
    }
  },
  computed: {
    countDown () {
      return {
        hours: '12',
        minutes: '01',
        seconds: '57'
      }
    },


    discountPercent () {
      const { price, compareAtPrice } = this.product.variants[0]
      return price * 100 / compareAtPrice - 100
    },


    image () {
      return {
        src: this.product.images[0].src,
        aspectRatio: '0 0 1 1'
      }
    }
  },
  methods: {
    handleCountDown () {
      setInterval(() => {
        this.date = moment(this.date.subtract(1, 'seconds'))
      }, 1000)
    }
  },
  created () {
    // this.handleCountDown()
  }
}
</script>


<style lang='sass' scoped>
.container-promotion
  background: rgba(248, 248, 248, 1)
  width: 100%
  padding: $unit*10 0

.promotion
  width: 75%
  display: grid
  justify-items: center
  grid-gap: $unit*3 0
  margin: 0 auto
  +mq-s
    grid-template-rows: repeat(5, auto)
    grid-template-columns: repeat(2, 1fr)
    grid-gap: $unit*3 $unit*4

  &__title
    font-size: $fs2
    +mq-s
      grid-row: 2 / 3
      grid-column: 1 / 2
      align-self: end

  &__countdown
    display: grid
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: repeat(5, min-content)
    grid-gap: $unit $unit*2
    +mq-s
      grid-row: 3 / 4
      grid-column: 1 / 2

    &-time
      font-size: $fs2
      line-height: 1

      &:nth-child(odd)
        width: 52px

    &-label
      font-size: 12px
      color: $dark

  &__link
    width: $unit*20
    height: $unit*5
    display: flex
    justify-content: center
    align-items: center
    border-radius: $unit*3
    border: 1px solid $dark

    +mq-s
      grid-row: 4 / 5
      grid-column: 1 / 2


  &__product
    position: relative
    width: 75%
    max-width: 440px
    +mq-s
      grid-row: 1 / -1
      grid-column: 2 / 3

    &-image
      box-shadow: 0 $unit*3 $unit*4 rgba(34, 34, 34, 0.075)

    &-discount
      position: absolute
      top: 0
      right: 0
      width: $unit*8
      height: $unit*8
      transform: translate(50%, -50%) rotate(-15deg)
      background: $white
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      border-radius: 50%

      &-copy
        font-size: $fs1
        font-weight: bold
        color: $success

        &:nth-child(2)
          font-size: 12px
          font-weight: unset



</style>
