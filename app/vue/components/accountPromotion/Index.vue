<template lang='pug'>
div(class='container-account-promotion')

  div(class='account-promotion')
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
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-account-promotion

.account-promotion


</style>
