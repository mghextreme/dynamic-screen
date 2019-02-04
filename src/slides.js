import Clock from './components/Clock.vue'
import StaticImage from './components/StaticImage.vue'

export default [{
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
}]
