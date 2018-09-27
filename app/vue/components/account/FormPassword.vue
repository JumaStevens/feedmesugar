<template lang='pug'>
div(class='container-form-email')

  form(
    class='form-password'
  )
    label(class='label') Current Password
    input(
      class='input'
    )
    label(class='label') New Password
    input(
      class='input'
    )
    label(class='label') Confirm Password
    input(
      class='input'
    )
    div(class='buttons')
      a(class='cancel') Cancel
      button(
        class='submit'
      ) Save

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
.container-form-email

.form-password
  @extend %account-form


</style>
