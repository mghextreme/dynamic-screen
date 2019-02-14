<template>
  <div class="image">
    <div class="content" v-bind:style="{ backgroundImage: imageUrl }"></div>
  </div>
</template>

<script>
import SlideBase from './SlideBase.vue'
import anime from 'animejs/lib/anime.es.js'

export default {
  extends: SlideBase,
  name: 'StaticImage',
  data: function () {
    return {
      defaults: {
        time: 6000,
        image: 'images/staticimage.jpg',
        animation: {
          enter: 1000,
          leave: 1000
        }
      }
    }
  },
  computed: {
    imageUrl: function () {
      return 'url(\'' + this.values.image + '\')'
    },
    leaveDelay: function () {
      return this.values.time - this.values.animation.leave - this.values.animation.enter
    }
  },
  methods: {
    enter: function () {
      anime({
        targets: this.$el,
        scale: {
          value: [1, 1.05],
          duration: this.values.time
        },
        opacity: [
          { value: [0, 1], duration: this.values.animation.enter },
          { value: [1, 0], duration: this.values.animation.leave, delay: this.leaveDelay }
        ],
        easing: 'linear',
        complete: this.leave
      })
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
