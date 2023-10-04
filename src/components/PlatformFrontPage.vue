<template>
  <div :class="{['bg--'+color]:true, 'front-page-wrapper':true}">
    <div :class ="{
        'flex':true,
        'align-items--center':true ,
        'front-page':true, 
        'justify-content--center':is_mobile}
    ">
      <div :class="{
          'flex':true,
          'justify-content--center':true,
          'align-items--center':true,
          'flex-direction--column':!invert,
          'front-page-logo':true,
          'flex-direction--column-reverse':invert
        }">
        <img @load="on_load" class="front-page__img" :src="image" :alt="title" :width="image_width">
        <div :class="{['w-'+title_width]:true}">
          <h1 :class="'text-size--'+title_size+' front-page__title text-color--'+text_color">{{ title }}</h1>
        </div>
      </div>

        <div :class="{'circle':true,['bg--'+circle_color]:true}"></div>
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
    props:{
        title:{type:String, default:"Title"},
        image:{type:String, default:"/images/muyal/3trz.png"},
        index:{type:Number,default:0},
        color:{type:String, default:"white"},
        dark_color:{type:String, default:"black"},
        title_size:{type:String,default:"lg"},
        image_width:{type:Number,default:600},
        text_color:{type:String,default:"black"},
        title_width:{type:Number,default:80},
        circle_color:{type:String,default:"light-grey-1"},
        invert:{type:Boolean, default:false}
      // "title","image","index","color","dark_color","title_size",'image_width', 'text_color','title_width','circle_color'
    },
    methods: {
      on_load(){
        this.$emit("loading")
      }
      // on_click(btn_id){
      //     return ()=>{

      //     }
      // }
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
.front-page-logo{
  position: relative;
  z-index: 100;
}
.circle{
  position: absolute;
  top:-370px;
  /* background: red; */
  /* height: 100vh; */
  height: 700px;
  width: 120%;
  z-index: 1;
}
.front-page-wrapper{
  display: flex;
  justify-content: center;
  padding: 50px;
  margin-top: 100px;
  /* position: relative; */
  /* z-index: 190; */
}
.front-page{
  /* background: red; */
  width: 100%;
  /* height: 100vh; */
  height: auto;
  display: flex;
  /* height: 100vh; */
  align-content: center;
  /* justify-content: center; */
  flex-direction: column;
  /* column-gap: 20px; */
}
.front-page__img{
  align-self: center;
  z-index: 100;
  /* width: 40%; */
  /* min-width: 400px; */


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