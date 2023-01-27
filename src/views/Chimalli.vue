<template>
  <div class="section-title bg--chimalli-primary-color">
    <img src="../assets/chimalli.png" alt="CHIMALLI_LOGO">
    <h2>Servicio de acceso a servicios de e-salud y/o sistemas de analítica</h2>
    <span>Entregable 2</span>
    <div class="resaltar">
      <p>Obtenido</p>
    </div>
    <div class="row">
      <button>Poster cualitativo</button>
      <button>Poster cuantitativo</button>
      <button>Software</button>
      <button>Infografia tecnica</button>
      <button>Infografia general</button>
    </div>
  </div>
  <div class="separador"></div>

  <Section title="Prepara los datos para almacenarlos y compartilos de forma segurida y confiable." :color="color">
    <div class="pa--md">
      <img src="../assets/chimalli_assets/Zanmá_animacion1.gif" class="image">
    </div>

  </Section>
  <Section title="Asegura tus datos y contenidos" :color="color">
    <div class="pa--md">
      <p>El sistema garantiza mantener la confidencialidad y anonimato de
        los datos manejados por sistemas de e-Salud.</p>
      <img src="../assets/chimalli_assets/Zanma_animacion2.gif" class="image">
    </div>
  </Section>
  <Section title="Verifica y gestiona autómaticamente la integridad de tus datos" :color="color">
    <div class="pa--md">
      <p>Gestión automática de contratos inteligentes basados en la tecnología de blockchain.</p>
      <img src="../assets/chimalli_assets/Zanma_animacion3.gif" class="image">
    </div>
  </Section>
  <Section title="Gestión y creación autómatica de cripto-contenedores para mantener seguros tus datos" :color="color">
    <div class="pa--md">
      
    </div>
  </Section>
  <Section title="Software y productos" :color="color">
    <div class="pa--md">
      <div class="row">
        <div class="column">
          <h3>Sistema seguro y confiable de intercambio de datos médicos</h3>
          <Circle title="1" :color="color" />
          <Card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></Card>
          <Card :color="color" title="Producto 2 - P2" content="mundo"></Card>
        </div>
        <div class="column">
          <h3>Sistema de validación de requerimientos de seguridad, trazabilidad, integridad y eficiencia descrito en las normas ofciales mexicanas y proocoloes DICOM/HL7 para el uso e intercambio de datos y contenidos médicos.</h3>
          <Circle title="2" :color="color" />
          <Card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></Card>
          <Card :color="color" title="Producto 2 - P2" content="mundo"></Card>
        </div>
      </div>
      <div class="column">
          <h3> Sistema de manejo de catálogo de servicios para que los desarrolladores puedan acceder a cada producto del servicio.</h3>
          <Circle title="3" :color="color" />
          <Card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></Card>
          <Card :color="color" title="Producto 2 - P2" content="mundo"></Card>
        </div>
    </div>
  </Section>
  <Footer></Footer>
</template>

<script>

import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Section from "../components/Section.vue"
import Circle from "../components/Circle.vue"
export default {
  components:[Footer,Card,Section,Circle],
  data(){
    return {
      color : "bg--chimalli-primary-color"
    }
  }
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
}

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

.circle {
  background-color: #356FE1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-self: center;
  padding: auto;
}

.circle h2 {
  color: white;
  text-align: center;
}
</style>
