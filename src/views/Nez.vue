<template>

  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Servicio de construcción de sistemas e-salud"
    image="assets/images/nez/nez.png"
    index="1"
    color ="nez-primary-color"
    dark_color ="nez-primary-dark-color"
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
        <p class="text-size--md text-align--justify">{{ sections.section_1.text }}</p>
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_1.images[0].src)" :alt="sections.section_1.alt"  :width="sections.section_1.images[0].width">
        </div>
      </div>
    </Section>

    <PortionSection part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
                <Slide  v-for="image in sections.section_2.images" :key ="image.alt"> 
                    <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
                </Slide>
                <template #addons>
                  <Navigation/>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
        <template v-slot:part2>
            <div>
                <h2 class="text-size--lg mb--md">{{ sections.section_2.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.section_2.text }}</p> 
            </div>
        </template>
    </PortionSection>

    <Section :title="sections.section_3.title" :color="color">
      <div class="pa--xl">
        <p class="text-size--md text-align--justify">{{ sections.section_3.text}}</p>
        
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_3.images[0].src)" :alt="sections.section_3.images[0].alt"  :width="sections.section_3.images[0].width">
        </div>

      </div>
    </Section>

    <PortionSection part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part2>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
                <Slide  v-for="image in sections.section_4.images" :key ="image.alt"> 
                    <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
                </Slide>
                <template #addons>
                  <Navigation/>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
        <template v-slot:part1>
            <div>
                <h2 class="text-size--lg mb--md">{{ sections.section_4.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.section_4.text }}</p> 
            </div>
        </template>
    </PortionSection>

    <Section :title="sections.section_5.title" :color="color">
      <div class="pa--xl">
        <p class="text-size--md text-align--justify">{{ sections.section_5.text}}</p>
        
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_5.images[0].src)" :alt="sections.section_5.images[0].alt"  :width="sections.section_5.images[0].width">
        </div>

      </div>
    </Section>

    <PortionSection part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
                <Slide  v-for="image in sections.section_6.images" :key ="image.alt"> 
                    <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
                </Slide>
                <template #addons>
                  <Navigation/>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
        <template v-slot:part2>
            <div>
                <h2 class="text-size--lg mb--md">{{ sections.section_6.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.section_6.text }}</p> 
            </div>
        </template>
    </PortionSection>

    <Section :title="sections.section_7.title" :color="color">
      <div class="pa--xl">
        <p class="mb--xl text-size--md text-align--justify">{{ sections.section_7.text}}</p>
        
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_7.images[0].src)" :alt="sections.section_7.images[0].alt"  :width="sections.section_7.images[0].width">
        </div>

      </div>
    </Section>
    <Section :title="sections.section_8.title" :color="color">
      <div class="pa--xl">
        <p class="mb--xl text-size--md text-align--justify">{{ sections.section_8.text}}</p>
        
        <div class="flex justify-content--center">
          <img :src="$resolve_image(sections.section_8.images[0].src)" :alt="sections.section_8.images[0].alt"  :width="sections.section_8.images[0].width">
        </div>

      </div>
    </Section>

    <PortionSection part1_width ="40" part2_width="60" :column="is_mobile">
        <template v-slot:part1>
            <div class ="flex justify-content--center align-items--center">
              <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
                <Slide  v-for="image in sections.section_9.images" :key ="image.alt"> 
                    <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
                </Slide>
                <template #addons>
                  <Navigation/>
                  <Pagination/>
                </template>
              </Carousel>
            </div>
        </template>
        <template v-slot:part2>
            <div>
                <h2 class="text-size--lg mb--md">{{ sections.section_9.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.section_9.text }}</p> 
            </div>
        </template>
    </PortionSection>
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Button from "../components/Button.vue"
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Section from "../components/Section.vue"
import Circle from "../components/Circle.vue"
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import PortionSection from "../components/PortionSection.vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import useBreakpoints from "vue-next-breakpoints";

export default {
    setup(){
        const breakpoints = useBreakpoints({
            mobile:[320,768], // max-width: 600px
            table:[768,1024],
            desktop: [1281] // min-width: 601px
        });

        return {
            // If you want to use different key, feel free do do so, e.g.:
            // mediaqueries: breakpoints
            // and then use mediaqueries.desktop.matches etc.
            breakpoints
        };
    },
    computed:{
      is_mobile(){
        return this.breakpoints.mobile.matches || this.breakpoints.table.matches
      }
            // this.breakpoints.mobile.on("enter", (mq) => {
            //     console.log("Entered mobile breakpoint");
            //     console.log("Media Query", mq);
            //     this.is_
            // });

            // this.breakpoints.mobile.on("leave", (mq) => {
            //     console.log("Left mobile breakpoint");
            //     console.log("Media Query", mq);
            //     this.items_to_show = 4
            // });
    },
    methods:{
      to_image(x){
        return new URL(x,import.meta.url).href
      }
    },
    data() {
        return {
            // is_mobile:true,
            color: "nez-primary-color",
            dark_color:"nez-primary-dark-color",
            sections:{
              section_0:{
                title:"Crea sistemas de e-Salud en minutos para el manejo de datos y contenidos médicos",
                text:"Es un framework que permite la construcción de sistemas de ciencia de datos en e-salud. Muyal-Nez y las soluciones generadas con este tienen la característica de que son agnósticos de la infraestructura, por lo tanto, permiten a las organizaciones interconectar las diferentes aplicaciones consideradas en el manejo del ciclo de vida de sus datos, y desplegarlas en diferentes infraestructuras para generar flujos intra e interinstitucionales.",
                images:[
                  {
                    src:"assets/images/nez/section_0_0.png",
                    alt:"NEZ_0",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_0_1.png",
                    alt:"NEZ_2",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_0_2.png",
                    alt:"NEZ_2x",
                    width:"400"
                  }
                ] 
                
              },
              section_1:{
                title:"Bloques de construcción de sistemas de ciencia de datos",
                text:"En Muyal-Nez la unidad básica de construcción de un sistema de ciencia de datos de salud es una abstracción llamada bloque de construcción (BC). Un BC es un componente de software genérico y agnóstico de la infraestructura, el cual es construido en la forma de un contenedor virtual que encapsula una aplicación para procesar y manejar datos médicos. En este sentido, un BC incluye el código o binario de la aplicación, sus librerías y bibliotecas, archivos de configuración, así como una versión reducida del sistema operativo que la aplicación requiere para funcionar. En la Fig. 5 se muestra la representación conceptual de un BC utilizado en Muyal-Nez para el manejo de las aplicaciones. Como se puede observar, los BC pueden ser conectados con una fuente y destino de datos utilizando sus interfaces de entrada y salida.", 
                images:[
                  {
                    src:"assets/images/nez/section_1_0.png",
                    alt:"NEZ_3",
                    width:"600"
                  }
                ]
              },
              section_2:{
                title:"Nez un sistema agnostico de la infraestructura",
                text:"Los BC pueden ser desplegados en diferentes infraestructuras disponibles, por ejemplo, en una computadora personal, un servidor, un clúster de computadoras o en una máquina virtual en la nube. En tiempo de ejecución, este bloque de construcción es manejado como un microservicio, el cual implementa interfaces de entrada y salida que permiten el intercambio de datos con otros microservicios e incluso con aplicaciones externas o manejadas por terceros.",
                images:[
                    {
                      src:"assets/images/nez/section_2_0.png",
                      alt:"NEZ_1",
                      width:"400"
                    },
                    {
                      src:"assets/images/nez/section_2_1.png",
                      alt:"NEZ_5",
                      width:"400"
                    },
                ]
              },
              section_3:{
                title:"Diseño de servicios de ciencia de datos para e-salud",
                text:"Los bloques de construcción diseñados en Muyal-Nez pueden ser interconectados entre sí para crear estructuras más complejas tales como servicios de ciencia de datos que permitan el manejo y procesamiento de datos a través de su ciclo de vida, desde su adquisición hasta hacerlos disponibles a tomadores de decisiones (e.g., médicos o enfermeras). En este sentido, la construcción de un servicio de ciencia de datos con Muyal-Nez, es realizada mediante la unión lógica de diferentes BC, los cuales pueden estar desplegados en múltiples infraestructuras. Esto es similar a armar un rompecabezas, donde diferentes bloques más pequeños se unen para formar una estructura más compleja.",
                images:[
                  {
                    src:"assets/images/nez/section_3_0.png",
                    alt:"NEZ_4",
                    width:"1000"
                  }
                ]
              },
              section_4:{
                title:"Muyal-Nez permite a los diseñadores agregar patrones de paralelismo implícito ",
                text:"El objetivo es permitir el procesamiento eficiente de los datos, replicando aquellos bloques de construcción que pueden generar un cuello de botella en el flujo de datos.",
                images:[
                  {
                    src:"assets/images/nez/section_4_0.png",
                    alt:"NEZ_4",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_4_1.png",
                    alt:"NEZ_4",
                    width:"400"
                  }
                ]
              },

              section_5:{
                title:"Patrones de paralelismo implícitos para el manejo eficiente de datos",
                text:"El objetivo es permitir el procesamiento eficiente de los datos, replicando aquellos bloques de construcción que pueden generar un cuello de botella en el flujo de datos. Se presenta un ejemplo de un sistema de ciencia de datos construido con Muyal-Nez, el cual incluye un patrón manejador/trabajador. En este patrón el BC para la detección de tumores es replicado tres veces y se agrega una entidad llamada manejador, la cual se encarga de distribuir los datos de entrada, producidos por el BC de conversión de imágenes a RGB, entre los trabajadores disponibles.",
                images:[
                  {
                    src:"assets/images/nez/section_5_0.png",
                    alt:"NEZ_5",
                    width:"600"
                  }
                ]
              },
              section_6:{
                title:"Flujos de datos intra e interinstitucionales para la compartición automática de datos",
                text:"Nez permite la creación de dos tipos de flujo de datos: intra e interinstitucionales. Los flujos de datos intrainstitucionales permiten la interconexión de diferentes participantes dentro de un hospital u organización. Por ejemplo, un departamento de radiología enviando tomografías a un oncólogo. Estos servicios automáticamente realizan el manejo, entrega y procesamiento de los datos al interior de la organización.",
                images:[
                  {
                    src:"assets/images/nez/section_6_0.png",
                    alt:"NEZ_6",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_6_1.png",
                    alt:"NEZ_7",
                    width:"400"
                  }
                ]
              },
              section_7:{
                title:"Ejemplo de un flujo de datos intrainstitucional",
                text:"Se muestra un ejemplo de un flujo de datos intrainstitucional, el cual interconecta un departamento de radiología con uno de oncología. Como se puede observar, los datos son asegurados con Muyal-Chimalli y transportados con Muyal-Painal. Además, las imágenes adquiridas son procesadas con BC de Muyal-Nez, los cuales incluyen aplicaciones para la anonimización de las imágenes y la reconstrucción 3D de las mismas.",
                images:[
                  {
                    src:"assets/images/nez/section_7_0.png",
                    alt:"NEZ_6",
                    width:"1000"
                  },
                ]
              },
              section_8:{
                title:"Ejemplo de un flujo de datos interinstitucional",
                text:"Se muestra un ejemplo de un flujo interinstitucional. En este ejemplo un radiólogo de un hospital captura imágenes de rayos X a los pacientes, y las envía a un oncólogo en otro hospital para su análisis y un diagnóstico. Durante el transporte de las imágenes, estas son procesadas por un servicio de ciencia de datos para identificar tumores en las imágenes. Además, se incluyen BC que cuentan con mecanismos para asegurar la integridad y confidencialidad de los datos, garantizando que terceros no puedan acceder a las imágenes médicas durante su transporte y almacenamiento.",
                images:[
                  {
                    src:"assets/images/nez/section_8_0.png",
                    alt:"NEZ_8",
                    width:"1000"
                  },
                ]
              },
              section_9:{
                title:"Principales caracteristicas",
                text:"Las caracteristicas principales de Nez son 1) encapsulamiento de aplicaciones que permite a los usaurios crear soluciones que puedan ser portables en diferentes entornos computacionales; 2) La integracion de multiples aplicaciones; 3) La creacion de servicios de e-Salud mediante bloques de consutrcciones 4) La entrega automatica de resultados; 5) ",
                images:[
                  {
                    src:"assets/images/nez/section_9_0.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_9_1.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_9_2.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_9_3.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_9_4.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"assets/images/nez/section_9_5.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                ]
              }
            },
        };
    },
    components: {PlatformFrontPage, PortionSection,Footer, Card, Section, Circle,Button,
      Carousel,Slide,Pagination,Navigation, Navbar
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

.section-title img {
  align-self: center;
  /* height: 50%; */
  width: 30%;
}

.section-title h2 {
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 20px;
}

.section-title span {
  text-align: center;
  color: white;
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
  background-color: var(--nez-primary-color-dark);
  height: 5px;
  width: 100%;
}


.icon {
  height: 100px;
  width: 100px;
}

button {
  background-color: var(--nez-primary-color-dark);
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
