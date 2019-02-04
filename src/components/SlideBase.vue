<template>
  <div class="slide"></div>
</template>

<script>
export default {
  name: 'SlideBase',
  props: {
    params: Object
  },
  methods: {
    reset: function () { },
    play: function () { },
    pause: function () { },
    enter: function () { },
    leave: function () { }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/defaults';

.slide {
  @include fullscreen();
}
</style>
