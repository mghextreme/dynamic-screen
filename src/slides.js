import Clock from './components/Clock.vue'
import StaticImage from './components/StaticImage.vue'

export default [{
  component: Clock,
  name: 'Clock',
  time: 7000
},
{
  component: StaticImage,
  name: 'StaticImage',
  time: 7000,
  params: {
    image: 'images/capgemini.jpg'
  }
}]
