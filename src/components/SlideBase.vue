<template>
  <div class="slide"></div>
</template>

<script>
export default {
  name: 'SlideBase',
  props: {
    params: Object
  },
  data: function() {
    return {
      timeout: null
    }
  },
  methods: {
    reset: function () { },
    play: function () { },
    pause: function () { },
    enter: function() {
      this.timeout = setTimeout(this.leave, 7000)
    },
    leave: function () { }
  },
  mounted: function() {
    this.$emit('mounted', this)
    this.enter()
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/defaults';

.slide {
  @include fullscreen();
}
</style>
