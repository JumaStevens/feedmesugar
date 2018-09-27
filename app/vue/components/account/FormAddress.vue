<template lang='pug'>
div(class='container-form-address')

  form(
    class='form-address'
  )
    label(class='label') Address
    input(
      class='input'
    )
    label(class='label') City
    input(
      class='input'
    )
    label(class='label') State
    input(
      class='input'
    )
    label(class='label') Zip
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

.form-address
  @extend %account-form


</style>
