import Clock from './components/Clock.vue'
import StaticImage from './components/StaticImage.vue'
import Team from './components/Team.vue'

export default [
  {
    component: Clock,
    name: 'Clock',
    params: {
      time: 7000
    }
  },
  {
    component: StaticImage,
    name: 'StaticImage',
    params: {
      time: 7000,
      image: 'images/capgemini.jpg'
    }
  },
  {
    component: Team,
    name: 'Team',
    params: {
      time: 11000,
      title: 'Conheça a equipe de RPA',
      team: [{
        name: 'Matias G Henschel',
        photo: 'images/team/matias.png',
        description: 'Programador RPA',
        attributes: [
          {
            name: 'Programador',
            number: 9
          },
          {
            name: 'Vida social',
            number: 3
          },
          {
            name: 'Teimosia',
            number: 7
          },
          {
            name: 'Culinária',
            number: 2
          }
        ]
      },
      {
        name: 'Nathaniel F L Zanotto',
        photo: 'images/team/nathaniel.jpg',
        description: 'Programador RPA',
        attributes: [
          {
            name: 'Teorização e argumentação',
            number: 10
          },
          {
            name: 'Agressividade',
            number: 4
          }
        ]
      }]
    }
  }
]
