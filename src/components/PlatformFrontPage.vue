<template>
  <div :class=" 'bg--'+color+' front-page-wrapper'">
    <div class ="front-page">
        <img class="front-page__img" :src="image_url" :alt="title">
        <h2 class="front-page__title">{{ title }}</h2>

        <div class="front-page__container">
          <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span>

          <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
            Obtenido
          </div>
          <div class="mb--md front-page__buttons">
            <Button title="Poster cualitativo" :color="color" :dark_color="dark_color"/>
            <Button title="Poster cuantitativo" :color="color" :dark_color="dark_color"/>
            <Button title="Software" :color="color" :dark_color="dark_color"/>
            <Button title="Infografia tecnica" :color="color" :dark_color="dark_color"/>
            <Button title="Infografia general" :color="color" :dark_color="dark_color"/>
          </div>
      </div>
    
    </div>
  </div>
</template>
<script>
import Button from "../components/Button.vue";

export default {
    props:["title","image","index","color","dark_color"],
    computed:{
        image_url(){
            return new URL("../assets/"+this.image,import.meta.url).href
        }
    },
    components:[Button]
}

</script>
<style scoped>
.front-page-wrapper{
  display: flex;
  justify-content: center;
}
.front-page{
  /* background: red; */
  width: 100%;
  height: 100vh;
  display: flex;
  /* height: 100vh; */
  align-content: center;
  /* justify-content: center; */
  flex-direction: column;
  column-gap: 20px;
}
.front-page__img{
  align-self: center;
  width: 30%;
}
.front-page__title{
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 20px;
}
.front-page__deliverable{
  /* background: white; */
  /* display: flex;
  justify-content: center; */
  color:white;
  font-weight: bold ;
  width: 150px;
  /* border-radius: 5px; */
  padding: 10px;
  /* color: ; */
}
.front-page__obtained {
  background: white;
  width: 150px;
  border-radius: 100px;
  padding: 10px;
  /* display: flex;
  justify-content: center; */
}
.front-page__buttons{
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* background: red; */
}
.front-page__container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.front-page__buttons div{
  margin-right: 10px;
}
</style>