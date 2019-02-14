<template>
  <div class="slide"></div>
</template>

<script>
export default {
  name: 'SlideBase',
  props: {
    params: Object
  },
  data: function () {
    return {
      timeout: null
    }
  },
  methods: {
    setup: function () { },
    reset: function () { },
    play: function () { },
    pause: function () { },
    enter: function () {
      this.timeout = setTimeout(this.leave, this.params.time)
    },
    leave: function () {
      this.$emit('end')
    }
  },
  beforeMount: function () {
    this.setup()
  },
  mounted: function () {
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
