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
        <TeamAttribute v-if="person.attributes.length > 0" v-bind:attr-name="person.attributes[0].name" v-bind:attr-value="person.attributes[0].number"></TeamAttribute>
        <TeamAttribute v-if="person.attributes.length > 1" v-bind:attr-name="person.attributes[1].name" v-bind:attr-value="person.attributes[1].number"></TeamAttribute>
      </div>
    </div>
  </div>
</template>

<script>
import TeamAttribute from './TeamAttribute.vue'
import SlideBase from './SlideBase.vue'
import jQuery from 'jquery'

var defaults = {
  title: 'Conheça nosso time',
  team: []
}

export default {
  extends: SlideBase,
  name: 'Team',
  data: function () {
    return {
      person: {}
    }
  },
  computed: {
    values: function () {
      return jQuery.extend(true, this.params, defaults)
    }
  },
  methods: {
    getRandomMember: function () {
      var rand = Math.floor(Math.random() * this.values.team.length)
      var member = this.values.team[rand]
      member.attributes = this.getRandomAttributes(member.attributes)
      return member
    },
    getRandomAttributes: function (attrArray) {
      var attrs = []

      if (attrArray.length < 2) {
        return attrArray
      }

      var ix = Math.floor(Math.random() * attrArray.length)
      var ix2 = Math.floor(Math.random() * (attrArray.length - 1))
      if (ix2 >= ix) {
        ix2++
      }

      attrs.push(attrArray[ix])
      attrs.push(attrArray[ix2])

      return attrs
    }
  },
  components: {
    TeamAttribute
  },
  created: function () {
    this.person = this.getRandomMember()
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
  }

  .person {
    @include flex-box();

    .thumbnail {
      flex: 0 0 auto;
      border: 10px solid $color-blue;
      margin-right: 2em;

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
      }

      p {
        color: $color-foreground;
        font-size: 2em;
        opacity: 0.6;
        margin-bottom: 1em;
      }
    }
  }
}
</style>
