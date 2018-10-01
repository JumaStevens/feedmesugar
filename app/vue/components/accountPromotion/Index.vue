<template lang='pug'>
div(class='container-account-promotion')

  div(class='account-promotion')
    h3(class='account-promotion__title') Join the Community

    ul(class='account-promotion__list')
      li(
        v-for='(item, index) in benefits'
        :key='item + index'
        class='account-promotion__item'
      )
        p(class='account-promotion__copy') {{ item }}

    AuthForm(class='account-promotion__auth-form')

</template>


<script>
import AuthForm from '~comp/AuthForm.vue'


export default {
  components: {
    AuthForm
  },
  props: {},
  data () {
    return {
      benefits: [
        'Earn rewards for purchases, and leaving product reviews.',
        'Be notified when products you want go on sale.',
        'Receive exclusive offers.',
        'Enjoy faster checkouts—save shipping details.'
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-account-promotion
  background: rgba(248, 248, 248, 1)
  width: 100%
  padding: $unit*10 0


.account-promotion
  width: 75%
  max-width: 1024px
  display: grid
  margin: 0 auto
  grid-gap: $unit*3 0
  justify-items: center
  +mq-s
    grid-template-rows: repeat(3, min-content)
    grid-template-columns: repeat(2, 1fr)
    grid-gap: $unit*3 $unit*4

  &__title
    font-size: $fs2
    +mq-s
      grid-row: 1 / 2
      grid-column: 1 / 2

  &__list
    display: grid
    grid-gap: $unit*2 0
    +mq-s
      grid-row: 2 / 3
      grid-column: 1 / 2

  &__item
    list-style: circle

  &__copy


  &__auth-form
    margin-top: $unit*5
    +mq-s
      grid-row: 1 / -1
      grid-column: 2 / 3
      margin-top: unset



</style>
