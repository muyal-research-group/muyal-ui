<template>
  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Contacto"
    image="/images/contact/contact.png"
    index="6"
    :color ="color"
    :dark_color ="dark_color"
    image_width = "500"
  >
  <template v-slot:footer>
  </template>
</PlatformFrontPage>
  
<div :class="{
    'flex':true,
    'flex-direction--row':!is_mobile,
    'flex-direction--column':is_mobile,
    'align-items--center':is_mobile,
    'justify-content--center':!is_mobile,
  }">
  <ContactCard :class="{'w-100':is_mobile}" v-for = "c in contacts"  :profile_photo ="c.profile_photo" :fullname = "c.fullname" :position="c.position" :company="c.company" :company_address="c.company_address" :phone_number="c.phone_number" :email = "c.email" :key ="c.email" :web="c.web"/>
</div>
<Footer/>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';
import ContactCard from '../components/ContactCard.vue';

// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import useBreakpoints from "vue-next-breakpoints";
export default {
  components: {Footer,Card,PlatformFrontPage,
    // Carousel, Slide, Pagination, Navigation , 
    Navbar,Button,
    ContactCard
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
  data() {
      return {
          contacts:[
            {
             profile_photo: "/images/contact/00.png",
             fullname: "Dr. Miguel Morales Sandoval",
             position: "Profesor / Investigador", 
             company: "CINVESTAV",
             company_address: "Parque Científico y Tecnológico TECNOTAM. Cd. Victoria, Tamaulipas",
             phone_number: "(834) 107 0220 1134",
             email: "miguel.morales@cinvestav.mx",
             web:"https://www.tamps.cinvestav.mx/~mmorales/"
            },
            {
             profile_photo: "/images/contact/00.png",
             fullname: "Dr. Jose Luis Gonzalez Compean",
             position: "Profesor / Investigador", 
             company: "CINVESTAV",
             company_address: "Parque Científico y Tecnológico TECNOTAM. Cd. Victoria, Tamaulipas",
             phone_number: "(834) 107 0220 1138",
             email: "joseluis.gonzalez@cinvestav.mx",
             web:"http://adaptivez.org.mx"
            },
          ],
          color :"contact-primary-color",
          dark_color :"contact-primary-dark-color",
        // color : "bg--chimalli-primary-color"
      };
  },
}
</script>
<!-- <template>
    <h1>PUBLICATIONS</h1>
</template>
<script>
export default {
    props:[],
    components:{}
}
</script> -->