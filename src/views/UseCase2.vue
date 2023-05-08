<template>
  <transition name="loading">
      <Loader v-if="loading"/>
  </transition>
  <Navbar 
    :text_color_normal ="'black'" 
    :text_color_scrolled="'black'" 
    :background_color="'white'" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'black'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
    @loading="on_load"
  /> 
  <PlatformFrontPage 
    title ="Caso de uso 2: Diabetes"
    image="/images/use-case/use-case-2.png"
    index="6"
    color ="use-case-primary-color"
    dark_color ="use-case-primary-dark-color"
    image_width = "300"
    :title_size="section_title_size"
    text_color="white"
    circle_color="use-case-primary-dark-color"
    @loading="on_load"
  >
  <template v-slot:footer>
          <!-- <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span> -->
          <div :style="{'z-index':'100'}" class="mb--md front-page__buttons flex-wrap">
            <Button text="Datos provenientes de las bases NHANES y ENSANUT" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="Algoritmos de aprendizaje automático SVM, KNN y perceptrón multicapa" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="Calculadoras de riesgo cardiovascular" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
            <Button text="Calculadoras de riesgo de Diabetes Mellitus" color="white" text_color="black" :dark_color="dark_color" btn_width="200" />
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
  <SimpleSection title="Estudio basado en aprendizaje automático para la clasificación de subtipos de diabetes mellitus tipo 2" subtitle="">
    <template v-slot:body>
      <div class="flex flex-direction--column align-items--center">
        <img @load="on_load" class="mb--md" src="/images/use-case/fig1.png" alt="USE_CASE" width="350">
        <p :class="{'w-60':!is_mobile,'w-100':is_mobile}">
          La diabetes mellitus tipo 2 (DMT2) es una enfermedad crónica que representa el mayor número 1 de casos de diabetes y supone una carga preocupante para los sistemas sanitarios.
          Recientemente, un análisis basado en datos 2 que exploraba la heterogeneidad de la diabetes halló cinco subtipos que se asociaban a riesgos de desarrollar 3 patologías relacionadas y respuestas al tratamiento.
        </p>
      </div>
    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  <SimpleSection title="" subtitle="">
    <template v-slot:body>
      <div class="flex flex-direction--column align-items--center">
        <img @load="on_load" class="mb--md" src="/images/use-case/methodology-1.png" alt="USE_CASE" width="550">
        <ul :class="{'w-60':!is_mobile,'w-100':is_mobile}">
          <li><b>La depuración de datos</b> consistió en sustituir algunos valores no válidos por ceros para representar los valores ausentes.</li>
          <li><b>Proceso de imputación</b> para asignar valores a los datos que faltan y a las variables necesarias en registros que, de otro modo, se descartarían. Cuando se manejan datos, es muy probable que falten algunos valores por muchas circunstancias, como que los participantes en la encuesta no hayan respondido a las preguntas, por lo que sus respuestas no se han podido incluir en el conjunto de datos, o que no se hayan podido analizar las muestras de laboratorio.</li>
          <li>
            <b>Procedimiento de imputación</b>
             de características multivariantes, que infiere valores ausentes basándose en valores disponibles en otros atributos.
          </li>
          <li>Para mantener sólo los registros que cumplían los criterios de selección: a) ser un paciente diagnosticado, o b) tener Glucosa2 >= 200 (mg/dL), o c) tener HbA_1C >= 6,5 (%). En cada atributo se eliminaron los valores extremos, es decir, los valores que se apartaban más de cinco desviaciones estándar de su media.</li>
          <!-- La diabetes mellitus tipo 2 (DMT2) es una enfermedad crónica que representa el mayor número 1 de casos de diabetes y supone una carga preocupante para los sistemas sanitarios. -->
          <!-- Recientemente, un análisis basado en datos 2 que exploraba la heterogeneidad de la diabetes halló cinco subtipos que se asociaban a riesgos de desarrollar 3 patologías relacionadas y respuestas al tratamiento. -->
        </ul>
      </div>
    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  
  <SimpleSection title="Resultados de la clasificación" subtitle="">
    <template v-slot:body>
      <div class="flex justify-content--center align-items--center flex-direction--column">
        <p class="text-aling--justify mb--md">Resultados de clasificación por clase para los distintos esquemas y algoritmos. Modelos entrenados con validación bootstrap en el conjunto de datos LD1 . Clase 0: MARD, Clase 1: MORD, Clase 2: SIDD, Clase 3: SIRD.</p>
        <img @load="on_load" class="mb--md" src="/images/use-case/nelson_pelon_table.png" width="500" alt="">
        <p class="mb--lg">
          Proporción de observaciones de clases de T2DM. (A) Nuestro esquema de voto mayoritario con modelos entrenados con el conjunto de datos LD1. (B) Clasificación del conjunto de datos de prueba utilizando el modelo HOMA2 basado en insulina desarrollado por [1]. (C) Resultados de clustering reportados en [2] con su conjunto de datos ANDIS.
        </p>
        <img @load="on_load" src="/images/use-case/use-case_2/Testset_PieCharts-1.png" width="500" alt="piechart">
      </div>
    </template>
  </SimpleSection>
  
  <Separator type="use-case"/>

  <SimpleSection title="Referencias" subtitle="">
    <template v-slot:body>
      <div class="flex justify-content--center align-items--center flex-direction--column">
        <ul class="references">
          <li class="reference__item mb--sm">1. Bello-Chavolla OY, Bahena-López JP, Vargas-Vázquez A Group of Study CAIPaDi, et alClinical characterization of data-driven diabetes subgroups in Mexicans using a reproducible machine learning approachBMJ Open Diabetes Research and Care 2020;8:e001550. doi: <a class="reference__link" href="10.1136/bmjdrc-2020-001550">10.1136/bmjdrc-2020-001550</a></li>
          <li class="reference__item">2. Ahlqvist E, Storm P, Käräjämäki A, Martinell M, Dorkhan M, Carlsson A, Vikman P, Prasad RB, Aly DM, Almgren P, Wessman Y, Shaat N, Spégel P, Mulder H, Lindholm E, Melander O, Hansson O, Malmqvist U, Lernmark Å, Lahti K, Forsén T, Tuomi T, Rosengren AH, Groop L. Novel subgroups of adult-onset diabetes and their association with outcomes: a data-driven cluster analysis of six variables. Lancet Diabetes Endocrinol. 2018 May;6(5):361-369. doi: <a class="reference__link" href="10.1016/S2213-8587(18)30051-2">10.1016/S2213-8587(18)30051-2</a> . Epub 2018 Mar 5. PMID: 29503172.</li>
        </ul>
        <!-- <p class="mb--lg">
          Proporción de observaciones de clases de T2DM. (A) Nuestro esquema de voto mayoritario con modelos entrenados con el conjunto de datos LD1. (B) Clasificación del conjunto de datos de prueba utilizando el modelo HOMA2 basado en insulina desarrollado por [1]. (C) Resultados de clustering reportados en [2] con su conjunto de datos ANDIS.
        </p> -->
        <!-- <img src="/images/use-case/use-case_2/Testset_PieCharts-1.png" width="500" alt="piechart"> -->
      </div>
    </template>
  </SimpleSection>
  <Separator type="use-case"/>
  <Footer @loading="on_load"/>
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
      on_load(){
        this.loaded_components+=1;
        // console.log("LOAD_COMPONENT",this.loaded_components)
        if(this.loaded_components==7){
          this.loading=false
        }
      }
    },
    // mounted(){
    //     this.$nextTick(()=>{
    //         this.loading=false;
    //     })
    // },
    computed:{
      is_mobile(){
        return this.breakpoints.mobile.matches || this.breakpoints.table.matches
      },
      section_text_size(){
        return this.is_mobile ? 'xl' : 'sm'
      },
      section_title_size(){
        return this.is_mobile ? 'lg':'md'
      },
      carousel_width(){
        return this.is_mobile ? '350px':'500px'
      }
    },
  data() {
      return {
        loaded_components:0,
        autoplay:'5000',
        loading:true,
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
.reference__link{
  color: rgb(57, 168, 247);
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>