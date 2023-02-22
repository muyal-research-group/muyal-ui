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
    <div ref="banner" class="front-page-v2 pa--xl flex justify-content--center align-items--center flex-direction--column">
        <img :class="{'mb--lg':true}" :style="{'z-index':100}" src="/images/muyal/muyal-white.png" width="300" alt="">
        <p :style="{'z-index':100}" :class="{'w-60':!is_mobile,'front-page-v2--title':true, 'text-align--center':!is_mobile,'text-align--justify':is_mobile,'mb--lg':true}">Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.</p>
        <div :style="{'z-index':100}" class="flex">
            <Button 
                class="mr--xs" 
                text="Ver más" 
                color="black" 
                hover_color="white" 
                text_color="white"
                hover_text_color="black"
                @on_click="navigate('/')"
            />
            <Button 
                text="Contacto" 
                color="black" 
                hover_color="white" 
                text_color="white"
                hover_text_color="black"
                @on_click="navigate('/contact')"
            />
        </div>
    </div>

    <!-- <PlatformFrontPage 
        :title ="is_mobile ?'Platforma Tecnologica para E-Salud': 'Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.'"
        image="/images/muyal/3trz.png"
        index="1"
        :color ="color"
        :dark_color ="dark_color"
        image_width = "350"
        title_size ="lg"
        title_width = "80"
        text_color="black"
        :invert="true"
    > -->
    <!-- <template v-slot:footer> -->
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
    <!-- </template> -->
    <!-- </PlatformFrontPage> -->
    <Separator />
    <SimpleSection title="Componentes principales: Servicios" subtitle="">
        <template v-slot:body>
            <carousel :style="{'width':'100%'}"  :breakpoints = "breakpoints" :wrap-around="true" :autoplay="5000" :pauseAutoplayOnHover="true">
                <slide v-for="fb in feature_boxes" :key="fb.title">
                    <FeatureBox :image="fb.image" :title = "fb.title" :items ="fb.items" :hover_color="fb.hover_color" />
                </slide>
                <template #addons>
                    <pagination />
                </template>
            </carousel>
        </template>
    </SimpleSection>
    
    <Separator/>
    <SimpleSection title ="Estrategias de acción" subtitle="Para cumplir con los objetivos del presente proyecto se han establecido las siguientes líneas de acción.">
        <template v-slot:body>
            <div class="flex justify-content--center" :style="{'position':'relative','z-index':'1000'}">
                <div class="cards-wrapper">
                    <Card v-for="o in objectives" :title="o.title" color="light-grey-1">
                        <template v-slot:content>
                            <p class="text-align--justify">{{ o.content }}</p>
                        </template>
                    </Card>
                </div>
            </div>
        </template>
    </SimpleSection>
    <Separator/>
    <SimpleSection title="" subtitle="">
        <template v-slot:body >
            <div :class="{'flex':true,'flex-direction--column-reverse':is_mobile,'align-items--center':is_mobile ,'justify-content--center':true}">
                <div :class="{'mr--md':!is_mobile, 'w-40':!is_mobile,'w-100':is_mobile, 'flex':true, 'justify-content--center':true}">
                    <div class="circle bg--light-grey-1 flex justify-content--center">
                        <img width="230" src="/images/muyal/mexico.png" alt="Mexico">
                    </div>
                </div>
                <div :class="{'w-60':!is_mobile,'w-100':is_mobile,'mb--xl':true}">
                    <h1 class="text-size--xl">Relevancia Nacional</h1>
                    <p class="text-size--sm text-align--justify">El beneficio inmediato de este proyecto sería que los médicos y radiólogos dispondrán de nuevas herramientas para la monitorización de sus pacientes, mientras que estos últimos tomarían conciencia del cuidado de su salud, incluyendo trastornos musculoesqueléticos y enfermedades crónico degenerativas como diabetes, hipertensión, EPOC, etc.</p>
                </div>
            </div>
        </template>
    </SimpleSection>

    <Separator/>
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
import Separator from "../components/Separator.vue";
import SimpleSection from '../components/SimpleSection.vue';
import Card from '../components/Card.vue'
// import { useNavbarStore } from '../stores/counter';
import Button from '../components/Button.vue';

export default {
    setup(){
        // const navbar_store = useNavbarStore();

        const breakpoints = useBreakpoints({
            mobile:[240,768], // max-width: 600px
            table:[768,1024],
            desktop: [1281] // min-width: 601px
        });

        return {
            // If you want to use different key, feel free do do so, e.g.:
            // mediaqueries: breakpoints
            // and then use mediaqueries.desktop.matches etc.
            breakpoints,
            // navbar_store
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
      }, 
    //   prevent_scroll(){
        // return this.navbar_store.
    //   }
    },
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
            },
            objectives:[
                {
                    title:"Objetivo 1",
                    content: "El grupo del CINVESTAV Tamaulipas estará encargado de crear, diseñar y desarrollar los servicios de la plataforma digital. Para esto, se realizará un estudio documental de las normas aplicables desde la perspectiva de cada uno de los grupos participantes para poder definir los requerimientos funcionales y no funcionales que deben cumplir los servicios a diseñar y desarrollar. Y considerar especialmente a los relacionados con los casos de uso planteados."
                },
                {
                    title:"Objetivo 2",
                    content:"El CINVESTAV Tamaulipas en conjunto con el grupo de la UAM trabajará en el levantamiento de requerimientos del grupo del INR para utilizar el diseño de la plataforma correspondiente al objetivo 1, y desarrollar los servicios que permitan adquisición, intercambio, almacenamiento y preservación de datos clínicos y de imágenes radiológicas (PACS)."
                },
                {
                    title:"Objetivo 3",
                    content:"Se diseñará y documentará el caso de uso de una red de distribución automática y almacenamiento seguro de imágenes y datos clínicos (PACS) siguiendo estándares tales como DICOM y Hl7 considerando las particularidades de operación del INR. Esta documentación servirá como base para el diseño correspondiente al objetivo particular 2."
                },
                {
                    title:"Objetivo 4",
                    content:"El grupo de CICESE diseñará y documentará el caso de estudio de tele-auscultación y tele-espirometría para definir los servicios, requerimientos funcionales y no funcionales que deberán ser proporcionados por la plataforma digital propuesta en este proyecto. Considerando los requerimientos definidos, el CICESE integrará y desarrollará en el sistema a-Prevenir© los bloques tecnológicos necesarios para desplegar el caso de estudio planteado. En conjunto con el CINVESTAV Tamaulipas, diseñará y desarrollará los mecanismos de interconexión entre el sistema a-Prevenir© para tele-auscultación y tele-espirometría con la plataforma digital."
                },
                {
                    title:"Objetivo 5",
                    content:"En conjunto con el INR el grupo del CINVESTAV Tamaulipas diseñará y documentará el conjunto de servicios necesarios para analítica en línea y de visualización en sistemas de información geográfica. Considerando los requerimientos definidos, el CINVESTAV Tamaulipas en conjunto con el INR desarrollará los servicios de analítica para desplegar el caso de estudio planteado en la plataforma digital. Los cuales serán probados en condiciones de laboratorio antes de la fase de despliegue."
                },
                {
                    title:"Objetivo 6",
                    content:"Las instituciones involucradas en el proyecto documentarán los servicios, tipos de datos y aplicaciones que pueden ser desplegadas utilizando la plataforma digital propuesta en este proyecto. De manera adicional, se documentará la metodología de acceso y utilización del repositorio para publicar datos anónimos y agregar algoritmos debidamente preparados para su uso para consumir en forma controlada los datos publicados y obtener información útil."
                },
            ]

            
        };
    },
   methods:{
        navigate(path){
            if(path=="/"){
                window.scrollTo({top:this.$refs.banner.clientHeight,behavior:"smooth"})
            }else{
                this.$router.push(path)
            }
        }
   },
   components: {
    PlatformsNav,
    FeatureBox,
    PortionSection,
    IconCard,
    Card,
    // ____
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Navbar,
    PlatformFrontPage,
    Separator,
    SimpleSection,
    Button
}
}
</script>


<style scoped>
/* __________________________ */
.front-page-v2{
    margin-top: 100px;
    /* background-color: rgba(0, 0,0, .1); */
    position: relative;
    background: url(/images/muyal/banner.jpg);
    color:white;

}

.front-page-v2:after{
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0,0, 0.7);
    /* z-index: 100; */
}
.cards-wrapper {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 20px;
    column-gap: 20px;
}
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
