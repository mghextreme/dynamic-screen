<template>
  <div class="clock">
    <div class="time">
      <span class="hour">{{ format(hour) }}</span>
      :
      <span class="minute">{{ format(minute) }}</span>
      :
      <span class="second">{{ format(second) }}</span>
    </div>
    <div class="date">
      <span class="day">{{ format(day) }}/{{ format(month) }}/{{ year }}</span>
    </div>
  </div>
</template>

<script>
import SlideBase from './SlideBase.vue'
import $ from 'jquery'
import anime from 'animejs/lib/anime.es.js'

export default {
  extends: SlideBase,
  name: 'Clock',
  data: function () {
    return {
      defaults: {
        time: 6000,
        animation: {
          enter: 2000,
          leave: 1000
        }
      },
      hour: 0,
      minute: 0,
      second: 0,
      day: 0,
      month: 0,
      year: 0,
      date: new Date(Date.now()),
      ticker: null
    }
  },
  methods: {
    setup: function () {
      this.update()
      this.ticker = setInterval(this.tick, 1000)
    },
    format: function (number) {
      var concat = '00' + number
      return concat.substring(concat.length - 2)
    },
    update: function () {
      this.date = new Date(Date.now())
      this.year = this.date.getFullYear()
      this.month = this.date.getMonth() + 1
      this.day = this.date.getDate()
      this.hour = this.date.getHours()
      this.minute = this.date.getMinutes()
      this.second = this.date.getSeconds()
    },
    tick: function () {
      this.second++
      while (this.second >= 60) {
        this.update()
      }
    },
    enter: function () {
      var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: this.values.time
      })
      tl.add({
        targets: $(this.$el).children('.time')[0],
        height: [0, '1em'],
        duration: this.values.animation.enter * .5
      }, 0)
      tl.add({
        targets: $(this.$el).children('.date')[0],
        height: [0, '1em'],
        duration: this.values.animation.enter * .5
      }, this.values.animation.enter * .5)
      tl.add({
        targets: this.$el,
        opacity: [1, 0],
        duration: this.values.animation.leave
      }, this.values.time - this.values.animation.leave)

      tl.finished.then(this.leave)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/defaults';

.clock {
  @include fullscreen();
  @include flex-box();

  flex-direction: column;

  .time {
    font-size: 15em;
    line-height: 1em;
    overflow: hidden;
  }

  .date {
    font-size: 5em;
    line-height: 1em;
    overflow: hidden;
  }
}
</style>
