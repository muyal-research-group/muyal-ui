<template>
  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Caso de uso: Flujo para detección asistida para cáncer de huesos largos"
    image="/images/use-case/use-case.png"
    index="6"
    color ="use-case-primary-color"
    dark_color ="use-case-primary-dark-color"
    image_width = "500"
    :title_size="section_title_size"
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
    <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div>
                <h1 
                  :class = "'mb--md text-size--'+section_title_size"
                >{{ sections.section_0.title }}</h1>
                <p 
                  :class="'text-align--justify text-size--'+section_text_size"
                >{{ sections.section_0.text }}</p> 
            </div>
        </template>
        <template v-slot:part2>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
                <Slide v-for="(image,index) in sections.section_0.images" :key ="index"> 
                  <!-- <div class="bg--black"> -->
                    <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
                  <!-- </div> -->
                </Slide>
                <template #addons>
                  <Navigation/>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
    </PortionSection>

    <Section  :title="sections.section_1.title" :color="color" :title_size ="section_title_size">
      <div class="pa--xl">
        <p 
          :class="'text-align--justify text-size--'+section_text_size"
        >
          {{ sections.section_1.text }}</p>
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_1.images[0].src)" :alt="sections.section_1.alt"  :width="sections.section_1.images[0].width">
        </div>
      </div>
    </Section>
    
    <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div>
                <h1 
                  :class = "'mb--md text-size--'+section_title_size"
                >{{ sections.section_2.title }}</h1>
                <p 
                  :class="'text-align--justify text-size--'+section_text_size">
                  {{ sections.section_2.text }}</p> 
            </div>
        </template>
        <template v-slot:part2>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
                <Slide v-for="(image,index) in sections.section_2.images" :key ="index"> 
                  <!-- <div class="bg--black"> -->
                    <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
                  <!-- </div> -->
                </Slide>
                <template #addons>
                  <Navigation/>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
    </PortionSection>

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
export default {
  components: {Footer,Card,PlatformFrontPage,
    Carousel, Slide, Pagination, Navigation , Navbar,Button,
  },
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
            text:"Es  importante  destacar  que  el  tipo  de  aprendizaje  necesario  entrenar  un  modelo depende de la aplicación que se requiera. Por ejemplo, el aprendizaje no supervisado en imágenes médicas se suele utilizar para segmentar imágenes en los elementos que la componen, pero no se identifica cada elemento en la imagen, tiene como ventaja que  no se  requiere de  un  etiquetado  manual  previo,  ya  que  no se  especifica  a  qué clase pertenece cada segmento.",
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
.carousel__viewport{
  width: 500px;
} 
</style>