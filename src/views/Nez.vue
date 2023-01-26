<template>

  <div class="section-title">
    <img src="..\assets\nez.png" alt="MUYAL_LOGO">
    <h2>Servicio de construcción de sistemas e-salud</h2>
    <span>Entregable 1</span>
    <div class="resaltar">
      <p>Obtenido</p>
    </div>
    <div class="container">
      <button>Poster cualitativo</button>
      <button>Poster cuantitativo</button>
      <button>Software</button>
      <button>Infografia tecnica</button>
      <button>Infografia general</button>
    </div>
  </div>
  <div class="separador"></div>
  <div class="section">
    <div class="header">
      <h2>Crea sistemas de e-Salud en minutos para el manejo de datos y contenidos médicos.</h2>
    </div>
    <div class="container">
      <div class="section">
        <h3><span>Crea</span> tus bloques de construccion </h3>
        <div class="circle">
          <h2>1</h2>
        </div>
        <div class="container">
          <div class="container-gray">
            <p>Aplicaciones</p>
          </div>
          <img class="icon" src="../assets/nez_assets/apps.png" >
        </div>
        <div class="container">
          <div class="container-gray">
            <p>Librerias</p>
          </div>
          <img class="icon" src="../assets/nez_assets/lib.png" >
        </div>
        <div class="container">
          <div class="container-gray">
            <p>Sistema Operativo</p>
          </div>
          <img class="icon" src="../assets/nez_assets/so.png" >
        </div>
        <div class="container">
          <div class="resaltar-blue">
            <p>Bloque de construccion</p>
          </div>
          <img class="icon" src="../assets/nez_assets/building_block.png" >
        </div>
      </div>
      <div class="section">
        <h3 ><span>Une</span> tus bloques a un sistema de e-salud </h3>
        <div class="circle">
          <h2>2</h2>
        </div>
        <img src="../assets/nez_assets/nez-2.png" class="image">
      </div>
      <div class="section">
        <h3><span>Despliega</span> tu servicio en la nube o computadora local</h3>
        <div class="circle">
          <h2>3</h2>
        </div>
        <img src="../assets/nez_assets/nez-3.png" class="image">
      </div>
    </div>
  </div>
  <div class="section">
    <div class="header">
      <h2>Sistemas intra-institucionales</h2>
    </div>
    <p>Conecta múltiples usuarios y niveles de atención dentro de tu organzación</p>
    <img src="../assets/nez_assets/ani-intra.gif" class="image">
  </div>
  <div class="section">
    <div class="header">
      <h2>Sistemas inter-institucionales</h2>
    </div>
    <p>Conecta usuarios y profesionales de la salud de múltiples organizaciones</p>
    <img src="../assets/nez_assets/ani-inter.gif" class="image">
  </div>
  <div class="section">
    <div class="header">
      <h2>Principales características</h2>
    </div>
    <img src="../assets/nez_assets/fig1.png" class="image">
  </div>
  <div class="section">
    <div class="header">
      <h2>Repositorio de aplicaciones y servicios</h2>
    </div>
    <Carrousel
      :paths="['/src/assets/nez_assets/fig1.png',
      '/src/assets/nez_assets/ani-inter.gif',
      '/src/assets/nez_assets/ani-intra.gif']"
    ></Carrousel>
  </div>
  <div class="section">
    <div class="header">
      <h2>Software y productos</h2>
    </div>
    <card
      color="#397DFF"
      title="hola"
      content="mundo"
    ></card>
  </div>
  <footerMuyual></footerMuyual>
</template>

<script setup>
  import Carrousel from "../components/Carrousel.vue";
  import footerMuyual from "../components/Footer.vue"
  import card from "../components/Card.vue"
</script>

<style >

  p{
    text-align: center;
  }
  .image{
    width: 60%;
    height: 60%;
    align-self: center;
    margin: 10px;
  }
  .section-title{
    display: flex;
    background-color: #397DFF;
    height: 100vh;
    align-content: center;
    flex-direction: column;
    column-gap: 20px;
  }
  .separador{
    background-color: #0346c4;
    height: 5px;
    width: 100%;    
  }
  .header{
    background-color: #397DFF;
    height: 40px;
    width: 100%;    
  }
  
  .section-title img{
    align-self: center;
    height: 50%;
    width: 45%;
  }
  .section-title h2 {
    color: white;
    text-align: center;
    margin: 20px;
  }
  .section-title span{
    text-align: center;
    color: white;
  }
  .container{
    display: flex;
    align-content: center;
    align-self: center;
    justify-content: space-between;
    column-gap: 20px;
    padding: 10px;
  }
  .container .icon{
    height: 100px;
    width: 100px;
  }
  .section{
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
  .section p{
    color: black;
  }
  .header h2{
    color: white;
    text-align: center;
  }
  .section h3 span{
    color:#356FE1;
  }
  button{
    background-color: #356FE1;
    color: white;
    width: auto;
    height: 2rem;
    border-radius: 20px;
    margin: 20px;
    border: none;
  }
  button:hover{
    background-color: #8fafee;
  }
  .resaltar{
    align-self: center;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    width: 200px;
    height: 30px;
  }
  .resaltar-blue{
    align-self: center;
    background-color:#356FE1;
    border-radius: 10px;
    margin-top: 20px;
    width: 200px;
    height: 50px;
  }
  .container-gray{
    align-self: center;
    background-color: rgb(226, 223, 223);
    border-radius: 10px;
    margin-top: 20px;
    width: 200px;
    height: 30px;
  }
  .resaltar p{
    text-align: center;
    color:#397DFF ;
    font-style: normal;
  }
  .resaltar-blue p{
    margin-top: 10px;
    text-align: center;
    color:white;
    font-style: normal;
  }
  .circle{
    background-color: #356FE1;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    align-self: center;
    padding: auto;
  }
  .circle h2{
    color: white;
    text-align: center;
  }
</style>
