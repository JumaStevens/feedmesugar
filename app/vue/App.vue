<template lang='pug'>
main(
  class='vue-app'
)
  Navigation(
    class='vue-app__nav'
  )

  transition(
    name='fade'
    mode='out-in'
  )
    Error404(
      v-if='error.isError && error.type == "404"'
      class='vue-app__error'
    )
    router-view(
      :key='this.$route.fullPath'
      class='vue-app__view'
    )

  NewsletterSubscribe(
    v-show='route.name !== "menu"'
    class='vue-app__newsletter-subscribe'
  )

  AppFooter(
    v-show='route.name !== "menu"'
    class='vue-app__footer'
  )
</template>


<script>
import { mapState } from 'vuex'
import Error404 from './views/Error404.vue'
import Navigation from '~comp/navigation/Index.vue'
import NewsletterSubscribe from '~comp/newsletterSubscribe/Index.vue'
import AppFooter from '~comp/footer/Index.vue'


export default {
  components: {
    Navigation,
    NewsletterSubscribe,
    AppFooter,
    Error404
  },
  data () {
    return {}
  },
  computed: {
    error () {
      return this.$store.state.error
    },
    isCurrentUser () {
      return this.$store.getters['auth/isCurrentUser']
    },


    ...mapState({
      route: state => state.route,
    })
  },
  methods: {},
  beforeCreate () {
    this.$store.dispatch('auth/watchAuthState')
    this.$store.dispatch('checkout/initCheckout')
    this.$store.dispatch('catalog/fetchCollectionsWithProducts')
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  min-height: calc(100vh - #{$unit*6})
  display: grid
  grid-template-rows: min-content repeat(3, min-content)
  padding-top: $unit*6
  +mq-m
    padding: 0 0 0 $unit*6

  &__nav
    grid-row: 1 / 2

  &__error,
  &__view
    min-height: calc(100vh - #{$unit*6})
    grid-row: 2 / 3
    +mq-m
      min-height: 100vh


  &__newsletter-subscribe
    grid-row: 3 / 4

  &__footer
    grid-row: 4 / 5


.fade-enter-active,
.fade-leave-active
  transition: opacity 50ms

.fade-enter,
.fade-leave-to
  opacity: .15


</style>
