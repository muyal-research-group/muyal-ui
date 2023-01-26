<template>
  <div class="section-title bg--painal-primary-color">
    <img src="../assets/painal.png" alt="PAINAL_LOGO">
    <h2>Servicio para el transporte y almacenamiento de datos médicos</h2>
    <span>Entregable 3</span>
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

  <Section title="Transporte autómatico, seguro y eficiente de datos entre organizaciones" :color="color">
    <div class="pa--md">
     <p>Sistema de almacenamiento eficiente y tolerante a fallos.</p>
    </div>
  </Section>
  <Section title="Software y productos" :color="color">
    <div class="pa--md">
      <div class="row">
        <div class="column">
          <h3> </h3>
          <Circle title="1" :color="color" />
          <card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></card>
          <card :color="color" title="Producto 2 - P2" content="mundo"></card>
        </div>
        <div class="column">
          <h3> </h3>
          <Circle title="2" :color="color" />
          <card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></card>
          <card :color="color" title="Producto 2 - P2" content="mundo"></card>
        </div>
      </div>
      <div class="column">
        <h3> </h3>
        <Circle title="3" :color="color" />
        <card :color="color" title="Producto 1 - P1" content="Un esquema de bloques de construcción de flujos de trabajo y 
          servicios de e-Salud basado en mapas de microservicios y nanoservicios."></card>
        <card :color="color" title="Producto 2 - P2" content="mundo"></card>
      </div>
    </div>
  </Section>
  <footerMuyual></footerMuyual>
</template>

<script setup>
import Carrousel from "../components/Carrousel.vue";
import footerMuyual from "../components/Footer.vue"
import card from "../components/Card.vue"
import Section from "../components/Section.vue"
import Circle from "../components/Circle.vue"
const color = "bg--painal-primary-color";
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
  background-color: var(--painal-primary-color-dark);
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
  background-color: var(--painal-primary-color-dark);
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

</style>
