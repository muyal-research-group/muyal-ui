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
    <div ref="banner" class="front-page-v2 pa--xl flex justify-content--center align-items--center flex-direction--column">
        <img @load="on_load"  :class="{'mb--lg':true}" :style="{'z-index':100}" src="/images/muyal/muyal-white.png" width="300" alt="">
        <p :style="{'z-index':100}" :class="{'w-60':!is_mobile,'front-page-v2--title':true, 'text-align--center':!is_mobile,'text-align--justify':is_mobile,'mb--lg':true}">Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.</p>
        <div  :class="{'front-page-v2__btns':true,'flex':true,'to_front':true}">
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
    <Separator />
    <SimpleSection title="Componentes principales: Servicios" subtitle="">
        <template v-slot:body>
            <carousel :style="{'width':'100%'}"  :breakpoints = "breakpoints" :wrap-around="true" :autoplay="5000" :pauseAutoplayOnHover="true">
                <slide v-for="fb in feature_boxes" :key="fb.title">
                    <FeatureBox  :image="fb.image" :title = "fb.title" :items ="fb.items" :hover_color="fb.hover_color" />
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
                        <img @load="on_load" width="230" src="/images/muyal/mexico.png" alt="Mexico">
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
    <SimpleSection title="" subtitle="">
        <template v-slot:body>
            <div :class="{'flex':true,'flex-direction--column':is_mobile}">
                <div :class="{'w-60':!is_mobile,'w-100':is_mobile,'flex':true,'flex-direction--column':true,'justify-content--space-between':true,'align-items--center':true}">
                    <div>
                        <h1 :class="{'mb--md':true,'text-size--xxl':!is_mobile,'text-align--justify':true}">BIGDATA EN SALUD TECNOLOGÍAS EMERGENTES Y APLICACIONES</h1>
                        <p :class="{'mb--md':true,'text-align--justify':true}">
                            <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum saepe, illum, dicta quia suscipit magni doloremque dolorum quibusdam porro hic quas est assumenda ratione, maiores molestias itaque quis expedita veritatis amet voluptates odit et quaerat nihil minus. Accusantium, porro repellendus. -->
                            En este libro de Big Data en Salud Tecnologías Emergentes y Aplicaciones, se presentan al lector las tecnologias emergentes métodos, algoritmos, aplicaciones y contribuciones de la comunidad científico-académica que trabaja en el desarrollo de Big Data en Salud, abarcando tecnologías para la adquisición de datos en salud, su procesamiento, almacenamiento, distribución, manejo, acceso y uso. El libro brinda una visión de la complejidad detrás de los sistemas de ciencia de datos en salud y una ruta que permita a científicos, tecnólogos, estudiantes y público en general, conocer y adentrarse en el área de Big Data en Salud, la cual es critica para avanzar de manera significativa hacia una inteligencia de datos en el sector salud, que se traduzca en una mejor atención sanitaria y permita diseñar politicas de salud preventivas efectivas.
                        </p>
                    </div>
                    <div class="w-50">
                        <Button   @on_click="download_book" text="Descargar aquí" hover_color="#454545" />
                    </div>
                </div>
                <div :class="{'w-40':!is_mobile,'w-100':is_mobile,'flex':true,'justify-content--center':true,'align-items--center':true}">
                    <div class="book flex" @click="download_book">
                        <div class="book__spine"></div>
                        <img class="book_cover" src="/images/muyal/book_cover.png" alt="" width="400">
                    </div>
                </div>
            </div>
        </template>
    </SimpleSection>
    <Separator/>
    <Footer @loading="on_load"/>


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
import Loader from "../components/Loader.vue"
// import { onBeforeRouteLeave } from 'vue-router';

export default {
    setup(){
        const breakpoints = useBreakpoints({
            mobile:[240,768], // max-width: 600px
            table:[768,1024],
            desktop: [1281] // min-width: 601px
        });
        return {
            breakpoints,
        };
    },
    // mounted(){
    //     this.$nextTick(()=>{
    //         this.loading=false;
    //     })
    // },
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
            book_url:"http://muyal.tamps.cinvestav.mx/resources/libro.pdf",
            loaded_components:0,
            total_components:4,
            section_bg_color:"white",
            portion_bg_color:"light-grey",
            color:"white",
            dark_color:"black",
            images:[

            ],
            loading: true,
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
            ],

            
        };
    },
    methods:{
        navigate(path){
            if(path=="/"){
                window.scrollTo({top:this.$refs.banner.clientHeight,behavior:"smooth"})
            }else{
                this.$router.push(path)
            }
        },
        download_book(){
            window.open(this.book_url,'_blank');
        },
        on_load(){
            // console.log("LOADED COMPONENT")
            this.loaded_components+=1;
            if(this.total_components == this.loaded_components){
                this.loading=false;
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
    Button,
    Loader
}
}
</script>


<style scoped>
/* __________________________ */
.book{
    box-shadow: 0px 5px 10px 2px rgba(0,0,0,.5);
    transition: all ease 400ms;
    height: 100%;
    /* width: 100%; */
}
.book:hover{
    cursor: pointer;
    transform: scale(1.03);
}
.book__spine{
    background: #242424;
    width: 30px;
    /* height: 100%; */
}
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
