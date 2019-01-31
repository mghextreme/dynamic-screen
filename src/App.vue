<template>
  <div id="app">
    <div v-bind:is="type"></div>
  </div>
</template>

<script>
import Clock from './components/Clock.vue';
import StaticImage from './components/StaticImage.vue';

var slides = [
  "Clock",
  "StaticImage"
];

export default {
  name: 'app',
  data: function(){
    return {
      index: 0,
      type: slides[0],
      ticker: null
    };
  },
  methods: {
    next: function(){
      this.index++;
      if (this.index >= slides.length)
        this.index = 0;
      
      this.type = slides[this.index];
    },
    play: function(){
      this.ticker = setInterval(this.next, 5000);
    },
    pause: function(){
      clearInterval(this.ticker);
    }
  },
  components: {
    Clock,
    StaticImage
  },
  created: function(){
    console.log(this);
    this.play();
  }
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
