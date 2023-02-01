<template>
  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Sistema agnóstico en la nube para la construcción de soluciones de big data basada en el diseño de servicios de ciencia de datos de alta disponibilidad y tolerante a fallos"
    image="/images/xelhua/xelhua.png"
    index="4"
    color ="xelhua-primary-color"
    dark_color ="xelhua-primary-dark-color"
    title_size ="text-size--lg"
    image_width = "700"
    
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
                  <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
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
                  <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
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
      <p class="text-size--md text-align--justify">{{ sections.section_3.text }}</p>
      <div class="flex justify-content--center">
        <img :src="$resolve_image(sections.section_3.images[0].src)" :alt="sections.section_3.alt"  :width="sections.section_3.images[0].width">
      </div>
    </div>
  </Section>

  <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
      <template v-slot:part1>
          <div>
              <h2 class="text-size--lg mb--md">{{ sections.section_4.title }}</h2>
              <p class="text-size--md text-align--justify">{{ sections.section_4.text }}</p> 
          </div>
    </template>
      <template v-slot:part2>
          <div class ="flex justify-content--center align-items--center">
            <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
              <Slide v-for="(image,index) in sections.section_4.images" :key ="index"> 
                  <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
              </Slide>
              <template #addons>
                <Navigation/>
                <Pagination/>
              </template>
            </Carousel>
          </div>
      </template>
  </PortionSection>
  <Section  :title="sections.section_5.title" :color="color">
    <div class="pa--xl">
      <p class="mb--xl  text-size--md text-align--justify">{{ sections.section_5.text }}</p>
      <div class="flex justify-content--center">
        <img :src="$resolve_image(sections.section_5.images[0].src)" :alt="sections.section_5.alt"  :width="sections.section_5.images[0].width">
      </div>
    </div>
  </Section>
  <PortionSection  part1_width ="40" part2_width="60" :column="is_mobile">
      <template v-slot:part1>
          <div>
              <h2 class="text-size--lg mb--md">{{ sections.section_6.title }}</h2>
              <p class="text-size--md text-align--justify">{{ sections.section_6.text }}</p> 
          </div>
    </template>
      <template v-slot:part2>
          <div class ="flex justify-content--center align-items--center">
            <Carousel :items-to-show="1" :wrap-around="false" snapAlign="start">
              <Slide v-for="(image,index) in sections.section_6.images" :key ="index"> 
                  <img :src="$resolve_image(image.src)" :alt="image.alt" :width="image.width">
              </Slide>
              <template #addons>
                <Navigation/>
                <Pagination/>
              </template>
            </Carousel>
          </div>
      </template>
  </PortionSection>

  <Section  :title="sections.section_7.title" :color="color">
    <div class="pa--xl">
      <p class="mb--xl  text-size--md text-align--justify">{{ sections.section_7.text }}</p>
      <div class="flex justify-content--center">
        <img :src="$resolve_image(sections.section_7.images[0].src)" :alt="sections.section_7.alt"  :width="sections.section_7.images[0].width">
      </div>
    </div>
  </Section>
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
import useBreakpoints from "vue-next-breakpoints";

export default {
  components:{Footer,Card,Section,Circle,Carousel, Slide, Pagination, Navigation ,PlatformFrontPage,Navbar},
  computed: {
      is_mobile(){
        return this.breakpoints.mobile.matches || this.breakpoints.table.matches
      }
  },
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
  data() {
      return {
        sections:{
            section_0:{
              title:"Servicio de analítica/estadística de datos para acceso a datos publicados por instituciones de salud y/o por investigadores autorizados",
              text:"Xelhua es una plataforma para la construcción de sistemas de ciencia de datos estructurados bajo demanda, sin amplios conocimientos en programación y orientada al diseño. Permite utilizar aplicativos para la preparación de datos, análisis y visualización de datos, acoplarlos unos con otros y crear flujos de trabajo personalizados. Los datos se procesan por cada una de las aplicaciones (encapsuladas en microservicios) que el usuario selecciona, generando nuevos productos derivados, cómo lo pueden ser datos transformados, gráficas, mapas, estadísticos, o cualquier producto accionable que permita realizar observaciones sobre los datos, o bien, permita tomar una decisión.",
              images:[
                {
                  src:"/images/xelhua/section_0_0.png",
                  alt:"XELHUA_0",
                  width:"400"
                },
                {
                  src:"/images/xelhua/section_0_1.png",
                  alt:"XELHUA_1",
                  width:"400"
                }
              ]
            },
            section_1:{
              title:"Construye soluciones de alto nivel agnosticas a la infraestructura y de alta disponibilidad",
              text:"El sistema Xelhua permite construir soluciones de alto nivel a través de un esquema impulsado por el diseño, convirtiendo automáticamente los diseños de pipelines en servicios de ciencia de datos agnósticos y de alta disponibilidad en la nube, desplegables en múltiples infraestructuras para hacer frente a los efectos secundarios del bloqueo del proveedor. En tiempo de ejecución, un motor de orquestación crea flujos de datos continuos, mientras que un modelo descentralizado garantiza las operaciones continuas de estos servicios de big data enmascarando los fallos detectados, como la indisponibilidad de aplicaciones y datos.",
              images:[
                {
                  src:"/images/xelhua/section_1_0.png",
                  alt:"XELHUA_0",
                  width:"800"
                },
              ]
            },
            section_2:{
              title:"Principios de diseño del modelo de construcción de Xelhua para construir sistemas de ciencia de datos",
              text:"El sistema Xelhua define y está basado en la estructura lógica denominada Agnostic Box (ABox), inspirada en la tecnología de contenedores de software, considerados el estándar para el despliegue de microservicios y aplicaciones en la nube. Una estructura ABox representa una aplicación analítica a través de la metainformación descriptiva del servicio proporcionado por dicha aplicación. La estructura ABox, al ser un contenedor de software, proporciona los componentes de software necesarios para la ejecución de la aplicación analítica, así como la configuración necesaria para el correcto despliegue del servicio proporcionado.",
              images:[
                {
                  src:"/images/xelhua/section_2_0.png",
                  alt:"XELHUA_0",
                  width:"400"
                },
                {
                  src:"/images/xelhua/section_2_1.png",
                  alt:"XELHUA_0",
                  width:"400"
                },
              ]
            },
            section_3:{
              title:"Construcción de una malla de servicios independiente de la plataforma e infraestructura de cómputo",
              text:"El sistema Xelhua proporciona diferentes aplicaciones analíticas para big data a través de la publicación de diferentes servicios. Los servicios proporcionados están contenidos en unas estructuras ABox, disponibles en un repositorio (R), basada en la tecnología de contenedores de software con las características de conectividad, manejabilidad, portabilidad y usabilidad. A continuación, se detalla cada una de estas características, utilizadas para la construcción de la malla de servicios.",
              images:[
                {
                  src:"/images/xelhua/section_3_0.png",
                  alt:"XELHUA_0",
                  width:"400"
                }
              ]
            },
            section_4:{
              title:"Servicios de e-Salud tolerante a fallos y altamente disponibles",
              text:"En los escenarios del mundo real, varios usuarios pueden hacer peticiones a un conjunto de servicios para procesar datos. En este contexto, si uno de los servicios falla, los usuarios no pueden acceder a él. Una solución a este problema es utilizar la redundancia de servicios.",
              images:[
                {
                  src:"/images/xelhua/section_4_0.png",
                  alt:"XELHUA_0",
                  width:"400"
                },
                {
                  src:"/images/xelhua/section_4_1.png",
                  alt:"XELHUA_0",
                  width:"400"
                }
              ]
            },

            section_5:{
              title:"Servicios de e-Salud tolerante a fallos y altamente disponibles",
              text:"El acoplamiento de las estructuras ABox en el sistema Xelhua se realiza a través de redes P2P descentralizadas. El esquema descentralizado no sólo permite a las estructuras ABox establecer un consenso entre las entidades participantes de una red de servicios P2P, sino que también mantiene un grado de tolerancia a los fallos a través de la redundancia del servicio, así como el control del intercambio de datos entre las estructuras ABox. En el esquema descentralizado, se utilizan entidades con diferentes roles como nodos, proponentes, aceptantes y aprendices. El rol de nodo realiza tareas de equilibrio de carga, asignación y distribución de la carga de trabajo. Los proponentes procesan cada solicitud que llega a un servicio (SV). Los aceptadores reciben y procesan cada solicitud y finalmente responden afirmativa o negativamente a los proponentes. Cuando los aceptadores reciben una solicitud, la envían a los aprendices, que, por consenso, deciden reenviar la solicitud a la estructura ABox correspondiente. El protocolo permite que, aunque fallen algunas entidades, las peticiones puedan ser atendidas por el resto de las entidades disponibles sin interrumpir la funcionalidad del servicio de big data. Siguiendo este mismo proceso, los nodos permiten establecer controles sobre las réplicas de las estructuras ABox. Esto significa que en escenarios de fallos de una estructura ABox, los nodos realizan interacciones entre las estructuras ABox disponibles.",
              images:[
                {
                  src:"/images/xelhua/section_5_0.png",
                  alt:"XELHUA_0",
                  width:"800"
                }
              ]
            },

            section_6:{
              title:"Despliegue de servicios de e-Salud",
              text:"Xelhua permite desplegar servicios mediante el uso de sus estructuras ABox que facilitan el proceso de despliegue. Las cuales son definidas en un JSON que contiene los metadatos de una esturctura ABox.",
              images:[
                {
                  src:"/images/xelhua/section_6_0.png",
                  alt:"XELHUA_0",
                  width:"400"
                },
                {
                  src:"/images/xelhua/section_6_1.png",
                  alt:"XELHUA_0",
                  width:"400"
                }
              ]
            },
            section_7:{
              title:"Despliegue de servicios de e-Salud",
              text:"Un ejemplo de los servicios desplegados en diferentes infraestructuras utilizando el prototipo del sistema Xelhua. Se muestran un conjunto de servicios y réplicas montados en un clúster local y un conjunto de réplicas existentes en nodos del servidor de Amazon. En este contexto, un usuario envía peticiones al AG, que las redirige a los correspondientes servicios disponibles, generando así un flujo de datos (denotado por los números).",
              images:[
                {
                  src:"/images/xelhua/section_7_0.png",
                  alt:"XELHUA_0",
                  width:"800"
                }
              ]
            }
        },
        color : "xelhua-primary-color",
        dark_color : "xelhua-primary-dark-color"
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
