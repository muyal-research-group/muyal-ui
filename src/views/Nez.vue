<template>

  <div class="section-title">
    <img src="..\assets\nez.png" alt="MUYAL_LOGO">
    <h2>Servicio de construcción de sistemas e-salud</h2>
  </div>
  <footerMuyual></footerMuyual>
</template>

<script setup>
  import footerMuyual from "../components/footer.vue"
</script>

<style >
  .section-title{
    display: flex;
    background-color: #397DFF;
    height: 100vh;
    align-content: center;
    flex-direction: column;
    column-gap: 20px;
  }

  img{
    align-self: center;
    height: 50%;
    width: 50%;
  }
  h2{
    color: white;
    text-align: center;
    margin: 20px;
  }
</style>
