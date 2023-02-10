<template>
  <Navbar 
    :text_color_normal ="'white'" 
    :text_color_scrolled="'white'" 
    :background_color="color" 
    :scrolled_background_color="'white'"
    :bars_color="dark_color"
    :scrolled_bars_color="'white'"
    :scrolled_logo= "'/images/muyal/muyal-black.png'"
    :normal_logo = "'/images/muyal/muyal-white.png'"
  /> 
  <PlatformFrontPage title="Publicaciones" image="/images/publications/publications.png" index="6" :color="color"
    :dark_color="dark_color" image_width="500">
    <template v-slot:footer>
      <!-- <span :class="'flex justify-content--center mb--sm front-page__deliverable'">Entregable {{ index }}</span> -->
      <!-- <div :class="'mb--sm flex justify-content--center'+' text-color--'+color+' front-page__obtained'">
            Obtenido
          </div> -->
      <!-- <div class="mb--md front-page__buttons flex-wrap">
            <Button title="Poster cualitativo" :color="color" :dark_color="dark_color" />
            <Button title="Poster cuantitativo" :color="color" :dark_color="dark_color" />
            <Button title="Software" :color="color" :dark_color="dark_color" />
            <Button title="Infografia tecnica" :color="color" :dark_color="dark_color" />
            <Button title="Infografia general" :color="color" :dark_color="dark_color" />
          </div> -->
    </template>
  </PlatformFrontPage>
  <div :class="{'pa--lg':true, 'publications-wrapper':true}">
    <div v-for="publication in publications" :class="{ 'pa--sm': true, 'publication': true, 'w-100': is_mobile , 'h-mobile':is_mobile }"
      @click="on_click(publication)">
      <div class="publication__img-wrapper">
        <img class="publication__img" src="/images/publications/publication.png" alt="">
      </div>
      <div :class="{'publication__desc':true, 'flex':true,'flex-direction--column':true,'justify-content--space-between':true}">
        <h2 :class="{'publication__title':true,['text-size--'+title_size]:true}">{{ publication.title }}</h2>
        <span :class="{'publication__subtitle':true,['text-size--'+subtitle_size]:true}">{{ publication.subtitle }}</span>
      </div>
    </div>
  </div>
  <Footer />

</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
import useBreakpoints from "vue-next-breakpoints";
export default {
  setup() {
    const breakpoints = useBreakpoints({
      mobile: [320, 768], // max-width: 600px
      table: [768, 1024],
      desktop: [1281] // min-width: 601px
    });

    return {
      // If you want to use different key, feel free do do so, e.g.:
      // mediaqueries: breakpoints
      // and then use mediaqueries.desktop.matches etc.
      breakpoints
    };
  },
  computed: {
    is_mobile() {
      return this.breakpoints.mobile.matches || this.breakpoints.table.matches
    },
    title_size(){
      return this.is_mobile ? "lg":"sm"
    },
    subtitle_size(){
      return this.is_mobile ? "md" :"xs"
    }
  },
  components: {
    Footer, Card, PlatformFrontPage,
    Carousel, Slide, Pagination, Navigation, Navbar, Button
  },

  methods: {
    on_click: function (publication) {
      // console.log("CLICK ON", publication)
      window.open(publication.url, "_blank")
    }
  },
  data() {
    return {
      publications: [
        {
          title: "A Federated Content Distribution System to Build Health Data Synchronization Services.",
          subtitle: "2021 29th Euromicro International Conference on Parallel, Distributed and Network-Based Processing (PDP)",
          url: "https://onedrive.live.com/view.aspx?resid=F35B1229369E20D3!50815"
        },
        {
          title: "SeRSS: a storage mesh architecture to build serverless reliable storage services.",
          subtitle: "2021 30th Euromicro International Conference on Parallel, Distributed and Network-Based Processing (PDP) [En revisión]",
          url: "https://onedrive.live.com/view.aspx?resid=F35B1229369E20D3!50814"
        },
        {
          title: "A WoT-Based Method for Creating Digital Sentinel Twins of IoT Devices",
          subtitle: "",
          url: "https://onedrive.live.com/view.aspx?resid=F35B1229369E20D3!50817"
        },
        {
          title: "A novel transversal processing model to build environmental big data services in the cloud",
          subtitle: "Environmental Modelling and Software Q1.",
          url: "https://onedrive.live.com/view.aspx?resid=F35B1229369E20D3!50818"
        },
        {
          title: "FedFlow: A Federated Platform to Build Secure Sharing and Synchronization Services for Health Dataflows",
          subtitle: "2021 Computing [En revisión]",
          url: "https://onedrive.live.com/view.aspx?resid=F35B1229369E20D3!50820"
        },
        {
          title: "PuzzleMesh: A puzzle model to build mesh of agnostic services for edge-fog-cloud.",
          subtitle: "IEEE Transactions on Services Computing. Q1 [EN REVISIÓN].",
          url: "https://onedrive.live.com/view.aspx?resid=F35B1229369E20D3!50816"
        },
      ],
      color: "publications-primary-color",
      dark_color: "publications-primary-dark-color",
      // color : "bg--chimalli-primary-color"
    };
  },
}
</script>
<style scoped>
.h-mobile{
  height: auto !important;
  /* height: 100px !important; */
}
.h-desktop{
  height: auto !important;
  /* height: 200; */
}
.publications-wrapper {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: ; */
}

.publication {
  background: #f3f3f3;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 200px;
  border-radius: 10px;
  display: flex;
  width: 50%;
  margin-bottom: 10px;
}

.publication:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: transform ease-out 400ms;
}

.publication__title {
  font-size: 22px;
}

.publication__subtitle {
  font-size: 14px;
  color: #7e7e7e;
}

.publication__img-wrapper {
  /* background: red; */
  padding: 5px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-right: 20px;

}

.publication__img {
  width: 80px;
}
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