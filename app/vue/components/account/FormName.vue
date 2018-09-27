<template lang='pug'>
div(class='container-form-name')

  form(
    @submit.prevent='validateForm'
    class='form-name'
  )
    label(class='label') First Name
    input(
      v-model='firstName'
      class='input'
    )
    label(class='label') Last Name
    input(
      v-model='lastName'
      class='input'
    )
    div(class='buttons')
      a(class='cancel') Cancel
      input(
        value='Save'
        type='submit'
        class='submit'
      )

</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {},
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {},
  methods: {
    async validateForm () {
      try {
        const firstName = this.firstName
        const lastName = this.lastName


        this.writeName({ firstName, lastName })
      }
      catch (e) {
        console.error(e)
      }
    },


    ...mapActions({
      writeName: 'account/writeName'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-form-name

.form-name
  @extend %account-form


</style>
