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
export default {
  name: 'Clock',
  props: {
    timeZone: Number
  },
  data: function(){
    return {
      hour: 0,
      minute: 0,
      second: 0,
      day: 0,
      month: 0,
      year: 0,
      date: new Date(Date.now()),
      ticker: null
    };
  },
  methods: {
    format: function(number){
      var concat = '00' + number;
      return concat.substring(concat.length - 2);
    },
    update: function(){
      this.date = new Date(Date.now());
      this.year = this.date.getFullYear();
      this.month = this.date.getMonth() + 1;
      this.day = this.date.getDate();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();
    },
    tick: function(){
      this.second++;
      while (this.second >= 60){
        this.update();
      }
    }
  },
  created: function(){
    this.update();
    this.ticker = setInterval(this.tick, 1000);
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
  }

  .date {
    font-size: 5em;
    line-height: 1em;
  }
}
</style>
