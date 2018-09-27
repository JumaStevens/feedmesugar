<template lang='pug'>
div(class='container-form-email')

  form(
    class='form'
  )
    label(class='label') Country Code
    input(
      class='input'
    )
    label(class='label') Phone Number
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

.form
  @extend %account-form


</style>
