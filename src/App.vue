<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class ="front-page">
    <div class="front-page__container">
      <div class="front-page__logo">
        <img src="./assets/muyal-white.png" alt="MUYAL_LOGO">
      </div>
      <div class="front-page__text-container">
      <p class="front-page__text">
        Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.
      </p>
      </div>
      <div class="front-page__project-number">
        <p>Proyecto numero: <b>41756</b></p>
      </div>
    <div class="front-page__platforms-container">
      <div class="front-page__platform front-page__platform--nez">
        <img src="./assets/nez.png" alt="NEZ">
      </div>
      <div class="front-page__platform front-page__platform--chimalli">
        <img src="./assets/chimalli.png" alt="CHIMALLI">
      </div>
      <div class="front-page__platform front-page__platform--painal">
        <img src="./assets/painal.png" alt="PAINAL">
      </div>
      <div class="front-page__platform front-page__platform--xelhua">
        <img src="./assets/xelhua.png" alt="XELHUA">
      </div>
      <div class="front-page__platform front-page__platform--alwa">
        <img src="./assets/alwa.png" alt="ALWA">
      </div>
    </div>
    </div>
  </div>
  <section class ="section">
    <header class ="section-header">SECTIO TITLE</header>
  </section>

  <!-- <RouterView /> -->
</template>

<style scoped>

.front-page {
  width: 100%;
  height: 105vh;
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
  /* background: yellow; */
  width: 85%;
  /* justify-content: center; */
}
.front-page__logo{
margin-bottom: 50px;
}
.front-page__text-container{
  margin-bottom: 50px;
}
.front-page__text{
  font-weight: bold;
  font-size:2em;
}
.front-page__project-number{
  background: var(--color-white);
  color: var(--color-black);
  padding: 15px;
  border-radius: 5px;
  font-size: 2rem;
}
.front-page__platforms-container{
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.front-page__platform {
  background: white;
  --size: 200px;
  width: var(--size);
  height: var(--size);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.front-page__platform:hover {
  cursor: pointer;
}
.front-page__platform img{
 width: 150px;
}
.section{
  width: 100%;
  height: 100vh;
}
</style>
