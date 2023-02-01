<template>
  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Servicio de acceso a servicios de e-salud y/o sistemas de analítica"
    image="/images/chimalli/chimalli.png"
    index="2"
    color ="chimalli-primary-color"
    dark_color ="chimalli-primary-dark-color"
    image_width = "500"
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

    <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div>
                <h2 class="text-size--lg mb--md">{{ sections.section_0.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.section_0.text }}</p> 
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

    <Section  :title="sections.section_1.title" :color="color">
      <div class="pa--xl">
        <p class="mb--xl text-size--md text-align--justify">{{ sections.section_1.text }}</p>
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_1.images[0].src)" :alt="sections.section_1.alt"  :width="sections.section_1.images[0].width">
        </div>
      </div>
    </Section>
    <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div>
                <h2 class="text-size--lg mb--md">{{ sections.section_2.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.section_2.text }}</p> 
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

    <Section  :title="sections.section_3.title" :color="color">
      <div class="pa--xl">
        <p class="mb--xl text-size--md text-align--justify">{{ sections.section_3.text }}</p>
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_3.images[0].src)" :alt="sections.section_3.alt"  :width="sections.section_3.images[0].width">
        </div>
      </div>
    </Section>
  <Footer></Footer>
</template>

<script>

import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Section from "../components/Section.vue"
import Circle from "../components/Circle.vue"
import PortionSection from "../components/PortionSection.vue"
import PlatformFrontPage from "../components/PlatformFrontPage.vue"

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Navbar from "../components/Navbar.vue"
export default {
  components:{ Footer, Card, Section, Circle, PortionSection, PlatformFrontPage, Carousel, Slide, Pagination, Navigation, Navbar },

  data() {
        return {
            sections:{
              section_0:{
                title:"Servicio para el acceso seguro y confiable a datos sensibles",
                text:"Chimalli se encuentra compuesto por un conjunto de servicios para el acceso, manejo, preparación, transporte, y recuperación de datos médicos. Estos servicios permiten a las instituciones de salud, profesionales de la salud, pacientes y/o comunidad científica acceder a los datos de forma segura a través de servicios de e-salud y/o sistemas de analítica para obtener información útil que ayude a mejorar la toma de decisiones en escenarios de salud.",
                images:[
                  {
                    src:"/images/chimalli/section_0_0.png",
                    alt:"CHIMALLI_0",
                    width:"400"
                  },
                  {
                    src:"/images/chimalli/section_0_1.png",
                    alt:"CHIMALLI_1",
                    width:"400"
                  }
                ]
                
              },

              section_1:{
                title:"Servicio para el acceso seguro y confiable a datos sensibles",
                text:"Chimalli se encuentra compuesto por un conjunto de servicios para el acceso, manejo, preparación, transporte, y recuperación de datos médicos. Estos servicios permiten a las instituciones de salud, profesionales de la salud, pacientes y/o comunidad científica acceder a los datos de forma segura a través de servicios de e-salud y/o sistemas de analítica para obtener información útil que ayude a mejorar la toma de decisiones en escenarios de salud.",
                images:[
                  {
                    src:"/images/chimalli/section_1_0.png",
                    alt:"CHIMALLI_0",
                    width:"1200"
                  }
                ]
                
              },

              section_2:{
                title:"Las principales características que provee Muyal-Chimalli a los datos",
                text:"Confiabilidad y disponibilidad: garantiza el acceso a los datos, así como a los sistemas de e-salud y analítica en escenarios de fallas de servidores y almacenamiento de datos, así como apagones en los centros de datos. Muyal-Chimalli permite configurar los servicios de confiabilidad y disponibilidad de acuerdo con los recursos disponibles en la organización.",
                images:[
                  {
                    src:"/images/chimalli/section_2_0.png",
                    alt:"CHIMALLI_0",
                    width:"400"
                  },
                  {
                    src:"/images/chimalli/section_2_1.png",
                    alt:"CHIMALLI_0",
                    width:"400"
                  }
                ]
                
              },

              section_3:{
                title:"Servicios de preparación y recuperación de datos médicos configurables",
                text:"Es un servicio que permite a las instituciones de salud, profesionales de la salud, pacientes y/o comunidad científica acceder de forma segura a datos sensibles a través de servicios de e-salud y/o sistemas de analítica. Para este fin, Muyal-Chimalli cuenta con esquemas que permiten la preparación y recuperación de los datos, así como mecanismos de control de acceso. En escenarios reales de gestión de datos sensibles, es necesario contar con mecanismos que provean requisitos no funcionales (un requisito que especifica los criterios que se pueden utilizar para juzgar el funcionamiento de un sistema, en lugar de comportamientos específicos), tales como seguridad, eficiencia y confiablidad. Estos requisitos son necesarios debido a las normas de gestión de datos sensibles (por ejemplo, las normas oficiales mexicanas NOM-024-SSA3-2010 y NOM-004-SSA3-2012), y a las leyes impuestas por los gobiernos y organizaciones.",
                images:[
                  {
                    src:"/images/chimalli/section_3_0.png",
                    alt:"CHIMALLI_0",
                    width:"1000"
                  },
                ]
                
              }
            },
            color : "chimalli-primary-color",
            dark_color:"chimalli-primary-dark-color"
        };
  },
  // data(){
  //   return {
  //   }
  // }
}
</script>

<style >
/* p {
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
  background-color: var(--chimalli-primary-color-dark);
  height: 5px;
  width: 100%;
}

.header {
  background-color: #397DFF;
  height: 40px;
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
} */

.icon {
  height: 100px;
  width: 100px;
}

button {
  background-color: var(--chimalli-primary-color-dark);
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

.circle {
  background-color: #356FE1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-self: center;
  padding: auto;
}

.circle h2 {
  color: white;
  text-align: center;
}

.carousel__slide {
  padding: 10px;
  /* width: 300px !important; */
  /* background: red; */
}
.carousel__viewport{
  width: 500px;
  /* height: 600px; */
}
</style>
