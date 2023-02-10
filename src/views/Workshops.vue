<template>
  <Navbar 
    :text_color_normal ="'white'" 
    :text_color_scrolled="'white'" 
    :background_color="color" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'white'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-white.png'"
  /> 
  <PlatformFrontPage 
    title ="Talleres"
    image="/images/workshops/workshops.png"
    index="6"
    :color ="color"
    :dark_color ="dark_color"
    image_width = "500"
  >
  <!-- <template v-slot:footer>
  </template> -->
</PlatformFrontPage>
  <div v-for="(workshop,index) in workshops" :class="{'sectionv3':true, 'active':!hides[index]}">
    <ImageBanner @click="on_click(index,workshop)" :title ="workshop.title" :image ="workshop.image.src"/>
    <div :class="{'sectionv3-body':true,'hide':hides[index],'flex':true,'flex-direction--column':true,'align-items--center':true }">
      <div v-for="(subsection,subindex) in workshop.subsections" :class="{'flex':true,'sectionv3__subsection':true,'flex-direction--row-reverse':!((subindex)%2 == 0), 'hide':hides[index]  }">
          <img :class="{'sectionv3__subsection__img':true,'hide':hides[index],'mr--sm':(subindex%2 == 0),'ml--sm': !(subindex%2 == 0)}" :src="subsection.image" :alt="workshop.image.alt">
          <div :class="{'flex':true,'flex-direction--column':true,'sectionv3__subsection__content':true,'hide':hides[index]}">
            <h3 :class="{'text-align--center':true,'sectionv3__subsection__title':true,'hide':hides[index]}">{{ subsection.title }}</h3>
            <p :class ="{'sectionv3__subsection__text':true,'hide':hides[index], 'text-align--justify':true}">{{ subsection.text }}</p>
          </div>
      </div>
          <iframe :class="{'sectionv3__subsection__video':true,'mt--md':true,'hide':hides[index]}" width="820" height="420" :src="workshop.video"></iframe>
          <!-- <iframe width="1280" height="720" src="" title="Vídeo Técnico Nez" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
          <!-- <iframe width="1280" height="720" src="" title="Taller de Telemedicina y Ciencia de Datos 19 de agosto 2022 - Parte 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
      <!-- <iframe width="1280" height="720" src="" title="Big Data en Salud. Plataforma Muyal-Ilal / Sistema de visualización /  Tecnologías emergente 1." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
      <!-- <iframe width="1280" height="720" src="" title="Taller de Big Data en Salud. Conferencia 4: Plataforma tecnológica; y Demostración 2: Muyal-Nez." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
      <!-- <iframe width="1280" height="720" src="" title="Taller BigData: Bienvenida; Mesa de discusión; Proyecto Muyal-Ilal; Proyecto Invitado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
    </div>
  </div>
  <Footer/>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';
import ImageBanner from '../components/ImageBanner.vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
export default {
  components: {Footer,Card,PlatformFrontPage,
    Carousel, Slide, Pagination, Navigation , Navbar,Button,ImageBanner
  },
  methods:{
    on_click(index,workshop){
        this.hides[index] = !this.hides[index];
        console.log("CLICK",index,workshop)
    }
  },
  data() {
      return {
            hides:[true,true,true ,true],
            workshops:[
              {
                title:"Taller de Monterrey",
                video:"https://www.youtube.com/embed/evuQWSMtvqI",
                image:{
                    src:"/images/workshops/monterrey/00.jpg",
                    alt:"MERIDA",
                    width:0
                },
                subsections:[
                  {
                    title:"Ciencia y salud",
                    text:"En los talleres impartidos se tocaron temas relevantes para la ciencia y la salud. Principalmente como la ciencia puede mejorar las tareas realizadas centros medicos facilitando la comunicacion entre todos los departamentos involucrados.",
                    image:"/images/workshops/monterrey/01.png"
                  },
                  {
                    title:"Nez un servicio para la construcción de sistemas de ciencia de datos",
                    text:"La facilidad de construir sistemas para ciencias de datos nunca habia sido tan facil, siguiendo un principio de acoplamiento de bloques de construccion para realizar flujos de trabajo para grandes sistemas de ciencias de datos enfocado en ambitos medicos surge Nez revolucionando la manera en la que se diseñan sistemas, dando caracteristicas fundamentales como la agnosticidad permitiendole desplegar los sistemas en diversas infraestructuras.",
                    image:"/images/workshops/monterrey/02.png"
                  },
                  {
                    title:"Chimalli un servicio para el cumplimiento de normas en el intercambio de datos",
                    text:"La seguridad es un aspecto importante en el intercambio de datos, sin lugar a duda mantener los servicios de seguridad a los datos clinicos es un reto en el cual el servicio Chimalli sobresale cumpliendo las normas en el intercambio de datos.",
                    image:"/images/workshops/monterrey/03.png"
                  },
                  {
                    title:"Xelhua un sevicio para creacion de sistemas de ciencia de datos estructurados",
                    text:"Los datos estructurados nos permiten condensar informacion relevante sobre algun fenemono manteniendo una estructura el servicio de Xelhua permite realizar la creacion de sistemas para obtener diversos productos utilizando como entrada multiples fuentes de datos estructurados.",
                    image:"/images/workshops/monterrey/04.png"
                  }
                ]
              },
              {
                title:"Taller de Iztapalapa",
                video:"https://www.youtube.com/embed/RAdiXrki6WM",
                image:{
                    src:"/images/workshops/mexico/00.jpg",
                    alt:"IZTAPALAPA",
                    width:0
                }, 
                subsections:[
                  {
                    title:"Sistemas de visualizacion de los principales problemas de salud",
                    text:"Diversos invitados que muestran su talento mediante talleres como la Dra. Lina Sofia Palacio Mejia, que impartio el tema de visualizacion de los problemas de la salud.",
                    image:"/images/workshops/mexico/1.jpg"

                  },
                  {
                    title:"Plataforma tecnológica para la gestión de datos de eSalud: Muyal-Ilal",
                    text:"Una plataforma unica en su tipo que permite la gestion, aseguramiento, intercambio y preservacion de grandes volumenes de datos en salud Muyal-Ilal esta presentacion fue impartida por el Dr. Jose Luis Gonzalez Compean.",
                    image:"/images/workshops/mexico/02.jpg"
                  },
                  {
                    title:"Aseguramiento de datos en aplicaciones de eSalud",
                    text:"La seguridad es un aspecto sumamente importante principalmente en aplicaciones que comparten datos clinicos que son sensibles y que se intercambian entre varios sistemas.",
                    image:"/images/workshops/mexico/03.jpg"

                  },
                  {
                    title:"Taller de cómputo en y almacenamiento en la nube para ciencia de datos",
                    text:"Los talleres impartidos por profesionales altamente capacitados en temas de cómputo y almacenamiento en la nube para ciencia de datos compartieron su conocimiento sobre la salud, la ciencia y como se pueden unir para obtener mejores resultados.",
                    image:"/images/workshops/mexico/4.jpg"
                  }
                ]
              },
              {
                title:"Taller de Puebla",
                video:"https://www.youtube.com/embed/dZoMnN8e6x0",
                image:{
                    src:"/images/workshops/puebla/00.jpg",
                    alt:"PUEBLA",
                    width:0
                }, 
                subsections:[
                  {
                    title:"Tecnologias emergentes",
                    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ratione fuga maxime voluptatem consectetur magnam sunt, ipsa voluptatibus debitis incidunt reprehenderit hic deleniti unde. Numquam neque perferendis unde aliquam itaque sit recusandae nisi labore fugiat. Minima temporibus facilis expedita nobis.",
                    image:"/images/workshops/puebla/1.jpg"

                  },
                  {
                    title:"Aseguramiento de datos mediante sobres digitales: Caso de aplicación en eSalud",
                    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ratione fuga maxime voluptatem consectetur magnam sunt, ipsa voluptatibus debitis incidunt reprehenderit hic deleniti unde. Numquam neque perferendis unde aliquam itaque sit recusandae nisi labore fugiat. Minima temporibus facilis expedita nobis.",
                    image:"/images/workshops/puebla/02.jpg"
                  },
                  {
                    title:"Caso de aplicación en eSlud para la creación de sistemas de ciencia de datos en eSalud.",
                    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ratione fuga maxime voluptatem consectetur magnam sunt, ipsa voluptatibus debitis incidunt reprehenderit hic deleniti unde. Numquam neque perferendis unde aliquam itaque sit recusandae nisi labore fugiat. Minima temporibus facilis expedita nobis.",
                    image:"/images/workshops/puebla/03.jpg"
                  },
                  {
                    title:"Almacenamiento datos sensibles en eSalud",
                    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ratione fuga maxime voluptatem consectetur magnam sunt, ipsa voluptatibus debitis incidunt reprehenderit hic deleniti unde. Numquam neque perferendis unde aliquam itaque sit recusandae nisi labore fugiat. Minima temporibus facilis expedita nobis.",
                    image:"/images/workshops/puebla/04.jpg"
                  }

                ]
              },
              {
                title:"Taller de Merida",
                video:"https://www.youtube.com/embed/oqIc_zJFMyM",
                image:{
                    src:"/images/workshops/merida/000.jpg",
                    alt:"MERIDA",
                    width:0
                },
                subsections:[
                  {
                    title:"Subsection 1",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/0.jpg"

                  },

                  {
                    title:"Subsection 2",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/1.jpg"
                  },
                  {
                    title:"Subsection 3",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/2.jpg"
                  },
                  {
                    title:"Subsection 4",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/3.jpg"
                  }
                ]
              }
            ],
          color :"workshops-primary-color",
          dark_color :"workshops-primary-dark-color",
        // color : "bg--chimalli-primary-color"
      };
  },
}
</script>
<style scoped>
.sectionv3.active {
  /* background: purple !important; */
  /* height: 10px; */
  /* width: 80vw; */
}
.sectionv3-body.hide{
  /* max-height: 0 !important; */
  height: 0;
  overflow: hidden;
  /* opacity: 0; */
  /* overflow: hidden; */
  /* position: absolute; */
  /* left:-100%; */
  /* visibility: hidden; */
  /* width: 0 !important; */
  /* display: none; */
  /* overflow: hidden; */
}


.sectionv3 {
  position: relative;
  /* width: 80vw; */
  /* height: auto; */
  /* background: yellowgreen; */
  /* height: 0; */
  /* overflow: hidden; */
  /* padding: 10px; */
  /* height: 100vh; */
  /* height: 100vh; */
}

/* .sectionv3.hide { */
  /* opacity: 0; */
/* } */
.sectionv3-body{
  display: block;
  height: 240vh;
  /* overflow-y:scroll; */
  /* max-height: 300vh; */
  /* height: auto; */
  /* min-height: 50vh; */
  /* max-height:100vh; */
  transition: height ease 500ms;
  /* transition: opacity ease 500ms; */
  /* background-color: red; */
}
.sectionv3__subsection {
  /* padding: 10px; */
  width: 80vw;
  /* background: orange; */
  padding: 50px;
  border-bottom: 1.5px solid rgba(0,0,0,0.1);
  max-height: 600px;
}

.sectionv3__subsection.hide {
  border:0;
}

.sectionv3__subsection__img{
  width: 30%;
  border-radius: 10px;
  /* margin-right: 20px; */
  transition: opacity ease 500ms;
}
.sectionv3__subsection__img.hide{
  opacity: 0;
}

.sectionv3__subsection__content{
  background: white;
  /* justify-content: center; */
  padding: 40px;
  
}
.sectionv3__subsection__title{
  font-size: 2.5rem;
  transition: opacity ease 500ms;
}
.sectionv3__subsection__title.hide{
  opacity:0;
}
.sectionv3__subsection__text{
  font-size: 1.5rem;
  transition: opacity ease 500ms;
}
.sectionv3__subsection__text.hide{
  opacity:0;
}


.sectionv3__subsection__video{
  transition: box-shadow ease 400ms, transform ease 400ms;
}
.sectionv3__subsection__video:hover{
  box-shadow: 0px 5px 45px 2px rgba(0,0,0,0.5);
  transform: scale(1.01);
  /* height: 100%; */
}
.sectionv3__subsection__video.hide {
  opacity: 0;
  height:0;
}


</style>
<!-- <template>
    <h1>PUBLICATIONS</h1>
</template>
<script>
export default {
    props:[],
    components:{}
}
</script> -->