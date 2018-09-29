<template lang='pug'>
div(class='container-account')

  div(class='account')

    header(class='account__header')
      h2(class='account__header-title') Your Account
      p(class='account__header-copy') Credit: 0 pts

    AuthSettings(class='account__auth-settings')

    Orders(class='account__orders')

    //- Points(class='account__points')

    //-  Reviews

    a(
      @click='logout'
      class='account__logout'
    ) Log Out

</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import FileUploader from './FileUploader.vue'
import ProfileForm from './ProfileForm.vue'
import IconChevron from '~/assets/svg/icon-chevron.svg'
import AuthSettings from '~comp/account/AuthSettings.vue'
import Orders from '~comp/account/Orders.vue'
import Points from '~comp/account/Points.vue'



export default {
  components: {
    FileUploader,
    ProfileForm,
    IconChevron,
    AuthSettings,
    Orders,
    Points
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      displayName: 'auth/getCurrentUserDisplayName'
    })
  },
  methods: {
    async logout () {
      try {
        await this.signOut()
        this.$router.push({ name: 'index' })
      }
      catch (e) { console.error(e) }
    },


    ...mapActions({
      signOut: 'auth/signOut'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-account

.account
  width: 75%
  margin: 0 auto
  display: grid
  grid-gap: $unit*5 0

  &__header
    display: grid
    justify-items: center

    &-title
      font-size: $fs2

    &-copy


  &__auth-settings,
  &__orders


  &__orders

  &__points

  &__logout
    width: $unit*15
    height: $unit*5
    justify-self: center
    display: flex
    justify-content: center
    align-items: center
    color: $success

</style>
