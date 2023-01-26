<template>

    <div class="global_wrapper">

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
        <div class="separator"></div>
    </div>
        
        <Section class="bg--white"  :title = "sections.whatis.title" :color="sections.whatis.color" >
            <div class="pa--lg flex justify-content--center align-items--center">
                <div class="pa--md">
                    <p class="text-size--md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quia reprehenderit praesentium soluta fugit? Sit odio, inventore optio dolore omnis nisi tenetur maxime asperiores quod sed consequatur fuga rerum maiores.</p>
                </div>
                <div>
                <img width="600" src="../assets/muyal_steps.png" alt="">
                </div>
            </div>
        </Section>

        <Section title = "Plataformas" color="bg--black" >
            <div class="pa--xl flex jutify-content--center">
                <div class="feature-boxes-wrapper">
                    <FeatureBox v-for="fb in feature_boxes" :image="fb.image" :title = "fb.title" :items ="fb.items" :hover_color="fb.hover_color" ></FeatureBox>
                </div>
            </div>
        </Section>

        <Section title ="Pasos para la creacion de sistemas de e-Salud" color ="bg--black">
            <div class="flex justify-content--center">
            <div class="steps-wrapper">

                <div class="steps__item">
                    <div class="step__header">
                        <h3 class="step__header__title">1. Crea sistemas de e-Salud</h3>
                    </div>
                    
                    <div class="step__description">
                        <div class="step">
                            <img class="step__img" src="" alt="">
                            <h4 class="step__title">1. Elige tus componentes</h4>
                            <p class ="step__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque.</p>
                        </div>
                    </div>

                </div>
                <div class="steps__item">
                    <div class="step__header">
                        <h3 class="step__header__title">2. Asegura tus datos</h3>
                    </div>
                    <div class="steps_descriptions">
                        <div class="step__description">
                            <div class="step">
                                <img class="step__img" src="" alt="">
                                <h4 class="step__title">1. Elige tus componentes</h4>
                                <p class ="step__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </div>
        </Section>


        <Section  :title = "sections.resume.title" :color="sections.resume.color" >
            <div class ="pa--md">
                <p class="text-align--justify text-color--default text-size--md">{{ sections.resume.body_text }}</p>
            </div>
        </Section>

        <Section  :title = "sections.motivacion.title" :color="sections.motivacion.color" >
            <div class ="pa--md">
                <p class="text-align--justify text-color--default text-size--md">{{ sections.motivacion.body_text }}</p>
            </div>
        </Section>

    </div>

</template>

<script>
import FeatureBox from '../components/FeatureBox.vue';
import PlatformsNav from '../components/PlatformsNav.vue';

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
                whatis: {
                    title: "¿Qué es Muyal-ilal?",
                    color: "bg--black"
                },
                resume: {
                    title: "Resume",
                    color: "bg--black",
                    body_text: "En este proyecto multidisciplinario se desarrolla Muyal-Ilal, una plataforma de servicios en la nube para la gestión, aseguramiento, intercambio, procesamiento, análisis y preservación de grandes volúmenes de datos médicos. Muyal-Nez crea sistemas eficientes e-salud para el procesamiento y manejo de datosmédicos. Muyal-Xelhua crea sistemas de analítica (big data) basados en inteligencia artificial para convertir datos (históricos estadísticos, notas clínicas, datos de dispositivos médicos, imagenología etc.) en información. Nez y Xelhua guían al personal médico para crear, en minutos sin requerir licencias ni conocimientos tecnológicos o de programación, sistemas de e-salud para soportar procesos de toma de decisiones o asistencia a diagnósticos. Estos sistemas son portables, pueden incluir y/o acoplarse con sistemas existentes y se pueden transferir fácilmente a otras instituciones, lo cual reduce costos de desarrollo y resuelve la dependencia tecnológica entre instituciones y proveedores de software y servicios. Muyal-Zamnaasegura y verifica que los datos manejados por los sistemas creados en Muyal cumplan, en forma automática y transparente, las normas nacionales (NOM-024-SSA3-2010 y NOM-004-SSA3-2012) e internacionales (ISO-270001-13, COBIT5, NIST) referentes a tolerancia a fallas de servicios/servidores, privacidad, confidencialidad, integridad, disponibilidad y trazabilidad de los datos médicos. Zamnacrea reportes sobre cumplimiento de cada norma incluyendo guías para mejorar incumplimiento. Muyal-Tekanaktli construye sistemas de almacenamiento y distribución de datos/contenidos para que las instituciones soporten escenarios de intercambio ininterrumpido de catálogos de bases de datos, resultados/información y/o sistemas e-Salud a través de intra/internet. Muyal-Alwa crea servicios de repositorios (estandarizados y FAIR) para facilitar el acceso a catálogos publicados por instituciones de salud. En Muyal se construyen sistemas e-salud de inteligencia artificial para diagnóstico asistido de cáncer de hueso largo y pulmones, estudios espaciotemporales de enfermedades de alta prevalencia con georreferenciación, calculadoras de medición de riesgo de enfermedades cardiovasculares que producirán bases de datos y repositorios para la comunidad científica y las instituciones de salud.",
                },
                motivacion: {
                    title: "Motivacion",
                    color: "bg--black",
                    body_text: "La atención médica en México es crucial para mejorar el bienestar de los ciudadanos. Esta práctica profesional produce escenarios de grandes volúmenes de datos (big data) producidos por diversas fuentes heterogéneas (sensores, dispositivos médicos, etc.) que deben ser procesados rápidamente (velocidad) por un conjunto heterogéneo de sistemas de expedientes clínicos electrónicos o SECE(variedad) que entregan información útil a diferentes repositorios de datos (veracidad-valor). El Plan Nacionalde desarrollo2019-2024describe las dimensiones de este escenario: “afinales de 2018, el IMSS contaba con 68.5 millones de derechohabientes, el ISSSTE con más de 13 millones, IMSS-Secretaría de Bienestar con un total de 13 millones, asícomo 2 millones de Sedena, Semar y PemexLa atención médica en México es crucial para mejorar el bienestar de los ciudadanos. Esta práctica profesional produce escenarios de grandes volúmenes de datos (big data) producidos por diversas fuentes heterogéneas (sensores, dispositivos médicos, etc.) que deben ser procesados rápidamente (velocidad) por un conjunto heterogéneo de sistemas de expedientes clínicos electrónicos o SECE(variedad) que entregan información útil a diferentes repositorios de datos (veracidad-valor). El Plan Nacionalde desarrollo2019-2024describe las dimensiones de este escenario: “afinales de 2018, el IMSS contaba con 68.5 millones de derechohabientes, el ISSSTE con más de 13 millones, IMSS-Secretaría de Bienestar con un total de 13 millones, asícomo 2 millones de Sedena, Semar y Pemex”."
                }
            }
        };
    },
    components: { PlatformsNav, FeatureBox }
}
</script>
<style scoped>
/* .global-wrapper{
    width: 100px !important; 
    height: 100px;
} */
.steps-wrapper{
    /* width: yellow; */
    background: yellow;
    width: 80vw;
}
.step__header{
    background: red;
    /* width: 1000px; */
}
.step__header__title{
    font-size: 1.1rem;
}
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
