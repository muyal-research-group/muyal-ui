<template>

  <PlatformFrontPage 
    title ="Bases de datos producidad por sistemas de e-Salud"
    image="alwa.png"
    index="5"
    color ="alwa-primary-color"
    dark_color ="alwa-primary-dark-color"
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
  <!-- <div class="section-title bg--alwa-primary-color">
    <img src="../assets/alwa.png" alt="ALWA_LOGO">
    <h2>Servicio de analítica/estadística de datos</h2>
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

  <Section title="caso de uso" :color="color">
    <div class="pa--md">
    </div>

  </Section>
  
  <Section title="tittle" :color="color">
    <div class="pa--md">
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
      <div class="column">
        <h3> </h3>
        <Circle title="3" :color="color" />
        <Card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></Card>
        <Card :color="color" title="Producto 2 - P2" content="mundo"></Card>
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
  components: {Footer,Card,PlatformFrontPage,
    Carousel, Slide, Pagination, Navigation 
  },
  data() {
      return {
            sections:{
              resume:{
                title:"Crea sistemas de e-Salud en minutos para el manejo de datos y contenidos médicos",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed repellat mollitia illum dolorum in corrupti ipsum voluptate possimus veniam, ut, voluptatem minima iste quo pariatur, est molestias quidem fugit ea molestiae amet suscipit? Obcaecati libero, non, vero, corporis tempore quidem sint consequuntur nesciunt quas aliquam aliquid molestias et distinctio! Quidem quaerat sint doloremque itaque quisquam mollitia aut perferendis iusto?"
                // text: "Es un servicio de construcción de sistemas e-salud para el procesamiento de datos no-estructurados de forma inter e intra institucional.",
                
              }
            },
          // color :"bg--painal-primary-color"
        color : "bg--alwa-primary-color"
        // color : "bg--chimalli-primary-color"
      };
  },
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
.carousel__viewport{
  width: 500px;
  /* height: 600px; */
}

</style>
