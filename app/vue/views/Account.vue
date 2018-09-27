<template lang='pug'>
div
  account
</template>


<script>
import Account from '~comp/account/Index.vue'
import firebase from '~/firebase'


export default {
  components: {
    Account
  },
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    const authUser = firebase.auth().currentUser
    authUser ? next() : next({ name: 'auth' })
  }
}
</script>


<style lang='sass' scoped>
.container



</style>
