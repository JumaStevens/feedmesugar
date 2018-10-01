<template lang='pug'>
div(class='container-hamburger')
  a(
    @click='$emit("handleClick")'
    :class='{ active }'
    class='hamburger'
  )
  a(
    @click='$emit("handleBackClick")'
    :class='{ active: back }'
    class='hamburger--back'
  ) Back
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  props: {
    active: {
      type: Boolean
    },
    back: {
      type: Boolean
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({

    })
  },
  methods: {
    ...mapMutations({

    })
  }
}
</script>


<style lang='sass' scoped>
.container-hamburger
  position: relative

.hamburger
  position: relative
  width: $unit*5
  height: $unit*5
  display: block
  border-radius: 50%
  background: rgba(255, 255, 255, 0.5)

  &::after,
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 50%
    width: $unit*3
    height: 2px
    background: $black
    transition: transform 500ms

  &::after
    transform: translate(-50%, -#{$unit/2})

  &::before
    transform: translate(-50%, #{$unit/2})

  &.active
    background: transparent

    &::after,
    &::before
      // background: $white
      transform: translate(-50%, 0)


  &--back
    position: absolute
    top: 50%
    left: calc(100% + #{$unit})
    width: $unit*5
    height: $unit*5
    display: flex
    justify-content: center
    align-items: center
    color: $blue
    opacity: 0
    visibility: hidden
    transform: translate(-$unit, -50%)
    transition: visibility 0ms 500ms, opacity 500ms, transform 500ms

    &.active
      opacity: 1
      visibility: visible
      transform: translate(0, -50%)
      transition: visibility 0ms, opacity 500ms, transform 500ms


</style>
