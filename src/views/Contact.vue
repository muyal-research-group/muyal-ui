<template>
  <transition name="loading">
      <Loader v-if="loading"/>
  </transition>

  <Navbar 
    :text_color_normal ="'white'" 
    :text_color_scrolled="'black'" 
    :background_color="color" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'white'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-black.png'"
    @loading="on_load"
  /> 
  <PlatformFrontPage 
    title ="Contacto"
    image="/images/contact/contact.png"
    index="6"
    :color ="color"
    :dark_color ="dark_color"
    image_width = "200"
    :circle_color="dark_color"
    text_color="white"
    @loading="on_load"
  >
  <template v-slot:footer>
  </template>
</PlatformFrontPage>
  
<div :class="{
    // 'w-100':true,
    'flex':true,
    'flex-direction--row':!is_mobile,
    'flex-direction--column':is_mobile,
    'align-items--center':is_mobile,
    'justify-content--center':true,
  }">
  <ContactCard @loading="on_load" :class="{'w-100':is_mobile}" v-for = "c in contacts"  :profile_photo ="c.profile_photo" :fullname = "c.fullname" :position="c.position" :company="c.company" :company_address="c.company_address" :phone_number="c.phone_number" :email = "c.email" :key ="c.email" :web="c.web"/>
</div>
<Separator type="contact"/>
<Footer @loading="on_load"/>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';
import ContactCard from '../components/ContactCard.vue';
import Separator from '../components/Separator.vue';

// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import useBreakpoints from "vue-next-breakpoints";
export default {
  components: {Footer,Card,PlatformFrontPage,
    // Carousel, Slide, Pagination, Navigation , 
    Navbar,Button,
    ContactCard,Separator
  },
  setup(){
      const breakpoints = useBreakpoints({
          mobile:[320,768], // max-width: 600px
          table:[768,1024],
          desktop: [1281] // min-width: 601px
      });

      return {
          breakpoints
      };
  },
  computed:{
    is_mobile(){
      return this.breakpoints.mobile.matches || this.breakpoints.table.matches
    }
  },

  // mounted(){
  //     this.$nextTick(()=>{
  //         this.loading=false;
  //     })
  // },
  data() {
      return {
          loaded_components:0,
          contacts:[
            {
             profile_photo: "/images/contact/00.png",
             fullname: "Dr. Jose Luis González Compeán",
             position: "Responsable Técnico del proyecto", 
             company: "CINVESTAV",
             company_address: "Parque Científico y Tecnológico TECNOTAM. Cd. Victoria, Tamaulipas",
             phone_number: "(834) 107 0220 1138",
             email: "joseluis.gonzalez@cinvestav.mx",
             web:"http://adaptivez.org.mx"
            },
            {
             profile_photo: "/images/contact/00.png",
             fullname: "Dr. Miguel Morales Sandoval",
             position: "Profesor / Investigador", 
             company: "CINVESTAV",
             company_address: "Parque Científico y Tecnológico TECNOTAM. Cd. Victoria, Tamaulipas",
             phone_number: "(834) 107 0220 1134",
             email: "miguel.morales@cinvestav.mx",
             web:"https://www.tamps.cinvestav.mx/~mmorales/"
            }
          ],
          color :"contact-primary-color",
          dark_color :"contact-primary-dark-color",
          loading:true
        // color : "bg--chimalli-primary-color"
      };
  },
  methods:{

      on_load(){
        this.loaded_components+=1;
        // console.log("LOAD_COMPONENT",this.loaded_components)
        if(this.loaded_components==5){
          this.loading=false
        }
      },
  }
  // components:{}
}
</script>
<style scoped> 
/* .x{
  width: 100vw;
} */
</style>
<!-- <template>
    <h1>PUBLICATIONS</h1>
</template>
<script>
export default {
    props:[],
    components:{}
}
</script> -->