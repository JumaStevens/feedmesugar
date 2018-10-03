<template lang='pug'>
div(class='container-menu')

  div(class='menu')

    ul(class='menu__list')
      li(
        v-for='(item, index) in menuLinks'
        :key='item.name + index'
        class='menu__item'
      )
        router-link(
          :to='{ name: item.name }'
          @mouseover.native='changePaletteColor(item.color)'
          class='menu__link'
        ) {{ item.text }}
          span(
            :style='{ backgroundColor: paletteColor }'
            class='menu__link-strike'
          )

    div(
      v-lazy:background-image='paletteImage'
      :style='{ backgroundColor: paletteColor }'
      class='menu__palette'
    )
</template>


<script>
import paletteImage from '~/assets/images/lipstick_girl.jpg'


export default {
  components: {},
  props: {},
  data () {
    return {
      menuLinks: [
        { text: 'Home', name: 'index', color: '#5a7fe6' },
        { text: 'Products', name: 'products', color: '#ff87a0' },
        { text: 'Collections', name: 'collections', color: '#ece671' },
        // { text: 'The Culture', name: 'index', color: '#ffcfe2' },
        // { text: 'FAQ', name: 'index', color: '#ff7caa' }
      ],
      paletteColor: '#ffe1e7',
      paletteImage: paletteImage
    }
  },
  computed: {},
  methods: {
    changePaletteColor (color) {
      this.paletteColor = color
    }
  }
}
</script>


<style lang='sass' scoped>
.container-menu
  margin-left: 12.5%

.menu
  height: calc(100vh - 40px)
  display: grid
  grid-template-rows: 1fr
  grid-template-columns: minmax(auto, 1fr) 1fr
  grid-gap: 0 $unit*3
  align-items: center
  +mq-m
    height: 100vh

  &__list
    grid-row: 1 / 2
    grid-column: 1 / 3
    display: grid
    grid-gap: $unit*5
    +mq-m
      grid-column: 1 / 2

  &__item
    overflow: hidden

  &__link
    position: relative
    z-index: 2
    padding-right: $unit
    font-size: $fs2
    background: $white
    +mq-m
      background: unset

    &-strike
      position: absolute
      z-index: 3
      width: 105%
      height: $unit
      top: 50%
      left: 0
      opacity: 0
      pointer-events: none
      transform: translate(-100%, -50%)
      transition: transform 150ms ease-out
      +mq-m
        z-index: -1

    &:hover &-strike
      opacity: 0.5
      transform: translate(10%, -50%)


  &__palette
    position: relative
    width: 100%
    height: 100%
    justify-self: end
    grid-row: 1 / 2
    grid-column: 2 / 3
    transition: background-color 350ms ease, opacity 500ms // possible performance issue
    background-size: cover
    background-position: center
    background-blend-mode: exclusion
    overflow: hidden
    opacity: 0

    &[lazy='loaded']
      opacity: 1

    &::after
      +mq-m
        content: '#feedmesugar'
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        color: $white
        font-size: $fs3
        mix-blend-mode: exclusion


</style>
