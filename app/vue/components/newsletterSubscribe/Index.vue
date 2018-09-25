<template lang='pug'>
div(class='container-newsletter-subscribe')

  div(class='newsletter-subscribe')
    h3(class='newsletter-subscribe__title') Let's Party
    p(class='newsletter-subscribe__copy') Be the first to know about new arrivals and exclusive offers.

    form(
      @submit.prevent=''
      class='newsletter-subscribe__form'
    )
      input(
        type='email'
        placeholder='Your email'
        class='newsletter-subscribe__form-input'
      )
      input(
        type='submit'
        value='Subscribe'
        class='newsletter-subscribe__form-submit'
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
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-newsletter-subscribe
  margin-top: $unit*10
  background: rgba(212, 228, 241, 1)

.newsletter-subscribe
  width: 75%
  max-width: 1024px
  display: grid
  grid-gap: $unit*2 0
  padding: $unit*10 0
  margin: 0 auto
  +mq-m
    grid-template-rows: repeat(2, auto)
    grid-template-columns: repeat(2, 1fr)
    grid-gap: $unit*2 $unit*5

  &__title
    font-size: $fs2
    +mq-m
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__copy
    max-width: 320px
    +mq-m
      grid-row: 2 / 3
      grid-column: 1 / 2

  &__form
    position: relative
    width: 100%
    height: min-content
    display: flex
    flex-direction: column
    margin-top: $unit*2
    +mq-m
      grid-row: 1 / -1
      grid-column: 2 / 3
      margin-top: unset

    &::after
      content: ''
      position: absolute
      width: 90%
      height: 2px
      top: 50%
      background: $black

    &-input
      height: $unit*5
      background: transparent

      &::placeholder
        color: $dark

    &-submit
      width: $unit*20
      height: $unit*5
      align-self: flex-end
      border-radius: $unit*3
      background: $black
      color: $white

</style>
