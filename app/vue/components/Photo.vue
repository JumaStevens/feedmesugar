<template lang='pug'>
div(class='container-image-ratio-sizer')

  div(class='image-ratio-sizer')
    svg(
      :viewBox='image.aspectRatio'
      class='image-ratio-sizer__svg'
    )
    lazy-component(
      class='image-ratio-sizer__wrapper'
    )
      img(
        :src='image.src'
        class='image-ratio-sizer__image'
      )
      div(class='image-ratio-sizer__transition-wrapper')
        div(class='image-ratio-sizer__transition')
</template>


<script>

export default {
  components: {},
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-image-ratio-sizer


.image-ratio-sizer
  display: grid

  &__svg,
  &__wrapper
    grid-area: 1 / 1 / 2 / 2

  &__wrapper
    display: flex
    position: relative

  &__image
    width: 100%
    height: 100%
    object-fit: cover

    &[lazy=loading],
    &[lazy=error]

      & + .image-ratio-sizer__transition-wrapper
        position: absolute
        width: 100%
        height: 100%
        background: $grey

        & .image-ratio-sizer__transition
          position: relative
          width: 100%
          height: 100%
          overflow: hidden

          &::after
            content: ''
            position: absolute
            width: 500%
            height: 500%
            background-image: linear-gradient(-45deg, rgba(0,0,0,0), $dark, rgba(0,0,0,0))
            opacity: .05
            animation: loading 1.5s infinite


    &[lazy='loaded']

      & + .image-ratio-sizer__transition-wrapper
        display: none


@keyframes loading
  0%
    transform: translate(-100%, -100%)
  100%
    transform: translate(100%, 100%)

</style>
