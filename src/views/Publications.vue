<template>
  <transition name="loading">
      <Loader v-if="loading"/>
  </transition>
  <Navbar 
    :text_color_normal ="'black'" 
    :text_color_scrolled="'black'" 
    :background_color="'white'" 
    :scrolled_background_color="'white'"
    :bars_color="'black'"
    :scrolled_bars_color="'black'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
    @loading="on_load"
  /> 
  <PlatformFrontPage title="Publicaciones" image="/images/publications/publications.png" index="6" :color="color"
      :dark_color="dark_color" image_width="250" :circle_color="dark_color" text_color="white">
    <template v-slot:footer>
      <!-- <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span> -->
      <!-- <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
            Obtenido
          </div> -->
      <!-- <div class="mb--md front-page__buttons flex-wrap">
            <Button title="Poster cualitativo" :color="color" :dark_color="dark_color" />
            <Button title="Poster cuantitativo" :color="color" :dark_color="dark_color" />
            <Button title="Software" :color="color" :dark_color="dark_color" />
            <Button title="Infografia tecnica" :color="color" :dark_color="dark_color" />
            <Button title="Infografia general" :color="color" :dark_color="dark_color" />
          </div> -->
    </template>
  </PlatformFrontPage>
  <div :class="{'pa--lg':true, 'publications-wrapper':true}">
    <div v-for="publication in publications" :class="{ 'pa--sm': true, 'publication': true, 'w-100': is_mobile , 'h-mobile':is_mobile }"
      @click="on_click(publication)">
      <div class="publication__img-wrapper">
        <img @load="on_load" class="publication__img" src="/images/publications/publication.png" alt="">
      </div>
      <div :class="{'publication__desc':true, 'flex':true,'flex-direction--column':true,'justify-content--space-between':true}">
        <h2 :class="{'publication__title':true,['text-size--'+title_size]:true}">{{ publication.title }}</h2>
        <span :class="{'publication__subtitle':true,['text-size--'+subtitle_size]:true}">{{ publication.subtitle }}</span>
      </div>
    </div>
  </div>
<Separator type="publications"/>
  <Footer @loading="on_load" />

</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import useBreakpoints from "vue-next-breakpoints";
import Separator from '../components/Separator.vue'
export default {
  setup() {
    const breakpoints = useBreakpoints({
      mobile: [320, 768], // max-width: 600px
      table: [768, 1024],
      desktop: [1281] // min-width: 601px
    });

    return {
      // If you want to use different key, feel free do do so, e.g.:
      // mediaqueries: breakpoints
      // and then use mediaqueries.desktop.matches etc.
      breakpoints
    };
  },

  // mounted(){
  //     this.$nextTick(()=>{
  //         this.loading=false;
  //     })
  // },
  computed: {
    is_mobile() {
      return this.breakpoints.mobile.matches || this.breakpoints.table.matches
    },
    title_size(){
      return this.is_mobile ? "md":"md"
    },
    subtitle_size(){
      return this.is_mobile ? "xs" :"xs"
    }
  },
  components: {
    Footer, Card, PlatformFrontPage,
    Carousel, Slide, Pagination, Navigation, Navbar, Button,Separator
  },

  methods: {
    on_click: function (publication) {
      // console.log("CLICK ON", publication)
      window.open(publication.url, "_blank")
    },
      on_load(){
        this.loaded_components+=1;
        // console.log("LOAD_COMPONENT",this.loaded_components)
        if(this.loaded_components==16){
          this.loading=false
        }
      },
  },
  data() {
    return {
      loaded_components:0,
      loading:true,
      publications: [
        {
          title: "A Federated Content Distribution System to Build Health Data Synchronization Services.",
          subtitle: "2021 29th Euromicro International Conference on Parallel, Distributed and Network-Based Processing (PDP)",
          url: "http://muyal.tamps.cinvestav.mx/resources/congreso/A_Federated_Content_Distribution_System_to_Build_Health_Data_Synchronization_Services.pdf"
        },
        // {
        //   title: "SeRSS: a storage mesh architecture to build serverless reliable storage services.",
        //   subtitle: "2021 30th Euromicro International Conference on Parallel, Distributed and Network-Based Processing (PDP) [En revisión]",
        //   url: "http://muyal.tamps.cinvestav.mx/resources/congreso/SeRSS_a_storage_mesh_architecture_to_build_serverless_reliable_storage_services.pdf"
        // },
        {
          title: "A WoT-Based Method for Creating Digital Sentinel Twins of IoT Devices",
          subtitle: "",
          url: "http://muyal.tamps.cinvestav.mx/resources/revista/A_WoT-Based_Method_for_Creating_Digital_Sentinel_Twins_of_IoT_Devices.pdf"
        },
        {
          title: "A novel transversal processing model to build environmental big data services in the cloud",
          subtitle: "Environmental Modelling and Software Q1.",
          url: "http://muyal.tamps.cinvestav.mx/resources/revista/A_novel_transversal_processing_model_to_build_environmental_big_data_services_in_the_cloud.pdf"
        },
        {
          title: "FedFlow: A Federated Platform to Build Secure Sharing and Synchronization Services for Health Dataflows",
          subtitle: "2021 Computing [En revisión]",
          url: "http://muyal.tamps.cinvestav.mx/resources/revista/FedFlow_a_federated_platform_to_build_secure_sharing_and_synchronization_services_for_health_dataflows.pdf"
        },
        {
          title: "PuzzleMesh: A puzzle model to build mesh of agnostic services for edge-fog-cloud.",
          subtitle: "IEEE Transactions on Services Computing. Q1 [EN REVISIÓN].",
          url: "http://muyal.tamps.cinvestav.mx/resources/revista/PuzzleMesh_A_puzzle_model_to_build_mesh_of_agnostic_services_for_edge-fog-cloud.pdf"
        },
        {
          title:"Modelado Funcional de Contenedores Virtuales Docker.",
          subtitle:"Hinojosa-Tijerina, M., Gonzalez-Compean, J. L., and Lopez-Arevalo, I. 2021.",
          url:"http://muyal.tamps.cinvestav.mx/resources/tesis/Modelado_Funcional_de_Contenedores_Virtuales_Docker.pdf"
        },
        {
          title:"Método de construcción enfocado en contenedores virtuales para la composición de sistemas distribuidos y paralelos para el procesamiento de grandes volúmenes de datos.",
          subtitle:"Hugo G. Reyes-Anastacio, J. L. Gonzalez-Compeán, and Victor J. Sosa-Sosa. 2021-2022.",
          url:"http://muyal.tamps.cinvestav.mx/resources/tesis/Metodo_de_construccion_enfocado_en_contenedores_virtuales_para_la_composicion_de_sistemas_distribuidos_y_paralelos_para_el_procesamiento_de_grandes_volumenes_de_datos.pdf"
        },
        {
          title:"Método de construcción de servicios de seguridad informática para sistemas de continuidad en infraestructurasheterogéneas de cómputo.",
          subtitle:"Catherine A. Torres-Charles,J. L.Gonzalez-Compeán, and Miguel Morales-Sandoval. 2021-2022",
          url:"http://muyal.tamps.cinvestav.mx/resources/tesis/Metodo_de_construccion_de_servicios_de_seguridad_informatica_para_sistemas_de_continuidad_en_infraestructuras_heterogeneas_de_computo.pdf"
        },
        {
          title:"Construcción de sistemas auto-adaptables en la nube mediante patrones dinámicos.",
          subtitle:"Genaro J. Sánchéz-Gallegos, J. L. Gonzalez-Compeán, and Jesus Carretero. 2021-2022.",
          url:"http://muyal.tamps.cinvestav.mx/resources/tesis/Construccion_de_sistemas_auto-adaptables_en_la_nube_mediante_patrones_dinamicos.pdf"
        },
        {
          title:"Método adaptativo-reactivo de replicación para sistemas de almacenamiento de alta disponibilidad.",
          subtitle:"Jesus I. Castillo-Barrios, J. L. Gonzalez-Compeán, and Iván López-Arévalo. 2021-2022.",
          url:"http://muyal.tamps.cinvestav.mx/resources/tesis/Metodo_adaptativo-reactivo_de_replicacion_para_sistemas_de_almacenamiento_de_alta_disponibilidad.pdf"
        },
        {
          title:"Método de orquestación para servicios de fusión de datos definidos por variables espaciotemporales.",
          subtitle:"José C. Morín-García, J. L. Gonzalez-Compeán, and Iván López-Arévalo. 2021-2022.",
          url:"http://muyal.tamps.cinvestav.mx/resources/tesis/Metodo_de_orquestacion_para_servicios_de_fusion_de_datos_definidos_por_variables_espacio-temporales.pdf"
        },
        {
          title:"Carrizales-Espinoza, D., Sánchez-Gallegos, D. D., Gonzalez-Compean, J. L., Carretero, J., & Marcelin-Jimenez, R. (2022, March). SeRSS: a storage mesh architecture to build serverless reliable storage services.",
          subtitle:"In 2022 30th Euromicro International Conference on Parallel, Distributed and Network-based Processing (PDP) (pp. 88-91). IEEE.",
          url:"http://muyal.tamps.cinvestav.mx/resources/congreso/SeRSS_a_storage_mesh_architecture_to_build_serverless_reliable_storage_services.pdf"
        },
        {
          title:"Torres-Charles, C. A., Carrizales-Espinoza, D. E., Sanchez-Gallegos, D. D., Gonzalez-Compean, J. L., Morales-Sandoval, M., & Carretero, J. (2022, September). SecMesh: An efficient information security method for stream processing in edge-fog-cloud.",
          subtitle:"In Proceedings of the 2022 7th International Conference on Cloud Computing and Internet of Things (pp. 8-16).",
          url:"http://muyal.tamps.cinvestav.mx/resources/congreso/SecMesh_An_efficient_information_security_method_for_stream_processing_in_edge-fog-cloud.pdf"
        },
        {
          title:"Garcia, J. C. M., Lugo, J. A. B., Compean, J. L. G., Arevalo, I. L., Carretero, J., & Oropeza, M. C. (2022, September). Data and task orchestration defined by spatio-temporal variables for healthcare data science services.",
          subtitle:"In Proceedings of the 9th International Conference on Bioinformatics Research and Applications (pp. 95-101).",
          url:"http://muyal.tamps.cinvestav.mx/resources/congreso/Data_and_task_orchestration_defined_by_spatio-temporal_variables_for_healthcare_data_science_services.pdf"
        },
        {
          title:"Sanchez-Gallegos, G., Sánchez-Gallegos, D. D., Gonzalez-Compean, J. L., & Carretero, J. (2022, May). On the building of self-adaptable systems to efficiently manage medical data.",
          subtitle:"In 2022 22nd IEEE International Symposium on Cluster, Cloud and Internet Computing (CCGrid) (pp. 985-992). IEEE.",
          url:"http://muyal.tamps.cinvestav.mx/resources/congreso/On_the_building_of_self-adaptable_systems_to_efficiently_manage_medical_data.pdf"
        },
        // {
        //   title:"Lopez-Arevalo, I., Gonzalez-Compean, J. L., Hinojosa-Tijerina, M., Martinez-Rendon, C., Montella, R., & Martinez-Rodriguez, J. L.",
        //   subtitle:"(2021). A wot-based method for creating digital sentinel twins of iot devices. Sensors, 21(16), 5531.",
        //   url:"http://muyal.tamps.cinvestav.mx/.pdf"
        // },
        // {
        //   title:"Carrizales-Espinoza, D., Sanchez-Gallegos, D. D., Gonzalez-Compean, J. L., & Carretero, J. (2022). FedFlow: A federated platform to build secure sharing and synchronization services for health dataflows.",
        //   subtitle:"Computing, 1-19.",
        //   url:"http://muyal.tamps.cinvestav.mx/.pdf"
        // },
        // {
        //   title:"On the Efficient Delivery and Storage of IoT Data in Edge-Fog-Cloud Environments. Lopez-Arevalo, I., Gonzalez-Compean, J. L., Hinojosa-Tijerina, M., Martinez-Rendon, C., Montella, R., & Martinez-Rodriguez, J. L.",
        //   subtitle:"(2021). A wot-based method for creating digital sentinel twins of iot devices. Sensors, 21(16), 5531.",
        //   url:"http://muyal.tamps.cinvestav.mx/.pdf"
        // },
        // {
        //   title:"Sanchez-Gallegos, D. D., Gonzalez-Compean, J. L., Carretero, J., Marin, H., Tchernykh, A., & Montella, R. (2022). PuzzleMesh: A puzzle model to build mesh of agnostic services for edge-fog-cloud.",
        //   subtitle:"IEEE Transactions on Services Computing.",
        //   url:"http://muyal.tamps.cinvestav.mx/.pdf"
        // },
        // {
        //   title:"Xel: A cloud-agnostic data platform for the design-driven building of high-availability data science services (2023). Juan Armando Barrón Lugo, Jose luis Gonzalez, Ivan Lopez-Arevalo, Jesus Carretero and Jose L. Martinez-Rodriguez.",
        //   subtitle:"Future Generation Computer Systems.(bajo revisiones menores en preparación para publicación)",
        //   url:"https://1drv.ms/b/s!AtMgnjYpElvzg5YVJoRy-6lqt9XtyQ?e=uzbR2H"
        // },

      ],
      color: "publications-primary-color",
      dark_color: "publications-primary-dark-color",
      // color : "bg--chimalli-primary-color"
    };
  },
}
</script>
<style scoped>
.h-mobile{
  height: auto !important;
  /* height: 100px !important; */
}
.h-desktop{
  height: auto !important;
  /* height: 200; */
}
.publications-wrapper {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: ; */
}

.publication {
  background: #f3f3f3;
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* height: 200px; */
  height: auto;
  border-radius: 10px;
  display: flex;
  /* width: 500px; */
  width: 60%;
  margin-bottom: 10px;
}

.publication:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: transform ease-out 400ms;
}

.publication__title {
  /* font-size: 18px; */
}

.publication__subtitle {
  /* font-size: 12px; */
  color: #7e7e7e;
}

.publication__img-wrapper {
  /* background: red; */
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-items: ce; */
  margin-right: 20px;
  width: 10%;
  

}
.publication__desc {
  width: 90%;
}
.publication__img {
  /* width: 80px; */
  width: 50px;
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