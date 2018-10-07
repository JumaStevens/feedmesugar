<template lang='pug'>
main(
  class='vue-app'
)
  NavigationBar(
    class='vue-app__nav-bar'
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
      class='vue-app__view'
    )


  NewsletterSubscribe(
    v-show='!hideFooter.includes(route.name)'
    class='vue-app__newsletter-subscribe'
  )

  AppFooter(
    v-show='!hideFooter.includes(route.name)'
    class='vue-app__footer'
  )
</template>


<script>
import { mapState } from 'vuex'
import Error404 from './views/Error404.vue'
import NavigationBar from '~comp/navigationBar/Index.vue'
import NewsletterSubscribe from '~comp/newsletterSubscribe/Index.vue'
import AppFooter from '~comp/footer/Index.vue'


export default {
  components: {
    NavigationBar,
    NewsletterSubscribe,
    AppFooter,
    Error404
  },
  data () {
    return {
      hideFooter: [
        'menu',
        'auth'
      ]
    }
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

  &__nav-bar
    height: $unit*6

  &__error,
  &__view
    min-height: calc(100vh - #{$unit*6})


.fade-enter-active,
.fade-leave-active
  transition: opacity 150ms ease-in

.fade-enter,
.fade-leave-to
  opacity: 0


</style>
