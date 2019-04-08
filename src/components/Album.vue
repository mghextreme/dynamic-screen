<template>
  <div class="album"></div>
</template>

<script>
import SlideBase from './SlideBase.vue'
import anime from 'animejs/lib/anime.es.js'
import $ from 'jquery'
import _ from 'lodash'

var animations = [
  'left',
  'right',
  'up',
  'down',
  'zoomIn',
  'zoomOut'
]

export default {
  extends: SlideBase,
  name: 'Album',
  data: function () {
    return {
      current: 0,
      lastAnimation: '',
      defaults: {
        images: [
          'images/staticimage.jpg',
          'images/staticimage.jpg',
          'images/staticimage.jpg'
        ],
        intro: null,
        animation: {
          enter: 1000,
          leave: 1000,
          each: 3500
        }
      }
    }
  },
  computed: {
    fullAnimationTime: function () {
      return this.values.animation.enter
        + this.values.animation.each
        + this.values.animation.leave
    }
  },
  methods: {
    setup: function () {
      this.current = 0
    },
    enter: function () {
      this.nextImage()
    },
    nextImage: function () {
      if (this.current >= this.values.images.length) {
        setTimeout(this.leave, this.values.animation.leave)
        return
      }

      var opacityArray = [
        { value: [0, 1], duration: this.values.animation.enter }
      ]
      if (this.current == this.values.images.length - 1)
        opacityArray.push({ value: 0, duration: this.values.animation.leave, delay: this.values.animation.each })

      var el = this.addImage(this.values.images[this.current])
      var animation = this.randomAnimation()
      var fullAnimation = $.extend(true, animation, {
        targets: el,
        easing: 'linear',
        opacity: opacityArray,
        complete: function (anim) {
          $(anim.animatables[0].target).remove()
        }
      })
      anime(fullAnimation)
      this.current++
      setTimeout(this.nextImage, this.values.animation.enter + this.values.animation.each)
    },
    addImage: function (imageUrl) {
      var newEl = $('<div>').addClass('image')
      newEl.css({ backgroundImage: 'url(\'' + imageUrl + '\')', zIndex: this.current })
      $(this.$el).append(newEl)
      return newEl[0]
    },
    randomAnimation: function () {
      var anims = _.cloneDeep(animations)
      anims = _.shuffle(_.pull(anims, this.lastAnimation))
      this.lastAnimation = _.take(anims, 1)[0]
      switch (this.lastAnimation)
      {
        case 'left':
          return {
            left: [ -40, -40 ],
            right: [ -40, -40 ],
            translateX: {
              value: [ 40, -40 ],
              duration: this.fullAnimationTime
            }
          }
        case 'right':
          return {
            left: [ -40, -40 ],
            right: [ -40, -40 ],
            translateX: {
              value: [ -40, 40 ],
              duration: this.fullAnimationTime
            }
          }
        case 'up':
          return {
            top: [ -40, -40 ],
            bottom: [ -40, -40 ],
            translateY: {
              value: [ 40, -40 ],
              duration: this.fullAnimationTime
            }
          }
        case 'down':
          return {
            top: [ -40, -40 ],
            bottom: [ -40, -40 ],
            translateY: {
              value: [ -40, 40 ],
              duration: this.fullAnimationTime
            }
          }
        case 'zoomIn':
          return {
            scale: {
              value: [ 1, 1.1 ],
              duration: this.fullAnimationTime
            }
          }
        case 'zoomOut':
          return {
            scale: {
              value: [ 1.1, 1 ],
              duration: this.fullAnimationTime
            }
          }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/defaults';

.album {
  @include fullscreen();

  .title {
    @include fullscreen();
    @include flex-box();

    flex-direction: column;
  }

  .image {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background: center no-repeat;
    background-size: cover;
    opacity: 0;
  }
}
</style>
