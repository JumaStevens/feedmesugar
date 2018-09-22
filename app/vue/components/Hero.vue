<template lang='pug'>
div(class='container-hero')

  div(class='hero')
    header(class='hero__header')
      h1(
        class='hero__title'
      ) {{ header.title }}
      p(
        class='hero__copy'
      ) {{ header.copy }}
    Photo(
      :image='image'
      class='hero__image'
    )

</template>


<script>
import Photo from '~comp/Photo.vue'


export default {
  components: {
    Photo
  },
  props: {
    image: {
      type: Object
    },
    header: {
      type: Object
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
.container-hero
  display: contents

.hero
  display: grid
  grid-template-rows: auto
  grid-template-columns: repeat(2, 1fr)
  grid-gap: 0 $unit*5

  &__header
    position: relative
    z-index: 6
    align-self: center
    display: grid
    grid-gap: $unit
    grid-row: 1 / 2
    grid-column: 1 / -1
    margin: 0 12.5%
    +mq-s
      margin: 0 0 0 25%
      grid-column: 1 / 2

  &__title
    font-size: $fs2
    color: $white
    +mq-s
      color: $black

  &__copy
    color: $white
    +mq-s
      color: $black

  &__image
    position: relative
    z-index: 5
    grid-row: 1 / 2
    grid-column: 1 / -1
    +mq-s
      grid-column: 2 / 3

</style>
