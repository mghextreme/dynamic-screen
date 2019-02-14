<template>
  <div class="image">
    <div class="content" v-bind:style="{ backgroundImage: imageUrl }"></div>
  </div>
</template>

<script>
import SlideBase from './SlideBase.vue'
import jQuery from 'jquery'

var defaults = {
  image: 'images/staticimage.jpg'
}

export default {
  extends: SlideBase,
  name: 'StaticImage',
  computed: {
    imageUrl: function () {
      var values = jQuery.extend(true, defaults, this.params)
      return 'url(\'' + values.image + '\')'
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
