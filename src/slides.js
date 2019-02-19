import Clock from './components/Clock.vue'
import StaticImage from './components/StaticImage.vue'
import Team from './components/Team.vue'

export default [
  {
    component: Clock,
    name: 'Clock',
    params: {
      time: 6000,
      animation: {
        enter: 2000,
        leave: 1000
      }
    }
  },
  {
    component: StaticImage,
    name: 'StaticImage',
    params: {
      time: 7000,
      image: 'images/staticimage.jpg',
      animation: {
        enter: 1000,
        leave: 1000
      }
    }
  },
  {
    component: Team,
    name: 'Team',
    params: {
      title: 'Get to know our team',
      animation: {
        enter: 2000,
        leave: 1000
      },
      stage: {
        amount: 2,
        time: 4000,
        order: 'RAND'
      },
      team: [{
        name: 'John Doe',
        photo: 'images/team/default.jpg',
        description: 'Team Leader',
        attributes: [
          {
            name: 'Commitment',
            number: 9
          },
          {
            name: 'Haircut',
            number: 3
          }
        ]
      },
      {
        name: 'Mary Smith',
        photo: 'images/team/default.jpg',
        description: 'HR',
        attributes: [
          {
            name: 'Talent discovery',
            number: 8
          },
          {
            name: 'Jokes',
            number: 4
          }
        ]
      }]
    }
  }
]
