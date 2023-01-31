<template>
  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Caso de uso: Flujo para detección asistida para cáncer de huesos largos"
    image="assets/images/use-case/use-case.png"
    index="6"
    color ="use-case-primary-color"
    dark_color ="use-case-primary-dark-color"
    image_width = "500"
    :btn1 ="true"
  >
  <template v-slot:footer>
          <!-- <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span> -->
          <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
            Obtenido
          </div>
          <!-- <div class="mb--md front-page__buttons flex-wrap">
            <Button title="Poster cualitativo" :color="color" :dark_color="dark_color" />
            <Button title="Poster cuantitativo" :color="color" :dark_color="dark_color" />
            <Button title="Software" :color="color" :dark_color="dark_color" />
            <Button title="Infografia tecnica" :color="color" :dark_color="dark_color" />
            <Button title="Infografia general" :color="color" :dark_color="dark_color" />
          </div> -->
  </template>
</PlatformFrontPage>
  <Footer></Footer>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
export default {
  components: {Footer,Card,PlatformFrontPage,
    Carousel, Slide, Pagination, Navigation , Navbar,Button
  },
  data() {
      return {
            sections:{
              section_0:{
                title:"Crea sistemas de e-Salud en minutos para el manejo de datos y contenidos médicos",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed repellat mollitia illum dolorum in corrupti ipsum voluptate possimus veniam, ut, voluptatem minima iste quo pariatur, est molestias quidem fugit ea molestiae amet suscipit? Obcaecati libero, non, vero, corporis tempore quidem sint consequuntur nesciunt quas aliquam aliquid molestias et distinctio! Quidem quaerat sint doloremque itaque quisquam mollitia aut perferendis iusto?",
                images:[
                  {
                    src:"",
                    alt:"",
                    width:""
                  }
                ]
                
              }
            },
          // color :"bg--painal-primary-color"
        color : "use-case-primary-color",
        dark_color : "use-case-primary-dark-color"
        // color : "bg--chimalli-primary-color"
      };
  },
}
</script>