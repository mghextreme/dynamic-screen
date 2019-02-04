<template>
  <div class="image">
    <div class="content" v-bind:style="{ backgroundImage: imageUrl }"></div>
  </div>
</template>

<script>
import SlideBase from './SlideBase.vue'

export default {
  extends: SlideBase,
  name: 'StaticImage',
  methods: {
    enter: function() {
      this.timeout = setTimeout(this.leave, this.params.time)
    },
    leave: function() {
      this.$emit('end')
    }
  },
  computed: {
    imageUrl: function () {
      var defaultImage = 'images/capgemini.jpg'
      if (this.params != undefined && this.params.image != undefined) {
        defaultImage = this.params.image
      }

      return 'url(\'' + defaultImage + '\')'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/defaults';

.image {
  @include fullscreen();

  .content {
    @include fullscreen();

    background: center no-repeat;
    background-size: cover;
  }
}
</style>
