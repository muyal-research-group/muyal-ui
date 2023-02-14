<template>
  
  <Navbar 
    :text_color_normal ="'white'" 
    :text_color_scrolled="'black'" 
    :background_color="'painal-primary-color'" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'white'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
  /> 
  <PlatformFrontPage 
    title ="Servicio para el transporte y almacenamiento de datos médicos"
    image="/images/painal/painal.png"
    index="3"
    color ="painal-primary-color"
    dark_color ="painal-primary-dark-color"
    image_width = "500"
    :title_size = "section_title_size"
    text_color="white"
    circle_color="painal-primary-dark-color"
  >
  <template v-slot:footer>
          <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span>
          <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
            Obtenido
          </div>
          <div class="mb--md front-page__buttons flex-wrap">
            <Button title="Poster cualitativo" :color="color" :dark_color="dark_color" />
            <Button title="Poster cuantitativo" :color="color" :dark_color="dark_color" />
            <Button title="Software" :color="color" :dark_color="dark_color" />
            <Button title="Infografia tecnica" :color="color" :dark_color="dark_color" />
            <Button title="Infografia general" :color="color" :dark_color="dark_color" />
          </div>
  </template>
</PlatformFrontPage>

    <!-- <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div>
                <h1 
                  :class="'mb--md text-size--'+section_title_size"
                >{{ sections.section_0.title }}</h1>
                <p 
                :class="'text-align--justify  text-size--'+section_text_size"
                >{{ sections.section_0.text }}</p> 
            </div>
        </template>
        <template v-slot:part2>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="true" snapAlign="start" :autoplay="autoplay" :style="{'width':carousel_width}">
                <Slide v-for="(image,index) in sections.section_0.images" :key ="index"> 
                    <img :src="image.src" :alt="image.alt" :width="image.width">
                </Slide>
                <template #addons>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
    </PortionSection>

    <Section  :title="sections.section_1.title" :color="color" :title_size = "section_title_size">
      <div class="pa--xl">
        <p 
          :class="'mb--xl text-align--justify text-size--'+section_text_size"
        >{{ sections.section_1.text }}</p>
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_1.images[0].src)" :alt="sections.section_1.alt"  :width="sections.section_1.images[0].width">
        </div>
      </div>
    </Section>

    <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div>
                <h1 
                  :class="'mb--md text-size--'+section_title_size"
                >{{ sections.section_2.title }}</h1>
                <p 
                :class="'text-align--justify  text-size--'+section_text_size"
                >{{ sections.section_2.text }}</p> 
            </div>
        </template>
        <template v-slot:part2>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="true" snapAlign="start" :autoplay="autoplay" :style="{'width':carousel_width}">
                <Slide v-for="(image,index) in sections.section_2.images" :key ="index"> 
                    <img :src="image.src" :alt="image.alt" :width="image.width">
                </Slide>
                <template #addons>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
    </PortionSection> -->
  <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Section from "../components/Section.vue"
import Circle from "../components/Circle.vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import useBreakpoints from "vue-next-breakpoints";
export default {
  components:{Footer,Card,Section,Circle,PlatformFrontPage,
  Carousel, Slide, Pagination, Navigation ,Navbar
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
  data() {
      return {
            autoplay:"5000",
            sections:{
              section_0:{
                title:"Servicio para el almacenamiento de datos médicos",
                text:"Painal es un conjunto de servicios y sistemas desarrollados para que las organizaciones de salud y la comunidad científica puedan: i) almacenar, distribuir y localizar sistemas o servicios de procesamiento a través de catálogos de servicios, ii) generar soluciones que permitan brindar usabilidad costo-beneficio del almacenamiento y transporte de datos y, iii) almacenar, publicar y transmitir repositorios de datos de manera local (intrainstitucional) y federada (interinstitucional) utilizando un modelo de publicación/suscripción.",
                images:[
                  {
                    src:"/images/painal/section_0_0.png",
                    alt:"PAINAL_0",
                    width:"400"
                  },
                  {
                    src:"/images/painal/section_0_1.png",
                    alt:"PAINAL_0",
                    width:"400"
                  }
                ]
              },
              section_1:{
                title:"Servicio para el manejo, carga y descarga de servicios desde un catálogo/repositorio de servicios",
                text:"Un sistema de distribución de contenidos federado (FCDS, por sus siglas en inglés) desarrollado para Painal y empleado para crear servicios de sincronización de datos médicos que son tecnológicamente agnósticos de la infraestructura, lo cual permite a las organizaciones desplegar sus servicios en cualquier nube privada, pública o híbrida.",
                images:[
                  {
                    src:"/images/painal/section_1_0.png",
                    alt:"PAINAL_0",
                    width:"1000"
                  },
                ]
              },
              section_2:{
                title:"Sistema federado para la distribución de contenidos y administración de requerimientos no funcionales.",
                text:"Se presentan la arquitectura y los principales componentes del sistema, así como los esquemas basados en patrones paralelos en contenedores para preparar/recuperar los datos cuando se cargan/descargan a través del FCDS de Painal. Estos esquemas gestionan los requisitos no funcionales requeridos por las organizaciones para cumplir con las regulaciones impuestas por las organizaciones y los gobiernos.",
                images:[
                  {
                    src:"/images/painal/section_2_1.png",
                    alt:"PAINAL_0",
                    width:"400"
                  },
                  {
                    src:"/images/painal/section_2_0.png",
                    alt:"PAINAL_0",
                    width:"400"
                  },
                ]
              }
            },
          color :"painal-primary-color",
          dark_color :"painal-primary-dark-color"
        // color : "bg--chimalli-primary-color"
      };
  },
  computed: {
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
  }
}
</script>

<style >
p {
  text-align: center;
}

.image {
  width: 60%;
  height: 60%;
  align-self: center;
  margin: 10px;
}

.section-title {
  display: flex;
  height: 100vh;
  align-content: center;
  flex-direction: column;
  column-gap: 20px;
}

.row {
  display: flex;
  align-content: center;
  align-self: center;
  justify-content: space-around;
  column-gap: 20px;
}

.column {
  display: flex;
  align-content: center;
  flex-direction: column;
}

.separador {
  background-color: var(--painal-primary-color-dark);
  height: 5px;
  width: 100%;
}

.section-title img {
  align-self: center;
  height: 50%;
  width: 45%;
}

.section-title h2 {
  color: white;
  text-align: center;
  margin: 20px;
}

.section-title span {
  text-align: center;
  color: white;
}

.icon {
  height: 100px;
  width: 100px;
}

button {
  background-color: var(--painal-primary-color-dark);
  color: white;
  width: auto;
  height: 2rem;
  border-radius: 20px;
  margin: 20px;
  border: none;
}

button:hover {
  background-color: #8fafee;
}

.resaltar {
  align-self: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  width: 200px;
  height: 30px;
}

.resaltar-blue {
  align-self: center;
  background-color: #356FE1;
  border-radius: 10px;
  margin-top: 20px;
  width: 200px;
  height: 50px;
}

.container-gray {
  align-self: center;
  background-color: rgb(226, 223, 223);
  border-radius: 10px;
  margin-top: 20px;
  width: 200px;
  height: 30px;
}

.resaltar p {
  text-align: center;
  color: #397DFF;
  font-style: normal;
}

.resaltar-blue p {
  margin-top: 10px;
  text-align: center;
  color: white;
  font-style: normal;
}

.carousel__slide {
  padding: 10px;
  /* width: 300px !important; */
  /* background: red; */
}
/* .carousel__viewport{
  width: 500px;
  min-width: 320px;
} */
</style>
