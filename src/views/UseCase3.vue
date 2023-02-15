<template>
  <Navbar 
    :text_color_normal ="'black'" 
    :text_color_scrolled="'black'" 
    :background_color="'white'" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'white'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
  /> 
  <PlatformFrontPage 
    title ="Caso de uso: Mortalidad por enfermedades"
    image="/images/use-case/use-case-3.png"
    index="6"
    color ="use-case-primary-color"
    dark_color ="use-case-primary-dark-color"
    image_width = "300"
    :title_size="section_title_size"
    text_color="white"
    circle_color="use-case-primary-dark-color"
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
  <Separator type="use-case"/>
  <SimpleSection title="" subtitle="">
    <template v-slot:body> 
        <div class="wrap">
          <iframe class="iframe" frameborder="no" scrolling="auto" src="/html/Plot7.html"  title=""></iframe>
        </div>
    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  <Footer/>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"

import useBreakpoints from "vue-next-breakpoints";
import Separator from '../components/Separator.vue';
import SimpleSection from '../components/SimpleSection.vue';
export default {
  components: { Footer, Card, PlatformFrontPage, Carousel, Slide, Pagination, Navigation, Navbar, Button, Separator, SimpleSection },
    setup(){
        const breakpoints = useBreakpoints({
            mobile:[320,768], // max-width: 600px
            table:[768,1024],
            desktop: [1281] // min-width: 601px
        });

        return {
            breakpoints
        };
    },
    computed:{
      is_mobile(){
        return this.breakpoints.mobile.matches || this.breakpoints.table.matches
      },
      section_text_size(){
        return this.is_mobile ? 'xl' : 'sm'
      },
      section_title_size(){
        return this.is_mobile ? 'xl':'md'
      },
      carousel_width(){
        return this.is_mobile ? '350px':'500px'
      }
    },
  data() {
      return {
        autoplay:'5000',
        sections:{
          section_0:{
            title:"Detección de nódulos en pulmón y flujo para la detección asistida para cáncer de huesos largo",
            text:"Debido  a  la  alta  demanda  en  especialistas  de  la  salud  avocados  al  diagnóstico  de este tipo de tumores, y que por cada paciente se analizan hasta cientos de imágenes por estudio, se tiene la necesidad de un sistema de detección de tumores mediante algoritmos de inteligencia artificial.",
            images:[
              {
                src:"/images/use-case/section_0_0.png",
                alt:"USE_CASE_0",
                width:"400"
              },

              {
                src:"/images/use-case/section_0_1.png",
                alt:"USE_CASE_1",
                width:"400"
              }
            ]
            
          },
          section_1:{
            title:"Detección de nódulos en pulmón y flujo para la detección asistida para cáncer de huesos largo",
            text:"Debido  a  la  alta  demanda  en  especialistas  de  la  salud  avocados  al  diagnóstico  de este tipo de tumores, y que por cada paciente se analizan hasta cientos de imágenes por estudio, se tiene la necesidad de un sistema de detección de tumores mediante algoritmos de inteligencia artificial.",
            images:[
              {
                src:"/images/use-case/section_1_0.png",
                alt:"USE_CASE_0",
                width:"1000"
              }
            ]
            
          },

          section_2:{
            title:"Visión artificial",
            text:"Es  importante  destacar  que  el  tipo  de  aprendizaje  necesario para entrenar  un  modelo, depende de la aplicación que se requiera. Por ejemplo, el aprendizaje no supervisado en imágenes médicas se suele utilizar para segmentar imágenes en los elementos que la componen, pero no se identifica cada elemento en la imagen, tiene como ventaja que  no se  requiere de  un  etiquetado  manual  previo,  ya  que  no se  especifica  a  qué clase pertenece cada segmento.",
            images:[
              {
                src:"/images/use-case/section_2_0.png",
                alt:"USE_CASE_0",
                width:"400"
              },
              {
                src:"/images/use-case/section_2_1.png",
                alt:"USE_CASE_0",
                width:"400"
              }
            ]
            
          }
        },
        color : "use-case-primary-color",
        dark_color : "use-case-primary-dark-color"
      };
  },
}
</script>

<style scoped> 
.wrap{
  /* position: relative; */
  display: block;
  width: 100%;
  height: auto;
  /* height: auto; */
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.iframe{
  display: block;
  height: 600px;
  width: 650px;
  /* position: absolute; */
  /* transform: scale(1); */
  /* transform-origin: 0; */
  /* width: 6000px; */
  /* height: 500px; */
  /* width: 100%; */
  /* height: 100%; */
  /* padding: 100px; */
  /* zoom: ; */
  /* width: 1000px; */
  /* height: 1000px; */
  /* 
  height: 100vh; */
}
</style>