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
    title ="Caso de uso: Mortalidad por enfermedades"
    image="/images/use-case/death.png"
    index="6"
    color ="use-case-primary-color"
    dark_color ="use-case-primary-dark-color"
    image_width = "300"
    :title_size="section_title_size"
    text_color="white"
    circle_color="use-case-primary-dark-color"
  >
  <template v-slot:footer>
          <div class="mb--md front-page__buttons flex-wrap">
            <Button text="Enfermedades categorizadas por el CIE-10" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="Temporal 2000 al 2020" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="Conteo del territorio mexicano por cada enfermedad" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="Fuente de datos de DIRECCIÓN GENERAL DE INFORMACIÓN EN SALUD" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
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

  <SimpleSection title ="Tasas de mortalidad (100k hab.) de cáncer hígado (C22)" subtitle="Para habitantes de 0 a 65+ años">
    <template v-slot:body>
        <p class="text-align--justify">Sistema de procesamiento de grandes volúmenes de datos (ciencia de datos y big data) basado en algoritmos exploratorios para la creación de productos de información para soportar un servicio de búsqueda y recuperación de información geoespacial-temporal sobre mortalidad por causas de enfermedad. Este sistema produjo más de 21 mil productos incluyendo mapas geoespaciales, histogramas y regresiones logísticas de tasas ajustadas de mortalidad por un temporal de 20 años para cada tipo de enfermedad para los sexos registrados y para cada rango de edad, de tal suerte que los ciudadanos y la comunidad pueden consultar el impacto de cada enfermedad para su sexo, rango de edad y estado de residencia. Este sistema será utilizado por tres proyectos para la consulta de información y será transferido a la secretaría de salud del gobierno de Veracruz.</p>
          <div :class="{
            'wrap':true,
            'g3x2':!is_mobile,
            'g6x1':is_mobile
            }">
            

            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
              <iframe  @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/Cancer_c22/mapa_cancer_c22_2000_2020_0-4.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
              <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}"  frameborder="no" scrolling="no" src="/html/Cancer_c22/mapa_cancer_c22_2000_2020_5-14.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/Cancer_c22/mapa_cancer_c22_2000_2020_15-24.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/Cancer_c22/mapa_cancer_c22_2000_2020_25-44.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/Cancer_c22/mapa_cancer_c22_2000_2020_45-64.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/Cancer_c22/mapa_cancer_c22_2000_2020__65.html"  title=""></iframe>
            </div>
          </div>
    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  <SimpleSection title="Tasa de mortalidad (100k hab.) de cancer gástrico" subtitle="Habitantes de 0 años a 65+ años">
    <template v-slot:body> 
          <div :class="{
            'wrap':true,
            'g3x2':!is_mobile,
            'g6x1':is_mobile
            }">
            

            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
              <iframe  @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/mapa_cancer_gastrico_mortality/mapa_cancer_gastrico_2000_2020_00_04.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
              <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}"  frameborder="no" scrolling="no" src="/html/mapa_cancer_gastrico_mortality/mapa_cancer_gastrico_2000_2020_05_14.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/mapa_cancer_gastrico_mortality/mapa_cancer_gastrico_2000_2020_15_24.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/mapa_cancer_gastrico_mortality/mapa_cancer_gastrico_2000_2020_25_44.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/mapa_cancer_gastrico_mortality/mapa_cancer_gastrico_2000_2020_45_64.html"  title=""></iframe>
            </div>
            <div :class="{'iframe-wrapper':true,'load':!show_map}">
              <span class="loading-text" v-if="!show_map">Cargando...</span>
            <iframe @load="on_load"  :class="{'iframe':true,'show':show_map,'load':!show_map}" frameborder="no" scrolling="no" src="/html/mapa_cancer_gastrico_mortality/mapa_cancer_gastrico_2000_2020__65.html"  title=""></iframe>
            </div>
            <!-- <iframe class="iframe" frameborder="no" scrolling="no" src="/html/mapa_cancer_gastrico_mortality/mapa_cancer_gastrico_2000_2020_general.html"  title=""></iframe> -->
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
    methods:{
      on_load(e){
        console.log("FULL_LOAD ",e)
        // setTimeout(()=>{
        this.show_map =true;
        // },10000)
      }
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
        dark_color : "use-case-primary-dark-color",
        show_map:false
      };
  },
}
</script>

<style scoped> 
.loading-text{
  --top:55%; 
  --left:45%;
  top:var(--top);
  left:var(--left);
  transform: translateX( - var(--left)) translateY(- var(--top));
  position: absolute;
  color: black;
  font-size: 16px;
  z-index: 20;
}
.g3x2{
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2,1fr);
}
.g6x1{
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6,1fr);
}
.wrap{
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  overflow: hidden;
  
}
@keyframes load {
  0%{
    transform: scale(1);
  }
  25%{
    transform: scale(.7);
  }
  50%{
    transform: scale(1);
    background: rgba(0, 0, 0, 0.6);
  }
  75%{
    transform: scale(.5);
    /* background: rgba(0, 0, 0, 0.75); */
  }
  85%{
    transform: scale(1.1);
  }
  95%{
    transform: scale(1);
    /* background: rgba(0, 0, 0, 0.95); */
  }
  100%{
    transform: scale(0.9);
    background: rgba(0, 0, 0, .1);
    /* background: rgba(0, 0, 0, 1); */
  }
}
.iframe.show{
  height: 500px;
  width: 100%;
}
.iframe.load{
  position: relative;
  /* height: 10px; */
  /* width: 10px; */
  /* background: red; */
  height: 500px;
  width: 100%;
  /* animation: load 5s ease; */
}
.iframe-wrapper.load{
  position: relative;
}
.iframe-wrapper.load:before{
  content: '';
  display: block;
  /* justify-content: center; */
  /* align-items: center; */
  position: relative;
  left:50%;
  top: 60%;
  transform: translate(-50%,-60%);
  border: 2px dashed rgba(0, 0, 0, 0.2);
  background: white;
  height: 100%;
  width: 100%;
  z-index: 10;
  /* animation: load 1s ease infinite; */
}
.iframe-wrapper.load:after{
  content: '';
  display: block;
  position: absolute;
  left:50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: black;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  z-index: 10;
  animation: load 800ms ease infinite;
}

.iframe{
  display: block;
  transition: all ease 300ms;
  /* width: 800px; */
  /* overflow: hidden; */
  /* position: absolute; */
  /* transform: scale(.8); */
  /* transform-origin: 0; */
  /* width: 6000px; */
  /* height: 500px; */
  /* width: 100%; */
  /* height: 100%; */
  /* padding: 100px; */
  /* zoom: 3; */
  /* width: 1000px; */
  /* height: 1000px; */
  /* 
  height: 100vh; */
}
</style>