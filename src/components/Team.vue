<template>
  <div class="team">
    <h1 class="title">{{ values.title }}</h1>
    <div class="person">
      <div class="thumbnail">
        <img v-bind:src="person.photo" />
      </div>
      <div class="info">
        <h2 class="name">{{ person.name }}</h2>
        <p class="desc">{{ person.description }}</p>
        <div class="attributes">
          <TeamAttribute v-for="item in person.attributes" :attr-name="item.name" :attr-value="item.number" :key="item.name"></TeamAttribute>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamAttribute from './TeamAttribute.vue'
import SlideBase from './SlideBase.vue'
import $ from 'jquery'
import _ from 'lodash'
import anime from 'animejs/lib/anime.es.js'

export default {
  extends: SlideBase,
  name: 'Team',
  data: function () {
    return {
      current: 0,
      currentQueue: [],
      person: {},
      defaults: {
        title: 'Team members',
        animation: {
          enter: 2000,
          leave: 1000
        },
        stage: {
          amount: 2,
          time: 4000,
          order: 'RAND'
        },
        team: []
      }
    }
  },
  methods: {
    setup: function () {
      this.current = 0

      var allMembers = _.cloneDeep(this.values.team)
      this.currentQueue = _.take(_.shuffle(allMembers), this.values.stage.amount)
      _.forEach(this.currentQueue, function (value) {
        value.attributes = _.take(_.shuffle(value.attributes), 2)
      })
      this.person = this.currentQueue[0]
    },
    enterMember: function () {
      var person = $(this.$el).find('.person')
      person.css({ transform: '', opacity: 1 })
      var tl = anime.timeline({
        easing: 'linear'
      })
      tl.add({
        targets: person.find('.thumbnail')[0],
        scale: {
          value: [0, 1],
          easing: 'easeOutExpo'
        },
        rotate: {
          value: [40, 0],
          easing: 'easeOutElastic'
        },
        duration: 1500
      }, 0)
      tl.add({
        targets: person.find('.info .name')[0],
        translateX: {
          value: [60, 0],
          easing: 'easeOutCubic'
        },
        opacity: [0, 1],
        duration: 2000
      }, 250)
      tl.add({
        targets: person.find('.info .desc')[0],
        translateX: {
          value: [40, 0],
          easing: 'easeOutCubic'
        },
        opacity: [0, 0.7],
        duration: 1600
      }, 800)
      tl.add({
        targets: person.find('.info .attributes')[0],
        translateX: {
          value: [40, 0],
          easing: 'easeOutCubic'
        },
        opacity: [0, 1],
        duration: 1400
      }, 1200)

      var comp = this
      tl.finished.then(function () {
        setTimeout(comp.leaveMember, comp.values.stage.time)
      })
    },
    leaveMember: function () {
      var tl = anime.timeline({
        easing: 'linear'
      })
      var person = $(this.$el).find('.person')
      tl.add({
        targets: person[0],
        opacity: [1, 0],
        duration: this.values.animation.leave
      }, 0)
      tl.add({
        targets: person[0],
        translateY: [0, 100],
        duration: this.values.animation.leave,
        easing: 'easeInCirc'
      }, 0)

      tl.finished.then(this.nextMember)
    },
    nextMember: function () {
      this.current += 1
      if (this.current < this.values.stage.amount) {
        this.person = this.currentQueue[this.current]
        setTimeout(this.enterMember(), 500)
      } else {
        this.leave()
      }
    },
    enter: function () {
      var tl = anime.timeline({
        easing: 'easeOutExpo'
      })
      tl.add({
        targets: $(this.$el).children('.title')[0],
        height: [0, '1.2em'],
        duration: this.values.animation.enter
      }, 0)

      tl.finished.then(this.enterMember)
    },
    leave: function () {
      var tl = anime.timeline({
        easing: 'easeInExpo'
      })
      tl.add({
        targets: $(this.$el).children('.title')[0],
        opacity: [1, 0],
        duration: this.values.animation.leave
      }, 0)

      var comp = this
      tl.finished.then(function () {
        comp.$emit('end')
      })
    }
  },
  components: {
    TeamAttribute
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/defaults';

.team {
  @include fullscreen();
  @include flex-box();

  align-items: stretch;
  flex-direction: column;

  h1.title {
    font-size: 4em;
    margin-bottom: 1em;
    overflow: hidden;
  }

  .person {
    @include flex-box();

    .thumbnail {
      flex: 0 0 auto;
      border: 10px solid $color-blue;
      margin-right: 2em;
      transform: scale(0);

      img {
        width: 24em;
        height: auto;
      }
    }

    .info {
      flex: 0 0 auto;
      max-width: 56em;
      text-align: left;

      h2.name {
        font-size: 5em;
        margin-bottom: 0.1em;
        opacity: 0;
      }

      p {
        color: $color-foreground;
        font-size: 2em;
        opacity: 0.6;
        margin-bottom: 1em;
        opacity: 0;
      }

      .attributes {
        opacity: 0;
      }
    }
  }
}
</style>
