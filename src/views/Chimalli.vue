<template>

    <transition name="loading">
        <Loader v-if="loading"/>
    </transition>
    <Navbar 
      :text_color_normal ="'white'" 
      :text_color_scrolled="'black'" 
      :background_color="'chimalli-primary-color'" 
      :scrolled_background_color="'white'"
      :bars_color="dark_color"
      :scrolled_bars_color="'white'"
      :scrolled_logo= "'/images/muyal/muyal-black.png'"
      :normal_logo = "'/images/muyal/muyal-black.png'"
      @loading="on_load"
    /> 

  <PlatformFrontPage 
      title ="Servicio de acceso a servicios de e-salud y/o sistemas de analítica"
      image="/images/chimalli/chimalli.png"
      index="2"
      color ="chimalli-primary-color"
      dark_color ="chimalli-primary-dark-color"
      image_width = "500"
      :title_size = "section_title_size"
      text_color ="white"
      circle_color="chimalli-primary-dark-color"
      @loading="on_load"
    >
    <template v-slot:footer>

            <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span>
            <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
              Obtenido
            </div>

            <div class="mb--md front-page__buttons flex-wrap">
              <Button text="Poster cualitativo"  color="#3CB443" hover_color="$3CB443" @on_click="on_click('https://drive.google.com/file/d/1jwLAYuWCvnlD03SzPzNo-YjVT3JRU0dQ/view?usp=share_link')" />
              <Button text="Poster cuantitativo" color="#3CB443" hover_color="$3CB443" @on_click="on_click('https://drive.google.com/file/d/1cJNC80CM7HgBY-qRj_1m_NY1MMEi8dQb/view?usp=share_link')"/>
              <Button text="Infografia tecnica"  color="#3CB443" hover_color="$3CB443" @on_click="on_click('https://youtu.be/PdHZVucYxXk?list=PLImGqhUs3WnusWlO0_H8HyozWH89D1y1x')" />
            </div>

    </template>
  </PlatformFrontPage>
  
  <SimpleSection title="Servicio de confiabilidad y transporte de datos sensibles" :title_size="section_title_size" subtitle="">
    <template v-slot:body>
        <div class="flex justify-content--center">
          <img @load="on_load" src="/images/chimalli/chimalli-0.png" alt="CHIMALLI_0">
        </div>
    </template>
  </SimpleSection>
  <Separator type="chimalli"/>
  <SimpleSection title="Servicios de seguridad informática" :title_size="section_title_size" subtitle="">
    <template v-slot:body>
        <div class="flex justify-content--center">
          <img @load="on_load" src="/images/chimalli/chimalli-1.png" alt="CHIMALLI_0" width="900">
        </div>
    </template>
  </SimpleSection>
  <Separator type="chimalli"/>
  <SimpleSection title="Servicios de trazabilidad" :title_size="section_title_size" subtitle="">
    <template v-slot:body>
        <div class="flex justify-content--center align-items--center flex-direction--column">
          <img @load="on_load"  class="mb--lg" src="/images/chimalli/chimalli-2.png" alt="CHIMALLI_0" width="900">
          <div class="flex flex-direction--column">
            <h3 :class="{'text-size--sm':true}">El servicio de chimalli permite a sus usuarios la: </h3>
            <ul>
              <li :class="{['text-size--'+section_text_size]:true}">Gestión automática de contratos inteligentes. </li>
              <li :class="{['text-size--'+section_text_size]:true}">Gestión automática de transacciones.</li>
              <li :class="{['text-size--'+section_text_size]:true}">Verificabilidad de transacciones de forma confidencial.</li>
            </ul>

          </div>
        </div>
    </template>
  </SimpleSection>
  <Separator type="chimalli"/>
  <Footer/>
</template>

<script>

import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Section from "../components/Section.vue"
import PortionSection from "../components/PortionSection.vue"
import PlatformFrontPage from "../components/PlatformFrontPage.vue"

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Navbar from "../components/Navbar.vue"
import useBreakpoints from "vue-next-breakpoints";
import Separator from "../components/Separator.vue"
import SimpleSection from "../components/SimpleSection.vue"
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
  // mounted(){
  //     this.$nextTick(()=>{
  //         this.loading=false;
  //     })
  // },
  components:{ Footer, Card, Section, PortionSection, PlatformFrontPage, Carousel, Slide, Pagination, Navigation, Navbar, Separator, SimpleSection },

  data() {
        return {
            loaded_components:0,
            loading:true,
            autoplay:'5000',
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
  computed: {
      is_mobile(){
        return this.breakpoints.mobile.matches || this.breakpoints.table.matches
      },
      section_text_size(){
        return this.is_mobile ? 'md' : 'sm'
      },
      section_title_size(){
        return this.is_mobile ? 'sm':'lg'
      },
      carousel_width(){
        return this.is_mobile ? '350px':'500px'
      }
  },
  methods:{

      on_click(url){
        window.open(url,"_blank")
      },
      on_load(){
        this.loaded_components+=1;
        // console.log("LOAD_COMPONENT",this.loaded_components)
        if(this.loaded_components==5){
          this.loading=false
        }
      }
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

/* .resaltar {
  align-self: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  width: 200px;
  height: 30px;
} */

/* .resaltar-blue {
  align-self: center;
  background-color: #356FE1;
  border-radius: 10px;
  margin-top: 20px;
  width: 200px;
  height: 50px;
} */

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

/* .circle {
  background-color: #356FE1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-self: center;
  padding: auto;
} */

.circle h2 {
  color: white;
  text-align: center;
}

.carousel__slide {
  padding: 10px;
  /* width: 300px !important; */
  /* background: red; */
}
/* .carousel__viewport{ */
  /* width: 500px; */
  /* height: 600px; */
/* } */
/* .carousel__viewport{
  width: 500px;
}  */
</style>
