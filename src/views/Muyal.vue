<template>
    <Navbar 
    :color="color" 
    :dark_color="dark_color" 
    :text_color_normal ="'black'" 
    :text_color_scrolled="'black'" 
    :background_color="'white'" 
    :scrolled_background_color="'white'"
    :bars_color="'black'"
    :scrolled_bars_color="'black'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
    />
    <PlatformFrontPage 
        :title ="is_mobile ?'Platforma Tecnologica para E-Salud': 'Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.'"
        image="/images/muyal/3trz.png"
        index="1"
        :color ="color"
        :dark_color ="dark_color"
        image_width = "600"
        title_size ="sm"
        title_width = "80"
        text_color="black"
    >
    <template v-slot:footer>
        <!-- :class ="{'flex':is_mobile,'align-items--center':is_mobile,'justify-content--center':is_mobile}" -->
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
    <div class="sections-wrapper">
        <PortionSection part1_width ="60" part2_width="40"  :invert="is_mobile" :background_color="portion_bg_color">
            <template v-slot:part1>
                <div class ="flex justify-content--center align-items--center">
                    <img :class="{'image-size__sm':!is_mobile,'image-size__lg':is_mobile}" :src="sections.section_0.images[0].src" :alt="sections.section_0.images[0].alt">
                </div>
            </template>
            <template v-slot:part2>
                <div :class="{'mb--lg':is_mobile}">
                    <h2 :class="{['text-size--'+title_size]:true, 'mb--md':is_mobile}">{{ sections.section_0.title }}</h2>
                    <p :class="{['text-size--'+text_size]:true, 'text-align--justify':true}">{{ sections.section_0.text }}</p> 
                </div>
            </template>
        </PortionSection>
        
        <Section :title = "sections.section_1.title" color="black" :background_color="section_bg_color">
            <p :class="{'pa--xl':true, ['text-size--'+text_size]:true,'text-align--justify':true}">{{ sections.section_1.text }}</p>
             <carousel :style="{'width':'100%'}"  :breakpoints = "breakpoints" :wrap-around="true" :autoplay="4000">
                <slide v-for="fb in feature_boxes" :key="fb.title">
                    <FeatureBox :image="fb.image" :title = "fb.title" :items ="fb.items" :hover_color="fb.hover_color" />
                </slide>
                <template #addons>
                    <!-- <navigation /> -->
                    <pagination />
                </template>
            </carousel>
        </Section>
        <!-- _______________________________________________________________ -->
        <PortionSection part1_width ="60" part2_width="40" :column="is_mobile" :background_color="portion_bg_color" >
            <template v-slot:part2>
                <div class ="flex justify-content--center align-items--center">
                    <img :src="sections.section_2.images[0].src" :alt="sections.section_2.images[0].alt" :width="sections.section_2.images[0].width">
                </div>
            </template>
            <template v-slot:part1>
                <div :class="{'mb--lg':is_mobile}">
                    <h2 :class="{['text-size--'+title_size]:true  , 'mb--md':is_mobile}">{{ sections.section_2.title }}</h2>
                    <p :class="{['text-size--'+text_size]:true, 'text-align--justify':true}">{{ sections.section_2.text }}</p> 
                </div>
            </template>
        </PortionSection>

    </div>
    <Footer/>


</template>

<script>

import FeatureBox from '../components/FeatureBox.vue';
import IconCard from '../components/IconCard.vue';
import PlatformsNav from '../components/PlatformsNav.vue';
import PortionSection from '../components/PortionSection.vue';
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import useBreakpoints from "vue-next-breakpoints";
import Navbar from '../components/Navbar.vue';


export default {
    setup(){
        const breakpoints = useBreakpoints({
            mobile:[240,768], // max-width: 600px
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
      },
      title_size(){
        return this.is_mobile ? 'xxl' : 'md';
      },
      text_size(){
        return this.is_mobile ? 'lg' : 'sm';
      }
    },
    // created(){
    //         this.breakpoints.mobile.on("enter", (mq) => {``
    //             console.log("Entered mobile breakpoint");
    //             console.log("Media Query", mq);
    //             this.items_to_show = 2
    //         });

    //         this.breakpoints.mobile.on("leave", (mq) => {
    //             console.log("Left mobile breakpoint");
    //             console.log("Media Query", mq);
    //             this.items_to_show = 4
    //         });`
    // },
    data() {
        return {
            section_bg_color:"white",
            portion_bg_color:"light-grey",
            color:"white",
            dark_color:"black",
            feature_boxes:[
                {
                    title:"Nez: Servicio de consutrccion de sistemas e-Salud",
                    items:[
                        "Construye, configura y ejecuta sistemas de e-Salud en minutos.",
                        "Crea sistemas flexibles, portables, y modulares.",
                        "Tecnología propia e indepentiende del proveedor de hardware y software.",
                        "Usar los recursos de tu computadora al máximo.",
                        "Servicios de conexión con Alwa, Chimalli y Painal."
                    ],
                    image:"/images/nez/nez.png",
                    hover_color:"#397DFF"
                },
                {
                    title:"Chimalli: Servicio de acceso a servicios de e-salud y/o sistemas de analítica",
                    items:[
                        "Agrega seguridad a sistemas de e-Salud en forma automática.",
                        "Cumplé con las normas internacionales de manera automática y transparente.",
                        "Asegurar la confidencialidad de tus datos en cualquier lugar y momento.",
                        "Registra eficientemente las operaciones realizadas en la blockchain.",
                        "Servicios de conexión con Painal y Alwa."
                    ],
                    image:"/images/chimalli/chimalli.png",
                    hover_color:"#48D951"
                },
                {
                    title:"Painal: Servicio para el transporte y almacenamiento de datos médicos",
                    items:[
                        "Publica tu datos a diferentes niveles (intra o inter institucional).",
                        "Almacena tus datos de forma eficiente y con tolerancia a fallos.",
                        "Distribuye datos sensibles de forma segura.",
                        "Comparte tus datos con múltiples usuarios.",
                        "Servicios de conexión con Alwa."
                    ],
                    image:"/images/painal/painal.png",
                    hover_color:"#A465FA"
                },

                {
                    title:"Xelhua: Servicio de analitica y estadistica de datos",
                    items:[
                        "Crea automáticamente servicios de análisis y estadística de datos.",
                        "No requieres programas las aplicaciones, solo utilizar alguna disponible en el catálogo de servicios.",
                        "Combina diferentes servicios de preparación, análisis y visualización de datos.",
                        "Despliega aplicaciones de análisis de datos tolerantes a fallos.",
                        "Servicios de conexión con Alwa, Chimalli y Painal."
                    ],
                    image:"/images/xelhua/xelhua.png",
                    hover_color: "#F25362"
                },

                {
                    title:"Alwa: Base de datos producidas por e-Salud",
                    items:[
                        "Servicios de deposito en repositorios FAIR.",
                        "Base anónima de datos clínicos y de imágenes radiológicas (INR-PACS).",
                        "Base de datos generados a partir del análisis de los datos.",
                        "Aplicaciones de seguridad, analítica, procesamiento y acceso a datos.",
                        "Base de datos a-Prevenir.",
                        "Servicios de conexión con Xelhua, Chimalli y Painal.",
                    ],
                    image:"/images/alwa/alwa.png",
                    hover_color: "#FF9237"
                }
            ],
            sections: {
                section_0:{
                    title: "¿Qué es Muyal-Ilal?",
                    text: "Crea  sistemas de  analítica  (big  data)  basados  en  inteligencia  artificial  para  convertir datos (históricos estadísticos, notas clínicas, datos de dispositivos médicos, imagenología etc.) en información. Nez y Xelhua guían al personal médico para crear, en minutos sin requerir licencias ni conocimientos tecnológicos o de programación, sistemas de e-salud para soportar procesos de toma de  decisiones  o  asistencia  a  diagnósticos. ",
                    images:[
                        {
                            src:"/images/muyal/section_0_0.png",
                            alt:"MUYAL_0",
                            width:"600"
                        }
                    ]
                },
                section_1:{
                    title:"Plataformas",
                    text:"Muyal esta conformado por cinco plataformas que proporcionan servicios entre los cuales se encuentran: creacion de sistemas de e-Salud(Nez), analisis estadisticos (Xelhua), comparticion de datos (Painal), servicios de seguridad (Chimalli) y repositorios FAIR (Alwa).",
                    images:[]
                },
                section_2:{
                    title:"Motivacion y justificacion",
                    text:"La  atención  médica  en  México  es  crucial  para mejorar  el  bienestar  de  los ciudadanos. Esta práctica profesional produce escenarios de grandes volúmenes de datos (big data) producidos por diversas fuentes heterogéneas (sensores, dispositivos médicos,  etc.)  que deben  ser  procesados  rápidamente  (velocidad)  por  un  conjunto heterogéneo de sistemas de expedientes clínicos electrónicos o SECE(variedad) que entregan  información útil  a  diferentes  repositorios  de datos  (veracidad-valor).  El Plan Nacionalde desarrollo2019-2024describe las dimensiones de este escenario: “afinales de 2018, el IMSS contaba con 68.5 millones de derechohabientes, el ISSSTE con más de 13 millones, IMSS-Secretaría de Bienestar con un total de 13 millones, asícomo 2 millones de Sedena, Semar y Pemex”.",
                    images:[
                        {
                            src:"/images/muyal/section_2_0.png",
                            alt:"MUYAL_0",
                            width:"400"
                        },
                        {
                            src:"/images/muyal/section_2_1.png",
                            alt:"MUYAL_1",
                            width:"400"
                        },
                        {
                            src:"/images/muyal/section_2_2.png",
                            alt:"MUYAL_2",
                            width:"400"
                        }
                    ]
                }
            },
            steps_descriptions:{
                step1:{
                    title:"1. Crea sistemas e-Salud",
                    steps:[
                        {
                            title:"1. Elige los componentes de tu flujo de datos",
                            text:"Descubrimiento y reusabilidad de servicios de ciencia de datos disponibles en Muyal-Nez",
                            image:"/images/icons/elige.svg"
                        },

                        {
                            title:"2. Integra los componentes",
                            text:"Integración de software automática e instalación en Muyal-Nez inmediata.",
                            image:"/images/icons/savefile.svg"
                        },
                        {
                            title:"3. Despliega el sistema",
                            text:"Nez permite la creación de sistemas de ciencia de datos no estructurados orientada al diseño funcional.",
                            image:"/images/icons/rocket.svg"
                        },
                        {
                            title:"4. Procesa datos",
                            text:"Recibe cualquier tipo de dato no estructurado. Ciencia de datos como servicio, y construcción de sistemas paso a paso en la nube.",
                            image:"/images/icons/engrane.svg"
                        },

                    ]
                },
                step2:{
                    title:"2. Analiza tus datos",
                    steps:[
                        {
                            title:"1. Explora y procesa datos estructurados",
                            text:"Recibe cualquier tipo de dato estructurado y lo conecta automáticamente con servicios de analítica.",
                            image:"/images/icons/search_folder.svg"
                        },
                        {
                            title:"2. Diseña tus flujos de datos",
                            text:"Xelhua cuenta con un catálogo de servicios para aprendizaje maquina previamente configurados. Además, es posible utilizar aplicaciones de fusión e integración de datos",
                            image:"/images/icons/elige.svg"
                        },
                        {
                            title:"3. Analiza resultados",
                            text:"Xelhua proporciona soporte para visualizar datos en mapas de manera sencilla.",
                            image:"/images/icons/Diagrama.svg"
                        },
                        {
                            title:"4. Comparte",
                            text:"Xelhua te permite compartir los flujos de datos que has diseñado, así como los resultados que has obtenido.",
                            image:"/images/icons/share.svg"
                        }
                    ]
                },
                step3:{
                    title:"3. Asegura tus datos",
                    steps:[
                        {
                            title:"1. Control de acesso",
                            text:"Chimalli permite el manejo automático de llaves  y huellas criptográficas.",
                            image:"/images/icons/access.svg"
                        },
                        {
                            title:"2. Privacidad",
                            text:"Integra a tus sistemas los servicios criptográficos de Chimalli. Chimalli asegura el anonimato de los datos, así como la confidencialidad mediante el cifrado de los datos entrantes y salientes de los sistemas de e-Salud. Además, permite detectar alteraciones en los datos.",
                            image:"/images/icons/laptop_segura.svg"
                        },
                        {
                            title:"3. Confiabilidad",
                            text:"Chimalli también provee confiabilidad, la cual se consigue mediante mecanismos de tolerancia a fallos. La confiabilidad se aplica para mitigar los problemas causados por las deficiencias de la infraestructura donde se procesan y almacenan los datos.",
                            image:"/images/icons/desktop.svg"
                        },
                        {
                            title:"4. Trazabilidad",
                            text:"Creación automática de una red blockchain para cada sistema de ciencia de datos. Chimalli permite la gestión automática de contratos inteligentes, la gestión automática de transacciones y la verificabilidad de transacciones de forma confidencial.",
                            image:"/images/icons/red.svg"
                        }
                    ]
                },

                step4:{
                    title:"4. Comparte tus datos",
                    steps:[
                        {
                            title:"1. Comparte",
                            text:"Painal cuenta con esquemas de publicación y suscripción de catálogos (fuentes de datos, información y conocimiento).",
                            image:"/images/icons/uploap_document_green.svg"
                        },
                        {
                            title:"2. Almacena",
                            text:"Painal cuenta con un sistema de almacenamiento en la nube tolerante a fallos.",
                            image:"/images/icons/guardar.svg"
                        },
                        {
                            title:"3. Transporte de datos",
                            text:"Crea sistemas intra e inter institucionales. Painal te permite compartir datos de forma interna y externa, es decir, dentro de una misma instirución y hacia otras.",
                            image:"/images/icons/mails.svg"
                        },
                        {
                            title:"4. Distribuye",
                            text:"Los servicios de logística de Painal permiten realizar el intercambio de datos de un sistema de ciencia de datos.", 
                            image:"/images/icons/folder-yellow-open.svg"
                        }
                    ]
                },

                step5:{
                    title:"5. Entrega tus datos",
                    steps:[
                        {
                            title:"1. Descarga y desempaca",
                            text:"Chimalli hacen factible que las instituciones de salud, profesionales de la salud, pacientes y/o comunidad científica pueda acceder a servicios de e-salud y/o sistemas de analítica.",
                            image:"/images/icons/download_document_green.svg"
                        },
                        {
                            title:"2. Consume",
                            text:"Chimalli te permite obtener información útil (sin comprometer la seguridad de los datos) que ayude a mejorar la toma de decisiones en escenarios de cuidado de la salud.",
                            image:"/images/icons/document_encrypted.svg"
                        },
                        {
                            title:"3. Verifica",
                            text:"Chimalli permite detectar alteraciones en los datos. Todo esto se consigue mediante esquemas de criptografía de siguiente generación, lo que permite el manejo de datos como objetos seguros.",
                            image:"/images/icons/access.svg"
                        },
                    
                    ]
                },

                step6:{
                    title:"6. Deposita en repositorios",
                    steps:[
                        {
                            title:"1. Descarga",
                            text:"Aplicativos de seguridad para proporcionar integridad, tolerancia a fallas, trazabilidad, entre otros. Aplicativos analítica para machine o deep learning, estadística y mining. Aplicativos de procesamiento para realizar correcciones, 3dmesh, codificadores. Fuentesde datos como data lakes, warehouse, cvs.",
                            image:"/images/icons/document-save-as.svg"
                        },
                        {
                            title:"2. Usa",
                            text:"Patrones de publicación y subscripción, API para programadores, Interfaces para productores/consumidores, Carpetas de diseño, Código fuente de algoritmos de integración.",
                            image:"/images/icons/folder-yellow-open.svg"
                        },
                        {
                            title:"3. Comparte",
                            text:"Comparte tus resultados, flujos de ciencia de datos, aplicaciones y software de manera fácil y sencilla.",
                            image:"/images/icons/share.svg"
                        },
                        {
                            title:"4. Visualiza",
                            text:"Visualiza tus recursos y resultados fácilmente.",
                            image:"/images/icons/desktop.svg"
                        }
                    ]
                }
            },
            breakpoints: {
                // 700px and up
                240: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                920: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
            }

            
        };
    },
   components: {
        PlatformsNav,
        FeatureBox,
        PortionSection,
        IconCard,
        // ____
        Carousel,
        Slide,
        Pagination,
        Navigation,
        Navbar,
        PlatformFrontPage
    }
}
</script>


<style scoped>
/* __________________________ */

/* WTF! */
.carousel {
    z-index: 0;
    /* width: 100% !important; */
}
/* .carousel */

.sections-wrapper{
    width: 100vw;
    /* background: yellow; */
}
.steps-wrapper{
    width: 80vw;
}
.steps_descriptions {
    display: flex;
    justify-content: center;
}
.steps_descriptions-inner{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:10px;
    width: 50vw;
}

.step__description{
    background: white;
    height: 400px;
    border-radius: 10px;
}
.step__header{
    /* background: red; */
    padding: 40px;
    /* width: 1000px; */
}
.step__header__title{
    font-size: 2rem;
    text-align: center;
}
/* ________________________ */
.feature-boxes-wrapper{
    display: grid;
    grid-template-columns: 350px 350px 350px;
    grid-gap:10px;
    width: fit-content;
    max-width: fit-content;
}

/* .separator{
    background:#2F2F2F;
    width:100%;
    --size: 10px;
    height: var(--size);
    position: absolute;
    top:calc(100% - var(--size));
    left:0;
} */

.front-page-wrapper{
    /* background: red; */
    width: 100vw;
    height: 100vh;
}
.front-page {
  position: relative;
  width: 100%;
  min-width: 1500px;
  height: 100%;
  
  background: var(--color-black);
  color:var(--color-white);
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

.front-page__container {
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  width: 70%;
}
.front-page__logo{
    margin-bottom: 50px;
}
.front-page__logo img{
    width: 400px;
}

.front-page__text-container{
  margin-bottom: 50px;
}
.front-page__text{
  font-weight: bold;
  font-size:1.5rem;
}

.front-page__project-number{
  background: var(--color-white);
  color: var(--color-black);
  padding: 15px;
  border-radius: 5px;
  font-size: 1.5rem;
}

/* .carousel__viewport{
  width: 1000px;
}  */
</style>
