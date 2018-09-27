<template lang='pug'>
div(class='container-auth')

  div(class='auth')

    AuthForm(class='auth__form')

</template>


<script>
import { mapState } from 'vuex'
import AuthForm from '~comp/AuthForm.vue'


export default {
  components: {
    AuthForm
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      authUser: state => state.auth.authUser
    })
  },
  watch: {
    authUser () {
      this.authUser ? this.$router.replace({ name: 'account' }) : null
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-auth
  display: flex

.auth
  position: relative
  width: 100%
  display: grid
  justify-content: center
  align-content: center

  &::before
    content: ''
    position: absolute
    z-index: -1
    bottom: 0
    right: 0
    width: 0
    height: 0
    border-right: calc(100vw - #{$unit * 6}) solid #f8f8f8
    border-bottom: 100vh solid transparent


</style>
