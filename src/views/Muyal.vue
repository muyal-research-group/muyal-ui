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
    <PortionSection :title="sections.resume.title" :text ="sections.resume.text"  :image="sections.resume.image"  image_width="700" />
        

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
            <div class="pa--xl flex jutify-content--center">
                <div class="feature-boxes-wrapper">
                    <FeatureBox v-for="fb in feature_boxes" :image="fb.image" :title = "fb.title" :items ="fb.items" :hover_color="fb.hover_color" ></FeatureBox>
                </div>
            </div>
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


export default {
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
                            title:"1.1 Elije tus componentes",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },

                        {
                            title:"1.2 Integra los componentes",
                            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"1.3 Despliega el sistema",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"1.4 Procesa",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },

                    ]
                },
                step2:{
                    title:"2. Analiza tus datos",
                    steps:[
                        {
                            title:"2.1 Explora y procesa",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"2.2 Diseña",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"2.3 Analiza resultados",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"2.4 Comparte",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        }
                    ]
                },
                step3:{
                    title:"3. Asegura tus datos",
                    steps:[
                        {
                            title:"3.1 Explora y procesa",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"3.2 Diseña",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"3.3 Analiza resultados",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"3.4 Comparte",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        }
                    ]
                },

                step4:{
                    title:"4. Comparte tus datos",
                    steps:[
                        {
                            title:"4.1 Explora y procesa",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"4.2 Diseña",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"4.3 Analiza resultados",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"4.4 Comparte",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        }
                    ]
                },

                step5:{
                    title:"5. Entrega tus datos",
                    steps:[
                        {
                            title:"5.1 Explora y procesa",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"5.2 Diseña",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"5.3 Analiza resultados",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"5.4 Comparte",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        }
                    ]
                },

                step6:{
                    title:"6. Deposita en repositorios",
                    steps:[
                        {
                            title:"6.1 Explora y procesa",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"6.2 Diseña",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"6.3 Analiza resultados",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        },
                        {
                            title:"6.4 Comparte",
                            text:"lorem ipsum dolor sit amet consectetur adipisicing elit. qui eius rerum saepe repellat ullam consequatur tempore temporibus asperiores maiores doloremque, harum distinctio, sequi nihil voluptas laborum debitis, ipsa sunt similique!",
                            image:"step-00.svg"
                        }
                    ]
                }
            }
        };
    },
    components: { PlatformsNav, FeatureBox, PortionSection, IconCard }
}
</script>


<style scoped>
/* __________________________ */
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
  /* min-width: 100vw; */
  /* max-width: 100vw; */
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
  /* background: yellowgreen; */
  width: 70%;

  /* justify-content: center; */
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
