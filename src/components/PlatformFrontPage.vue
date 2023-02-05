<template>
  <div :class="{['bg--'+color]:true, 'front-page-wrapper':true}">
    <div class ="flex align-items--center front-page justify-content--center">
        <img class="front-page__img" :src="image" :alt="title" :width="image_width">
        <div :class="{['w-'+title_width]:true}">
          <h1 :class="'text-size--'+title_size+' front-page__title text-color--'+text_color">{{ title }}</h1>
        </div>

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
    props:["title","image","index","color","dark_color","title_size",'image_width', 'text_color','title_width'],
    methods: {
      on_click(btn_id){
          return ()=>{

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