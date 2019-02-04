<template>
  <div id="app">
    <div v-bind:is="current.name" v-bind:params="current.params" v-on:end="next()"></div>
  </div>
</template>

<script>
import Configuration from './slides.js'

var components = {}
for (var i = 0; i < Configuration.length; i++) {
  components[Configuration[i].name] = Configuration[i].component
}

export default {
  name: 'app',
  data: function () {
    return {
      status: 'paused',
      index: 0,
      current: Configuration[0]
    }
  },
  methods: {
    next: function () {
      this.index++
      if (this.index >= Configuration.length) {
        this.index = 0
      }

      this.current = Configuration[this.index]
    },
    play: function () {
      this.status = 'playing'
    },
    pause: function () {
      this.status = 'paused'
    }
  },
  components: components
}
</script>

<style lang="scss">
@import 'assets/sass/defaults';

body {
  @include fullscreen();
}

#app {
  @include fullscreen();

  font-family: $primary-font;
  font-size: 16px;

  text-align: center;
  background: $color-background;
  color: $color-foreground;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
