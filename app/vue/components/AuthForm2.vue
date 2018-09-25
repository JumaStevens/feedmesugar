<template lang='pug'>
div(class='container-auth-form')

  form(
    @submit.prevent=''
    class='auth-form'
  )

    header(
      class='auth-form__header'
    )
      a(
        @click='setActiveView("sign in")'
        :class='{ active: activeView === "sign in" }'
        class='auth-form__sign-in'
      ) Sign In
      a(
        @click='setActiveView("sign up")'
        :class='{ active: activeView === "sign up" }'
        class='auth-form__sign-up'
      ) Sign Up


    //- sign in card
    div(
      v-show='activeView === "sign in"'
      class='auth-form__wrapper-sign-in'
    )
      div(class='auth-form__email')
        IconEmail(class='auth-form__svg')
        input(
          v-model='email'
          placeholder='Email'
          class='auth-form__input'
        )
      div(class='auth-form__password')
        IconPassword(class='auth-form__svg')
        input(
          v-model='password'
          placeholder='Password'
          class='auth-form__input'
        )
      a(
        @click='setActiveView("password reset")'
        class='auth-form__password-reset'
      ) Forgot password?
      input(
        @click='signIn'
        value='Sign In'
        type='submit'
        class='auth-form__submit'
      )
      div(class='auth-form__providers')
        p(class='auth-form__copy') Sign in with
        a(
          @click='signInWithFacebook'
          class='auth-form__icon'
        )
          IconFacebook(class='auth-form__svg')
        a(
          @click='signInWithGoogle'
          class='auth-form__icon'
        )
          IconGoogle(class='auth-form__svg')
        a(
          @click='signInWithTwitter'
          class='auth-form__icon'
        )
          IconTwitter(class='auth-form__svg')


    //- sign up card
    div(
      v-show='activeView === "sign up"'
      class='auth-form__wrapper-sign-up'
    )
      div(class='auth-form__email')
        IconEmail(class='auth-form__svg')
        input(
          v-model='email'
          placeholder='Email'
          class='auth-form__input'
        )
      div(class='auth-form__password')
        IconPassword(class='auth-form__svg')
        input(
          v-model='password'
          placeholder='Password'
          class='auth-form__input'
        )
      input(
        @click='signUp'
        value='Sign Up'
        type='submit'
        class='auth-form__submit'
      )
      div(class='auth-form__providers')
        p(class='auth-form__copy') Sign up with
        a(
          @click='signInWithFacebook'
          class='auth-form__icon'
        )
          IconFacebook(class='auth-form__svg')
        a(
          @click='signInWithGoogle'
          class='auth-form__icon'
        )
          IconGoogle(class='auth-form__svg')
        a(
          @click='signInWithTwitter'
          class='auth-form__icon'
        )
          IconTwitter(class='auth-form__svg')


    //- password reset view
    div(
      v-show='activeView === "password reset"'
      class='auth-form__wrapper-password-reset'
    )
      div(class='auth-form__email')
        IconEmail(class='auth-form__svg')
        input(
          v-model='email'
          placeholder='Email'
          class='auth-form__input'
        )
      div(class='auth-form__recaptcha')
        a(
          @click='toggleRecaptcha'
          class='auth-form__recaptcha-checkbox'
        )
          IconCheckMark(
            v-show='recaptcha'
            class='auth-form__svg'
          )
        p(class='auth-form__recaptcha-copy') I'm Not A Robot
        IconRecaptcha(class='auth-form__svg')

      input(
        @click='passwordReset'
        value='Reset Password'
        type='submit'
        class='auth-form__submit'
      )

</template>


<script>
import IconEmail from '~/assets/svg/icon-email.svg'
import IconPassword from '~/assets/svg/icon-password.svg'
import IconGoogle from '~/assets/svg/icon-google.svg'
import IconFacebook from '~/assets/svg/icon-facebook.svg'
import IconTwitter from '~/assets/svg/icon-twitter.svg'
import IconRecaptcha from '~/assets/svg/icon-recaptcha.svg'
import IconCheckMark from '~/assets/svg/icon-check-mark.svg'


export default {
  components: {
    IconEmail,
    IconPassword,
    IconGoogle,
    IconFacebook,
    IconTwitter,
    IconRecaptcha,
    IconCheckMark
  },
  props: {},
  data () {
    return {
      email: '',
      password: '',
      activeView: 'sign up',
      recaptcha: false
    }
  },
  computed: {},
  methods: {
    setActiveView (view) {
      this.activeView = view
    },


    toggleRecaptcha () {
      this.recaptcha = !this.recaptcha
    },


    signUp () {
      console.log('signUp: ')
    },


    signIn () {
      console.log('signIn')
    },


    signInWithFacebook () {},
    signInWithGoogle () {},
    signInWithTwitter () {},


    passwordReset () {
      console.log('passwordReset')
    }
  }
}
</script>


<style lang='sass' scoped>
.container-auth-form
  min-width: $unit*30
  min-height: $unit*42
  background: $white
  box-shadow: 0 0 $unit*3 rgba(34, 34, 34, 0.05)

.auth-form
  height: 100%
  display: grid
  grid-gap: $unit*3 0

  &__header
    display: grid
    grid-template-columns: repeat(2, min-content)
    grid-gap: 0 $unit*2
    padding: $unit*2

  &__sign-in,
  &__sign-up
    white-space: nowrap
    font-size: 12px
    text-transform: uppercase
    color: $grey

    &.active
      color: $black

  &__wrapper-sign-in,
  &__wrapper-sign-up,
  &__wrapper-password-reset
    display: grid
    grid-gap: $unit*3
    padding: 0 $unit*2 $unit*2 $unit*2

  &__wrapper-sign-up
    // grid-template-rows: auto auto 1fr auto auto

  &__icon
    width: $unit*5
    height: $unit*5
    display: flex
    justify-content: center
    align-items: center

  &__svg
    width: $unit*2
    height: $unit*2

  &__email,
  &__password
    display: grid
    grid-auto-flow: column
    grid-gap: 0 $unit
    align-items: center
    grid-template-columns: min-content 1fr

  &__recaptcha
    display: grid
    grid-auto-flow: column
    grid-gap: 0 $unit
    grid-template-rows: $unit*3
    grid-template-columns: min-content 1fr min-content
    align-items: center

    &-checkbox
      position: relative
      width: 14px
      height: 14px
      border: 1px solid $black

      & > .auth-form__svg
        position: absolute
        top: 33%
        left: 80%
        transform: translate(-50%, -50%)

    &-copy
      font-size: 12px
      vertical-align: middle
      color: $black

  &__input
    height: $unit*3
    background: transparent
    border-bottom: 1px solid $grey
    font-size: 12px

  &__submit
    height: $unit*4
    display: flex
    justify-content: center
    align-items: center
    border-radius: $unit*3
    background: $black
    color: $white
    font-size: 12px
    text-transform: uppercase

  &__password-reset
    font-size: 12px
    justify-self: end

  &__providers
    display: grid
    grid-gap: 0 $unit
    grid-template-rows: repeat(2, min-content)
    grid-template-columns: repeat(3, min-content)
    justify-self: center

  &__copy
    grid-row: 1 / 2
    grid-column: 1 / 4
    font-size: 12px
    text-align: center
    color: $grey

</style>
