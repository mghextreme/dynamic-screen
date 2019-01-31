<template>
  <div class="image">
    <div class="content" v-bind:style="{ backgroundImage: imageUrl }"></div>
  </div>
</template>

<script>
export default {
  name: 'StaticImage',
  props: {
    image: {
      default: 'images/countryside.jpg',
      type: String
    }
  },
  computed: {
    imageUrl: function(){
      return 'url(\'' + this.image + '\')';
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
