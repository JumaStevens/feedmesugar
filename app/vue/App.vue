<template lang='pug'>
main(
  class='vue-app'
)
  Navigation(
    class='vue-app__nav'
  )

  transition
    Error404(
      v-if='error.isError && error.type == "404"'
      class='vue-app__error'
    )
    router-view(
      :key='this.$route.fullPath'
      class='vue-app__view'
    )

  NewsletterSubscribe(
    class='vue-app__newsletter-subscribe'
  )

  AppFooter(
    class='vue-app__footer'
  )
</template>


<script>
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
    }
  },
  methods: {},
  beforeCreate () {
    this.$store.dispatch('auth/watchAuthState')
  }
}
</script>


<style lang='sass'>
@import './assets/sass/main.sass'

.vue-app
  min-height: 100vh
  display: grid
  grid-template-rows: auto minmax(100vh, auto) auto auto

  &__nav
    grid-row: 1 / 2

  &__error,
  &__view
    display: contents
    min-height: 100vh
    grid-row: 2 / 3

  &__newsletter-subscribe
    grid-row: 3 / 4

  &__footer
    grid-row: 4 / 5

</style>
