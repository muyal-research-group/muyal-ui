<template>
  <Navbar 
    :text_color_normal ="'white'" 
    :text_color_scrolled="'black'" 
    :background_color="color" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'white'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
  /> 
  <PlatformFrontPage 
    title ="Bases de datos producidad por sistemas de e-Salud"
    image="/images/alwa/alwa.png"
    index="5"
    color ="alwa-primary-color"
    dark_color ="alwa-primary-dark-color"
    image_width = "500"
    :title_size = "section_title_size"
    circle_color="alwa-primary-dark-color"
    text_color="white"
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
                  :class = "'mb--md text-size--'+section_title_size"
                >{{ sections.section_0.title }}</h1>
                <p 
                  :class="'text-align--justify text-size--'+section_text_size"
                >{{ sections.section_0.text }}</p> 
            </div>
        </template>
        <template v-slot:part2>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start" :style="{'width':carousel_width}">
                <Slide v-for="(image,index) in sections.section_0.images" :key ="index"> 
                    <img :src="image.src" :alt="image.alt" :width="image.width">
                </Slide>
                <template #addons>
                  <Navigation/>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
    </PortionSection>

    <Section  :title="sections.section_1.title" :color="color" :title_size="section_title_size">
      <div class="pa--xl">
        <p 
          :class="'mb--xl text-align--justify text-size--'+section_text_size"
        >{{ sections.section_1.text }}</p>
        <div class="flex justify-content--center">
          <img :src="sections.section_1.images[0].src" :alt="sections.section_1.alt"  :width="sections.section_1.images[0].width">
        </div>
      </div>
    </Section> -->
  <Footer/>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import useBreakpoints from "vue-next-breakpoints";
export default {
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
            autoplay:"5000",
            sections:{
              section_0:{
                title:"La investigacion y la gestion de datos",
                text:"La gestión de datos de investigación es el proceso activo de manejo de datos generados en una investigación. Esta gestión se realiza en forma continua y cubre todas las decisiones relacionadas con la gestión de datos a largo de su ciclo de vida, comenzando con la etapa de planificación de la investigación y abarcando su ejecución, la diseminación de los resultados y la preservación de los conjuntos de datos de forma que estos datos sea auténticos, precisos, completos y fiables, y se mantengan accesibles y reutilizables a lo largo del tiempo.",
                images:[
                  {
                    src:"/images/alwa/section_0_0.png",
                    alt:"ALWA_0",
                    width:"400"
                  },
                  {
                    src:"/images/alwa/section_0_1.png",
                    alt:"ALWA_1",
                    width:"400"
                  }
                ]
                
              },
              section_1:{
                title:"La investigacion y la gestion de datos",
                text:"La gestión de datos de investigación es el proceso activo de manejo de datos generados en una investigación. Esta gestión se realiza en forma continua y cubre todas las decisiones relacionadas con la gestión de datos a largo de su ciclo de vida, comenzando con la etapa de planificación de la investigación y abarcando su ejecución, la diseminación de los resultados y la preservación de los conjuntos de datos de forma que estos datos sea auténticos, precisos, completos y fiables, y se mantengan accesibles y reutilizables a lo largo del tiempo.",
                images:[
                  {
                    src:"/images/alwa/section_0_0.png",
                    alt:"ALWA_0",
                    width:"400"
                  },
                  {
                    src:"/images/alwa/section_0_1.png",
                    alt:"ALWA_1",
                    width:"400"
                  }
                ]
                
              },

            },
            color : "alwa-primary-color",
            dark_color : "alwa-primary-dark-color"
      };
    },
  components: {Footer,Card,PlatformFrontPage,Carousel, Slide, Pagination, Navigation , Navbar},
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
  background-color: var(--alwa-primary-color-dark);
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
  background-color: var(--alwa-primary-color-dark);
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

</style>
