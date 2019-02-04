<template>
  <div class="team-attribute">
    <label>{{ attrName }}</label>
    <span class="value">{{ attrValue }}</span>
    <div class="bar"><div class="fill" v-bind:style="{ width: percentageWidth }"></div></div>
  </div>
</template>

<script>
export default {
  name: 'TeamAttribute',
  props: {
    attrName: String,
    attrValue: Number
  },
  computed: {
    percentageWidth: function () {
      return (this.attrValue * 10) + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/defaults';

.team-attribute {
  margin-top: 1.5em;

  label {
    padding-left: 0.3em;
    font-size: 2em;
  }
  
  span.value {
    position: absolute;
    top: 0;
    right: 0.5em;
    font-size: 2em;
    text-align: right;
  }

  .bar {
    margin-top: 1em;
    border: 3px solid $color-blue;
    height: 1em;

    .fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: $color-blue-2;
    }
  }
}
</style>
