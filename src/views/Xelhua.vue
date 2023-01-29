<template>
    <!-- title ="Servicio de analítica/estadística de datos" -->
  <PlatformFrontPage 
    title ="Sistema agnóstico en la nube para la construcción de soluciones de big data basada en el diseño de servicios de ciencia de datos de alta disponibilidad y tolerante a fallos"
    image="xelhua.png"
    index="4"
    color ="xelhua-primary-color"
    dark_color ="xelhua-primary-dark-color"
    title_size ="text-size--lg"
    
  />

    <PortionSection part1_width ="40" part2_width="60">
        <template v-slot:part1>
            <div>
                <h2 class="text-size--lg mb--md">{{ sections.resume.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.resume.text }}</p> 
            </div>
        </template>
        <template v-slot:part2>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
                <Slide key ="1"> 
                  <!-- <div class="bg--black"> -->
                    <img src="@/assets/nez_assets/bloques.png" alt="NEZ_1" width="400">
                  <!-- </div> -->
                </Slide>
                <Slide key ="2"> 
                  <!-- <div class="bg--black"> -->
                    <img src="@/assets/nez_assets/build.png" alt="NEZ_2" width="400">
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
  <!-- <div class="section-title bg--xelhua-primary-color">
    <img src="../assets/xelhua.png" alt="NEZ_LOGO">
    <h2>
    </h2>
    <span>Entregable 4</span>
    <div class="resaltar">
      <p>Obtenido</p>
    </div>
    <div class="row">
      <button>Poster cualitativo</button>
      <button>Poster cuantitativo</button>
      <button>Software</button>
      <button>Infografia tecnica</button>
      <button>Infografia general</button>
    </div>
  </div>
  <div class="separador"></div>
  <Section title="Gestión y creación autómatica de cripto-contenedores para mantener seguros tus datos" :color="color">
    <div class="pa--md">
      
    </div>
  </Section>
  <Section title="Servicio de analítica/estadística de datos para acceder automáticamente a datos publicados por instituciones de salud y/o por investigadores autorizados." :color="color">
    <div class="pa--md">
      <p>Estos servicios permitirán a las instituciones de salud anonimizar, minar y preparar los datos disponibles en las bases de datos de la plataforma. </p>
      <img src="../assets/xelhua_assets/manager_worker.gif" class="image">
    </div>
  </Section>
  <Section title="Software y productos" :color="color">
    <div class="pa--md">
      <div class="row">
        <div class="column">
          <h3> </h3>
          <Circle title="1" :color="color" />
          <Card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></Card>
          <Card :color="color" title="Producto 2 - P2" content="mundo"></Card>
        </div>
        <div class="column">
          <h3> </h3>
          <Circle title="2" :color="color" />
          <Card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></Card>
          <Card :color="color" title="Producto 2 - P2" content="mundo"></Card>
        </div>
      </div>
     </div>
  </Section> -->
  <Footer></Footer>
</template>

<script>

import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Section from "../components/Section.vue"
import Circle from "../components/Circle.vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
export default {
  components:{Footer,Card,Section,Circle,Carousel, Slide, Pagination, Navigation ,PlatformFrontPage},
  data() {
      return {
            sections:{
              resume:{
                title:"Servicio de analítica/estadística de datos para acceder automáticamente a datos publicados por instituciones de salud y/o por investigadores autorizados",
                text:"Xelhua es una plataforma para la construcción de sistemas de ciencia de datos estructurados bajo demanda, sin amplios conocimientos en programación y orientada al diseño. Permite utilizar aplicativos para la preparación de datos, análisis y visualización de datos, acoplarlos unos con otros y crear flujos de trabajo personalizados. Los datos se procesan por cada una de las aplicaciones (encapsuladas en microservicios) que el usuario selecciona, generando nuevos productos derivados, cómo lo pueden ser datos transformados, gráficas, mapas, estadísticos, o cualquier producto accionable que permita realizar observaciones sobre los datos, o bien, permita tomar una decisión."
                // text: "Es un servicio de construcción de sistemas e-salud para el procesamiento de datos no-estructurados de forma inter e intra institucional.",
                
              }
            },
        color : "bg--xelhua-primary-color"
      };
  },

  // data(){
  //   return {
  //   }
  // }
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
  background-color: var(--xelhua-primary-color-dark);
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
  background-color: var(--xelhua-primary-color-dark);
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
.carousel__viewport{
  width: 500px;
  /* height: 600px; */
}

</style>
