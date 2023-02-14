<template>

    <!-- :color="color" 
    :dark_color="dark_color"  -->
  <Navbar 
    :text_color_normal ="'white'" 
    :text_color_scrolled="'black'" 
    :background_color="'nez-primary-color'" 
    :scrolled_background_color="'white'"
    bars_color="white"
    scrolled_bars_color="black"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"

  /> 
  <PlatformFrontPage 
    title ="Servicio de construcción de sistemas e-salud"
    image="/images/nez/nez.png"
    index="1"
    color ="nez-primary-color"
    dark_color ="nez-primary-dark-color"
    image_width = "350"
    :title_size="section_title_size"
    circle_color="nez-primary-dark-color"
    text_color="white"
  >
  <template v-slot:footer>
          <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span>
          <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
            Obtenido
          </div>
          <div class="mb--md front-page__buttons flex-wrap">
            <Button title="Poster cualitativo" :color="color" :dark_color="dark_color" @on_click="on_click('https://drive.google.com/file/d/1LRvydHG08d-gaFA6uz2PTViUfwAnBFmZ/view?usp=share_link')" />
            <Button title="Poster cuantitativo" :color="color" :dark_color="dark_color" @on_click="on_click('https://drive.google.com/file/d/1ek5v_M9nE_wWw38YqDaUo-BCeEOg_ORl/view?usp=share_link')" />
            <!-- <Button title="Software" :color="color" :dark_color="dark_color" /> -->
            <Button title="Infografia tecnica" :color="color" :dark_color="dark_color"  @on_click="on_click('https://youtu.be/Vl0RGlYaQVs?list=PLImGqhUs3WnuwAkpfwRGhDrD2WEcaFHVi')"/>
            <Button title="Infografia general" :color="color" :dark_color="dark_color" @on_click="on_click('https://youtu.be/6NO9x7Ec-50?list=PLImGqhUs3WnuwAkpfwRGhDrD2WEcaFHVi')"/>
          </div>
  </template>
</PlatformFrontPage>
<SimpleSection title="Servicio de construcción automático de sistemas
 e-salud para el manejo de datos y contenidos en la práctica médica" subtitle="">
 <template v-slot:body>
  <div class="badge-wrapper">

    <div class="flex justify-content--center align-items--center">
      <div class="badge-container flex ">
          <div class="flex justify-content--center align-items--center">
            <div class=" badge__index">1</div>
          </div>
          <p class="badge__text"><b>Crea</b> tus bloques de construccion sin necesidad de programar aplicaciones extras.</p>
      </div>
      <img src="/images/nez/nez-0.png" alt="" width="200">
    </div>

    <div class="flex justify-content--center align-items--center">
      <img src="/images/nez/nez-1.png" alt="" width="200">
      <div class="badge-container flex ">
          <div class="flex justify-content--center align-items--center">
            <div class=" badge__index">2</div>
          </div>
          <p class="badge__text"><b>Une</b> tus bloques y crea un sistema de eSalud</p>
      </div>
    </div>
    
    <div class="flex justify-content--center align-items--center">
    <div class="badge-container flex ">
        <div class="flex justify-content--center align-items--center">
          <div class=" badge__index">3</div>
        </div>
        <p class="badge__text"><b>Despliega</b> tu servicio en la nube o tu computadora personal </p>
    </div>
      <img src="/images/nez/nez-2.png" alt="" width="200">
    </div>

  </div>
  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus inventore iusto nesciunt iure nam neque aperiam molestias unde corporis aspernatur, in, sit eius. Iusto ducimus obcaecati adipisci. Porro facilis necessitatibus incidunt explicabo saepe ut consequatur, quos laborum rerum neque vero adipisci obcaecati ullam quia beatae dolorum harum! Suscipit, ratione!</p> -->
 </template>
</SimpleSection>
<Separator type="nez"/>
<SimpleSection title="Maneja y comparte tus servicios de e-salud" subtitle="">
  <template v-slot:body>
    <div class="flex justify-content--center align-items--center flex-direction--column">
      <p class="mb--md">Sistemas de e-salud intra-institucionales</p>
      <img src="/images/nez/nez-00.png" alt="" width="500">
    </div>
  </template>
</SimpleSection>
<Separator type="nez"/>
<SimpleSection title="" subtitle="Puedes compartir tu servicio de e-salud, y los datos generados, entre:">
<template v-slot:body>
    <p></p>
    <div class="flex justify-content--center">
    <ListTable 
      class="mr--md"
      title="Multiples usuarios" 
      image="/images/nez/multi-user.png" 
      :items="[
          'Sistemas de compartición de imagenología.',
          'Datos de múltiples fuentes (sensores, y bases de datos).',
          'Medición de signos vitales.',
      ]"
    />
    <ListTable 
      title="Múltiples niveles de atención" 
      image="/images/nez/clinic.png" 
      :items="[
          'Diagnósticos',
          'Imagenología',
          'Métricas de pacientes',
      ]"
    />
    </div>

</template>
</SimpleSection>
<Separator type="nez"/>
<SimpleSection title="" subtitle="">
  <template v-slot:body>
    <div class="flex justify-content--center align-items--center flex-direction--column">
      <p class="mb--md">Sistemas de e-salud inter-institucionales</p>
      <img src="/images/nez/nez-01.png" alt="" width="500">
    </div>
  </template>
</SimpleSection>
<Separator type="nez"/>
  <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Button from "../components/Button.vue"
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Section from "../components/Section.vue"
// import Circle from "../components/Circle.vue"
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import PortionSection from "../components/PortionSection.vue"
// 
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
// 
import useBreakpoints from "vue-next-breakpoints";
import SimpleSection from '../components/SimpleSection.vue';
import Separator from '../components/Separator.vue';
import ListTable from '../components/ListTable.vue';

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
    methods:{
        on_click(url){
          window.open(url,"_blank")
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
        return this.is_mobile ? 'md':'xl'
      },
      carousel_width(){
        return this.is_mobile ? '350px':'500px'
      }
    },
    data() {
        return {
            // is_mobile:true,
            autoplay:'5000',
            color: "nez-primary-color",
            dark_color:"nez-primary-dark-color",
            separator_size:10,
            sections:{
              section_0:{
                title:"Crea sistemas de e-Salud en minutos para el manejo de datos y contenidos médicos",
                text:"Es un framework que permite la construcción de sistemas de ciencia de datos en e-salud. Muyal-Nez y las soluciones generadas con este tienen la característica de que son agnósticos de la infraestructura, por lo tanto, permiten a las organizaciones interconectar las diferentes aplicaciones consideradas en el manejo del ciclo de vida de sus datos, y desplegarlas en diferentes infraestructuras para generar flujos intra e interinstitucionales.",
                images:[
                  {
                    src:"/images/nez/section_0_0.png",
                    alt:"NEZ_0",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_0_1.png",
                    alt:"NEZ_2",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_0_2.png",
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
                    src:"/images/nez/section_1_0.png",
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
                      src:"/images/nez/section_2_0.png",
                      alt:"NEZ_1",
                      width:"400"
                    },
                    {
                      src:"/images/nez/section_2_1.png",
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
                    src:"/images/nez/section_3_0.png",
                    alt:"NEZ_4",
                    width:"1000"
                  }
                ]
              },
              section_4:{
                title:"Muyal-Nez permite a los diseñadores agregar patrones de paralelismo implícito ",
                text:"El objetivo es permitir el procesamiento eficiente de los datos, replicando aquellos bloques de construcción que pueden generar un cuello de botella en el flujo de datos. con Muyal-Nez, el cual incluye un patrón manejador/trabajador. En este patrón los bloques de construccion (BC) para la detección de tumores son replicados para incrementar el rendimiento del sistemas de e-Salud.",
                images:[
                  {
                    src:"/images/nez/section_4_0.png",
                    alt:"NEZ_4",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_4_1.png",
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
                    src:"/images/nez/section_5_0.png",
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
                    src:"/images/nez/section_6_0.png",
                    alt:"NEZ_6",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_6_1.png",
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
                    src:"/images/nez/section_7_0.png",
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
                    src:"/images/nez/section_8_0.png",
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
                    src:"/images/nez/section_9_0.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_9_1.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_9_2.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_9_3.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_9_4.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                  {
                    src:"/images/nez/section_9_5.png",
                    alt:"NEZ_8",
                    width:"400"
                  },
                ]
              }
            },
        };
    },
    components: { PlatformFrontPage, PortionSection, Footer, Card, Section, Button, Carousel, Slide, Pagination, Navigation, Navbar, SimpleSection, Separator, ListTable }
}
</script>

<style >



.badge-container{
  display: flex;
  align-items: center;
  background: var(--light-grey-1);
  padding: 20px;
  /* width: 1000px; */
  width: 650px;
  border-radius: 10px;
}
.badge__index {
  background: var(--light-grey-3);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  --size:50px;
  width: var(--size);
  height: var(--size);
  margin-right: 10px;
  font-size: 24px;
  font-weight: bold;
}
.badge__text{
  font-size: 16px;
  text-align: justify;
}

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


.container-gray {
  align-self: center;
  background-color: rgb(226, 223, 223);
  border-radius: 10px;
  margin-top: 20px;
  width: 200px;
  height: 30px;
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
  width: 600px;
}  */
</style>
