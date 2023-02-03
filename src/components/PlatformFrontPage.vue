<template>
  <div :class=" 'bg--'+color+' front-page-wrapper'">
    <div class ="front-page">
        <img class="front-page__img" :src="$resolve_image(image)" :alt="title" :width="image_width">
        <h2 :class="title_size+' front-page__title text-color--'+text_color">{{ title }}</h2>

        <div class="front-page__container">
          <slot name ="footer"></slot>

          <!-- <slot name="buttons"></slot> -->
      </div>
    
    </div>
  </div>
</template>
<script>
import Button from "../components/Button.vue";

export default {
    props:["title","image","index","color","dark_color","title_size",'image_width', 'text_color'],
    methods: {
      on_click(btn_id){
          return ()=>{

          console.log("AAAAH")
          }
      }
    },
    // computed:{
    //     image_url(){
    //         return new URL("../assets/"+this.image,import.meta.url).href
    //     }
    // },
    components:[Button]
}

</script>
<style scoped>
.front-page-wrapper{
  display: flex;
  justify-content: center;
  padding: 50px;
  margin-top: 100px;
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
  /* column-gap: 20px; */
}
.front-page__img{
  align-self: center;
  /* width: 40%; */
  min-width: 400px;


}
.front-page__title{
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 20px;
}
.front-page__container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: red; */
}
</style>