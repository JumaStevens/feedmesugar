<template lang='pug'>
div(class='container-form-address')

  form(
    @submit.prevent='validateForm'
    class='form-address'
  )
    label(class='label') Address
    input(
      v-model='address'
      class='input'
    )
    label(class='label') City
    input(
      v-model='city'
      class='input'
    )
    label(class='label') State
    input(
      v-model='state'
      class='input'
    )
    label(class='label') Zip
    input(
      v-model='zipcode'
      class='input'
    )
    label(class='label') Country
    input(
      v-model='country'
      class='input'
    )
    div(class='buttons')
      a(class='cancel') Cancel
      input(
        type='submit'
        value='save'
        class='submit'
      )

</template>


<script>


export default {
  components: {},
  props: {},
  data () {
    return {
      address: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    }
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
