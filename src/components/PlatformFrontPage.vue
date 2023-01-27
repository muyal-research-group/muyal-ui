<template>
  <div class="front-page-wrapper">
    <img class="front-page__img" :src="image_url" :alt="title">
    <h2 class="front-page__title">{{ title }}</h2>
    <span class="front-page__deliverable">Entregable {{ index }}</span>
    <div class="front-page__obtained">
      Obtenido
    </div>
    <div class="front-page__buttons">
      
      <!-- <button>Poster cualitativo</button>
      <button>Poster cuantitativo</button>
      <button>Software</button>
      <button>Infografia tecnica</button>
      <button>Infografia general</button> -->
    </div>
  </div>
</template>
<script>

export default {
    props:["title","image","index"],
    computed:{
        image_url(){
            return new URL("../assets/"+this.image,import.meta.url).href
        }
    }
}

</script>
<style scoped>
</style>