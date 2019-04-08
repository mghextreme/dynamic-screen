<template>
  <div class="blank"></div>
</template>

<script>
import SlideBase from './SlideBase.vue'

export default {
  extends: SlideBase,
  name: 'Blank',
  methods: {
    enter: function () {
      this.leave()
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/defaults';

.blank {
  @include fullscreen();
  opacity: 0;
}
</style>
