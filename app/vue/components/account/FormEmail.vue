<template lang='pug'>
div(class='container-form-email')

  form(
    class='form-email'
  )
    label(class='label') Email
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

.form-email
  @extend %account-form


</style>
