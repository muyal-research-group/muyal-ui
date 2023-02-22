<template>
  <Navbar 
    :text_color_normal ="'black'" 
    :text_color_scrolled="'black'" 
    :background_color="'white'" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'black'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
  /> 
  <PlatformFrontPage 
    title ="Caso de uso: Herramienta de apoyo para el diagnóstico de cáncer de hueso largo"
    image="/images/use-case/use-case.png"
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
          <!-- <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
            Obtenido
          </div> -->
          
          <div class="mb--md front-page__buttons flex-wrap">
            <Button text="Estudios completos de 355 pacientes" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="Modelos con 3 diferentes redes neuronales" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="The Cancer Imaging Archive" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <!-- <Button text="Dato relevante 4" color="white" text_color="black" :dark_color="dark_color" btn_width="200" /> -->
          </div> 
          <!-- 
            <Button title="Poster cuantitativo" :color="color" :dark_color="dark_color" />
            <Button title="Software" :color="color" :dark_color="dark_color" />
            <Button title="Infografia tecnica" :color="color" :dark_color="dark_color" />
            <Button title="Infografia general" :color="color" :dark_color="dark_color" />
        -->
  </template>



</PlatformFrontPage>
  <Separator type="use-case"/>
  <SimpleSection title="Servicio de detección: Video informativo" subtitle=""> 
    <template v-slot:body>
      <div class="flex justify-content--center">
        <iframe src="https://drive.google.com/file/d/19n-2p-6HQ6PLSqANAxJ5Cu0EnY8CKON8/preview" 
        :width="is_mobile ?'100%' :'1000px'" 
        :height="video_height" allow="autoplay"></iframe>
      </div>
    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  <SimpleSection title="Herramienta de apoyo para el diagnóstico de cáncer de hueso largo" subtitle="Muyal-Ilal - Casos de estudio"> 
    <template v-slot:body>
      <div class="flex justify-content--center align-items--center flex-direction--column">
        <div class="mb--md image-grid">
          <img src="/images/use-case/px1_90.png" alt="">
          <img src="/images/use-case/px1_107.png" alt="">
          <img src="/images/use-case/px2_104.png" alt="">
          <img src="/images/use-case/px3_99.png" alt="">
        </div>
      <div :class="{'w-60':!is_mobile,'w-100':is_mobile}">
        <p class="text-align--justify">
           El presente proyecto no tiene la intención de sustituir al personal capacitado, sino proporcionarle una ayuda indicando las imágenes en las que podría existir algún tumor primario en hueso largo o secundario en pulmones en caso de presentar metástasis, y la región en la que se ubica. Dado que los tumores presentan diferentes características dependiendo de la parte del cuerpo en la que se desarrollen, es necesario generar un modelo diferente para cada uno
        </p>
      </div>
      </div>

    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  <SimpleSection title="Preparación de imágenes" subtitle=""> 
    <template v-slot:body>
      <div class="flex justify-content--center align-items--center flex-direction--column">
        <div class="mb--md image-grid">
          <img src="/images/use-case/tumor-0.png" alt="">
          <img src="/images/use-case/tumor-1.png" alt="">
          <!-- <img src="/images/use-case/px2_104.png" alt=""> -->
          <!-- <img src="/images/use-case/px3_99.png" alt=""> -->
        </div>
      <div :class="{'w-60':!is_mobile,'w-100':is_mobile}">
        <p class="text-align--justify">
          Se aplican diferentes transformaciones a la imagen original (a) para obtener una imagen similar, pero con apariencia diferente (b). Además, es posible recortar la región tumoral y agregar en una imagen diferente del mismo paciente a la que se le aplican las mismas transformaciones aleatorias para obtener una nueva muestra completamente diferente
           <!-- El presente proyecto no tiene la intención de sustituir al personal capacitado, sino proporcionarle una ayuda indicando las imágenes en las que podría existir algún tumor primario en hueso largo o secundario en pulmones en caso de presentar metástasis, y la región en la que se ubica. Dado que los tumores presentan diferentes características dependiendo de la parte del cuerpo en la que se desarrollen, es necesario generar un modelo diferente para cada uno -->
        </p>
      </div>
      </div>

    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  <SimpleSection title="Entrenamiento" subtitle=""> 
    <template v-slot:body>
      <div class="flex justify-content--center align-items--center flex-direction--column">
        <!-- <div class="mb--md image-grid"> -->
          <img src="/images/use-case/tumor_2.png" alt="" width="250">
          <!-- <img src="/images/use-case/tumor-1.png" alt=""> -->
          <!-- <img src="/images/use-case/px2_104.png" alt=""> -->
          <!-- <img src="/images/use-case/px3_99.png" alt=""> -->
        <!-- </div> -->
      <div :class="{'w-60':!is_mobile,'w-100':is_mobile}">
        <p class="text-align--justify">
          El sistema presentado ha sido entrenado para identificar masas en huesos y pulmones, pero nuevos modelos pueden ser entrenados para identificar otros tipos de tumores. Por defecto se proporcionan los modelos con los hiperparámetros que mejores resultados han proporcionado. 
          <!-- Se aplican diferentes transformaciones a la imagen original (a) para obtener una imagen similar, pero con apariencia diferente (b). Además, es posible recortar la región tumoral y agregar en una imagen diferente del mismo paciente a la que se le aplican las mismas transformaciones aleatorias para obtener una nueva muestra completamente diferente -->
           <!-- El presente proyecto no tiene la intención de sustituir al personal capacitado, sino proporcionarle una ayuda indicando las imágenes en las que podría existir algún tumor primario en hueso largo o secundario en pulmones en caso de presentar metástasis, y la región en la que se ubica. Dado que los tumores presentan diferentes características dependiendo de la parte del cuerpo en la que se desarrollen, es necesario generar un modelo diferente para cada uno -->
        </p>
      </div>
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
            mobile:[240,768], // max-width: 600px
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
      video_height(){
        if (this.breakpoints.mobile.matches){
          return '150px'
        }
        else if (this.breakpoints.table.matches){
          return '400px'
        } else {
          return '500px'
        }
      },
      section_text_size(){
        return this.is_mobile ? 'xl' : 'sm'
      },
      section_title_size(){
        return this.is_mobile ? 'sm':'md'
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
.image-grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 10px;
  row-gap: 10px;
  /* height: 1000px; */
}
.image-grid img{
  width: 200px;
  border-radius: 10px;
}
</style>