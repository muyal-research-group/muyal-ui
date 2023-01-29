<template>
  <section class ="section">
    <header :class ="color+' section__header'">
        <h2 class="section__header__title">
            {{ title }}
        </h2>
    </header>
    <div class="section__wrapper">
        <div class="section__body">
            <slot></slot>
            <!-- <p class = "section__body__text"> -->
                <!-- En este proyecto multidisciplinario se desarrolla Muyal-Ilal, una plataforma de servicios para la gestión, aseguramiento, intercambio, procesamiento, análisis y preservación de grandes volúmenes de datos médicos. -->
            <!-- {{ body}} -->
            <!-- </p> -->
        </div>
    </div>
  </section>
</template>

<script>
export default {
    props:{
        title:String,
        color: String
        // body: String
    },

}
</script>
<style scoped>

.section__header {
    /* background: black; */
    color:white;
    display: flex;
    justify-content: center;
    padding:20px;
    /* width:100%; */
    /* min-width: 1000px; */

}
.section__body__text{
    font-size: 1.3rem;
    text-align: justify;
    color: var(--text-color);
}

.section__header__title {
    font-size: 2rem;
}

.section{
  width: 100%;
  /* min-width: 1000px; */
  /* height: 100vh; */
  background: var(--section-bg-color);
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
}
.section__wrapper{
    display: flex;
    justify-content: center;
}

.section__body{
  width: 90%;
  /* background: ; */
  /* height:100vh; */

  /* padding: 50px; */
}
</style>