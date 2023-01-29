<template>
  
  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Servicio para el transporte y almacenamiento de datos médicos"
    image="images/painal/painal.png"
    index="3"
    color ="painal-primary-color"
    dark_color ="painal-primary-dark-color"
  />

  <Footer></Footer>
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
export default {
  components:{Footer,Card,Section,Circle,PlatformFrontPage,
  Carousel, Slide, Pagination, Navigation ,Navbar
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
          color :"painal-primary-color",
          dark_color :"painal-primary-color-dark"
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
.carousel__viewport{
  width: 500px;
  /* height: 600px; */
}
</style>
