<template>

    <!-- <div class="global_wrapper"> -->

    <div class="flex justify-content--center front-page-wrapper">
    <div class ="front-page">
        <div class="front-page__container">
            <div class="front-page__logo">
                <img src="../assets/muyal-white.png" alt="MUYAL_LOGO">
            </div>
            <div class="front-page__text-container">
            <p class="front-page__text">
                Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.
            </p>
            </div>
            <div class="front-page__project-number">
                <p>Proyecto numero: <b>41756</b></p>
            </div>
            <PlatformsNav></PlatformsNav>
        </div>
        <!-- <div class="separator"></div> -->
    </div>
    </div>
    <PortionSection part1_width ="60" part2_width="40">
        <template v-slot:part1>
            <div class ="flex justify-content--center">
                <img src="@/assets/muyal_steps.png" alt="STEPS" width="600">
            </div>
        </template>
        <template v-slot:part2>
            <div>
                <h2 class="text-size--xl">{{ sections.resume.title }}</h2>
                <p class="text-size--md text-align--justify">{{ sections.resume.text }}</p> 
            </div>
        </template>
    </PortionSection>
        

<!--         
        <div class=" sectionv2-wrapper">
            <div class="flex sectionv2-container">
                <div class="sectionv2-2">
                    <img width="500" src="@/assets/muyal-color.png" alt="">
                </div>
                <div class="flex flex-direction--column align-items--center sectionv2-title-wrapper sectionv2-1">
                    <h1 class="sectionv2-title">{{ sections.resume.title }}</h1>
                    <p class="text-size--md text-align--justify">
                    </p>
                </div>
            </div>
        </div> -->
        <!-- <Section class="bg--white"  :title = "sections.whatis.title" :color="sections.whatis.color" >
            <div class="pa--lg flex justify-content--center align-items--center">
                <div class="pa--md">
                    <p class="text-size--md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quia reprehenderit praesentium soluta fugit? Sit odio, inventore optio dolore omnis nisi tenetur maxime asperiores quod sed consequatur fuga rerum maiores.</p>
                </div>
                <div>
                <img width="600" src="../assets/muyal_steps.png" alt="">
                </div>
            </div>
        </Section> -->

        <Section title = "Plataformas" color="bg--black" >
            <p class="pa--xl text-size--md">Muyal esta conformado de cinco plataformas que proporcionan servicios entre los cuales se encuentran creacion de sistemas de e-Salud(Nez), analisis estadisticos (Xelhua), comparticion de datos (Painal), servicios de seguridad (Chimalli) y repositorios FAIR (Alwa).</p>
             <carousel :items-to-show="items_to_show">
                <slide v-for="fb in feature_boxes" :key="fb.title">
                    <FeatureBox :image="fb.image" :title = "fb.title" :items ="fb.items" :hover_color="fb.hover_color" ></FeatureBox>
                </slide>
                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
            <!-- <div class="pa--xl flex jutify-content--center">
                <div class="feature-boxes-wrapper">
                    <FeatureBox v-for="fb in feature_boxes" :image="fb.image" :title = "fb.title" :items ="fb.items" :hover_color="fb.hover_color" ></FeatureBox>
                </div>
            </div> -->
        </Section>

        <Section title ="Pasos para la creacion de sistemas de e-Salud" color ="bg--black">
            <div class="pa--xl flex flex-direction--column justify-content--center">
                <div class="steps-wrapper">
                        <div v-for="(value,key,index) in steps_descriptions" class="steps__item" :key="key">
                            <div class="step__header">
                                <h3 class="step__header__title">{{value.title}}</h3>
                            </div>
                            <div class="steps_descriptions">
                                <div class ="steps_descriptions-inner">
                                    <IconCard v-for="step in value.steps" :title ="step.title" :text = "step.text" :image = "step.image"  :key="step.title"/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </Section>


    <Footer></Footer>


</template>

<script>
import FeatureBox from '../components/FeatureBox.vue';
import IconCard from '../components/IconCard.vue';
import PlatformsNav from '../components/PlatformsNav.vue';
import PortionSection from '../components/PortionSection.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import useBreakpoints from "vue-next-breakpoints";


// import { Glide, GlideSlide } from 'vue-glide-js'

// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'



export default {
    setup(){
        const breakpoints = useBreakpoints({
            mobile: 600, // max-width: 600px
            desktop: [601] // min-width: 601px
        });

        return {
            // If you want to use different key, feel free do do so, e.g.:
            // mediaqueries: breakpoints
            // and then use mediaqueries.desktop.matches etc.
            breakpoints
        };
    },
    created(){
            this.breakpoints.mobile.on("enter", (mq) => {
                console.log("Entered mobile breakpoint");
                console.log("Media Query", mq);
                this.items_to_show = 2
            });

            this.breakpoints.mobile.on("leave", (mq) => {
                console.log("Left mobile breakpoint");
                console.log("Media Query", mq);
                this.items_to_show = 4
            });
    },
    data() {
        return {
            feature_boxes:[
                {
                    title:"Nez: Servicio de consutrccion de sistemas e-Salud",
                    items:[
                        "Construye, configura y ejecuta sistemas de e-Salud en minutos.",
                        "Crea sistemas flexibles, portables, y modulares.",
                        "Tecnología propia e indepentiende del proveedor de hardware y software.",
                        "Usar los recursos de tu computadora al máximo.",
                        "Servicios de conexión con Alwa, Zamná y Tekanaktli."
                    ],
                    image:"nez.png",
                    hover_color:"#397DFF"
                },
                {
                    title:"Chimalli: Servicio de acceso a servicios de e-salud y/o sistemas de analítica",
                    items:[
                        "Agrega seguridad a sistemas de e-Salud en forma automática.",
                        "Cumplé con las normas internacionales de manera automática y transparente.",
                        "Asegurar la confidencialidad de tus datos en cualquier lugar y momento.",
                        "Registra eficientemente las operaciones realizadas en la blockchain.",
                        "Servicios de conexión con Tekanaktli y Alwa."
                    ],
                    image:"chimalli.png",
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
                    image:"painal.png",
                    hover_color:"#A465FA"
                },

                {
                    title:"Xelhua: Servicio de analitica y estadistica de datos",
                    items:[
                        "Crea automáticamente servicios de análisis y estadística de datos.",
                        "No requieres programas las aplicaciones, solo utilizar alguna disponible en el catálogo de servicios.",
                        "Combina diferentes servicios de preparación, análisis y visualización de datos.",
                        "Despliega aplicaciones de análisis de datos tolerantes a fallos.",
                        "Servicios de conexión con Alwa, Zamná y Tekanaktli."
                    ],
                    image:"xelhua.png",
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
                        "Servicios de conexión con Xelhua, Zamná y Tekanaktli.",
                    ],
                    image:"alwa.png",
                    hover_color: "#FF9237"
                }
            ],
            sections: {
                resume:{
                    title: "¿Qué es Muyal-ilal?",
                    text: "Crea  sistemas de  analítica  (big  data)  basados  en  inteligencia  artificial  para  convertir datos (históricos estadísticos, notas clínicas, datos de dispositivos médicos, imagenología etc.) en información. Nez y Xelhua guían al personal médico para crear, en minutos sin requerir licencias ni conocimientos tecnológicos o de programación, sistemas de e-salud para soportar procesos de toma de  decisiones  o  asistencia  a  diagnósticos. ",
                    image:"muyal_steps.png"
                }
            },
            steps_descriptions:{
                step1:{
                    title:"1. Crea sistemas e-Salud",
                    steps:[
                        {
                            title:"1. Elige los componentes de tu flujo de datos",
                            text:"Descubrimiento y reusabilidad de servicios de ciencia de datos disponibles en Muyal-Nez",
                            image:"elige.svg"
                        },

                        {
                            title:"2. Integra los componentes",
                            text:"Integración de software automática e instalación en Muyal-Nez inmediata.",
                            image:"savefile.svg"
                        },
                        {
                            title:"3. Despliega el sistema",
                            text:"Nez permite la creación de sistemas de ciencia de datos no estructurados orientada al diseño funcional.",
                            image:"rocket.svg"
                        },
                        {
                            title:"4. Procesa datos",
                            text:"Recibe cualquier tipo de dato no estructurado. Ciencia de datos como servicio, y construcción de sistemas paso a paso en la nube.",
                            image:"engrane.svg"
                        },

                    ]
                },
                step2:{
                    title:"2. Analiza tus datos",
                    steps:[
                        {
                            title:"1. Explora y procesa datos estructurados",
                            text:"Recibe cualquier tipo de dato estructurado y lo conecta automáticamente con servicios de analítica.",
                            image:"search_folder.svg"
                        },
                        {
                            title:"2. Diseña tus flujos de datos",
                            text:"Xelhua cuenta con un catálogo de servicios para aprendizaje maquina previamente configurados. Además, es posible utilizar aplicaciones de fusión e integración de datos",
                            image:"elige.svg"
                        },
                        {
                            title:"3. Analiza resultados",
                            text:"Xelhua proporciona soporte para visualizar datos en mapas de manera sencilla.",
                            image:"Diagrama.svg"
                        },
                        {
                            title:"4. Comparte",
                            text:"Xelhua te permite compartir los flujos de datos que has diseñado, así como los resultados que has obtenido.",
                            image:"share.svg"
                        }
                    ]
                },
                step3:{
                    title:"3. Asegura tus datos",
                    steps:[
                        {
                            title:"1. Control de acesso",
                            text:"Chimalli permite el manejo automático de llaves  y huellas criptográficas.",
                            image:"access.svg"
                        },
                        {
                            title:"2. Privacidad",
                            text:"Integra a tus sistemas los servicios criptográficos de Chimalli. Chimalli asegura el anonimato de los datos, así como la confidencialidad mediante el cifrado de los datos entrantes y salientes de los sistemas de e-Salud. Además, permite detectar alteraciones en los datos.",
                            image:"laptop_segura.svg"
                        },
                        {
                            title:"3. Confiabilidad",
                            text:"Chimalli también provee confiabilidad, la cual se consigue mediante mecanismos de tolerancia a fallos. La confiabilidad se aplica para mitigar los problemas causados por las deficiencias de la infraestructura donde se procesan y almacenan los datos.",
                            image:"desktop.svg"
                        },
                        {
                            title:"4. Trazabilidad",
                            text:"Creación automática de una red blockchain para cada sistema de ciencia de datos. Chimalli permite la gestión automática de contratos inteligentes, la gestión automática de transacciones y la verificabilidad de transacciones de forma confidencial.",
                            image:"red.svg"
                        }
                    ]
                },

                step4:{
                    title:"4. Comparte tus datos",
                    steps:[
                        {
                            title:"1. Comparte",
                            text:"Painal cuenta con esquemas de publicación y suscripción de catálogos (fuentes de datos, información y conocimiento).",
                            image:"uploap_document_green.svg"
                        },
                        {
                            title:"2. Almacena",
                            text:"Painal cuenta con un sistema de almacenamiento en la nube tolerante a fallos.",
                            image:"guardar.svg"
                        },
                        {
                            title:"3. Transporte de datos",
                            text:"Crea sistemas intra e inter institucionales. Painal te permite compartir datos de forma interna y externa, es decir, dentro de una misma instirución y hacia otras.",
                            image:"mails.svg"
                        },
                        {
                            title:"4. Distribuye",
                            text:"Los servicios de logística de Painal permiten realizar el intercambio de datos de un sistema de ciencia de datos.",
                            image:"folder-yellow-open.svg"
                        }
                    ]
                },

                step5:{
                    title:"5. Entrega tus datos",
                    steps:[
                        {
                            title:"1. Descarga y desempaca",
                            text:"Chimalli hacen factible que las instituciones de salud, profesionales de la salud, pacientes y/o comunidad científica pueda acceder a servicios de e-salud y/o sistemas de analítica.",
                            image:"download_document_green.svg"
                        },
                        {
                            title:"2. Consume",
                            text:"Chimalli te permite obtener información útil (sin comprometer la seguridad de los datos) que ayude a mejorar la toma de decisiones en escenarios de cuidado de la salud.",
                            image:"document_encrypted.svg"
                        },
                        {
                            title:"3. Verifica",
                            text:"Chimalli permite detectar alteraciones en los datos. Todo esto se consigue mediante esquemas de criptografía de siguiente generación, lo que permite el manejo de datos como objetos seguros.",
                            image:"access.svg"
                        },
                    
                    ]
                },

                step6:{
                    title:"6. Deposita en repositorios",
                    steps:[
                        {
                            title:"1. Descarga",
                            text:"Aplicativos de seguridad para proporcionar integridad, tolerancia a fallas, trazabilidad, entre otros. Aplicativos analítica para machine o deep learning, estadística y mining. Aplicativos de procesamiento para realizar correcciones, 3dmesh, codificadores. Fuentesde datos como data lakes, warehouse, cvs.",
                            image:"document-save-as.svg"
                        },
                        {
                            title:"2. Usa",
                            text:"Patrones de publicación y subscripción, API para programadores, Interfaces para productores/consumidores, Carpetas de diseño, Código fuente de algoritmos de integración.",
                            image:"folder-yellow-open.svg"
                        },
                        {
                            title:"3. Comparte",
                            text:"Comparte tus resultados, flujos de ciencia de datos, aplicaciones y software de manera fácil y sencilla.",
                            image:"share.svg"
                        },
                        {
                            title:"4. Visualiza",
                            text:"Visualiza tus recursos y resultados fácilmente.",
                            image:"desktop.svg"
                        }
                    ]
                }
            },
            items_to_show:4,
            
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
    }
}
</script>


<style scoped>
/* __________________________ */
/* .carousel{
    width: 600px !important;
} */
.steps-wrapper{
    /* background: yellow; */
    width: 80vw;
}
/* .step__header__title{ */
    /* font-size: 4rem; */
/* } */
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

.separator{
    background:#2F2F2F;
    width:100%;
    --size: 10px;
    height: var(--size);
    position: absolute;
    top:calc(100% - var(--size));
    left:0;
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
  margin-top: 30px;
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
</style>
