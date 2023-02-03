<template>
  <Navbar :color="color" :dark_color="dark_color"></Navbar>  
  <PlatformFrontPage 
    title ="Talleres"
    image="/images/workshops/workshops.png"
    index="6"
    :color ="color"
    :dark_color ="dark_color"
    image_width = "500"
  >
  <!-- <template v-slot:footer>
  </template> -->
</PlatformFrontPage>
  <div v-for="(workshop,index) in workshops" :class="{'sectionv3':true, 'active':!hides[index]}">
    <ImageBanner @click="on_click(index,workshop)" :title ="workshop.title" :image ="workshop.image.src"/>
    <div :class="{'sectionv3-body':true,'hide':hides[index],'flex':true,'flex-direction--column':true,'align-items--center':true }">
      <div v-for="(subsection,subindex) in workshop.subsections" :class="{'flex':true,'sectionv3__subsection':true,'flex-direction--row-reverse':!((subindex)%2 == 0), 'hide':hides[index]  }">
          <img :class="{'sectionv3__subsection__img':true,'hide':hides[index],'mr--sm':(subindex%2 == 0),'ml--sm': !(subindex%2 == 0)}" :src="subsection.image" :alt="workshop.image.alt">
          <div :class="{'flex':true,'flex-direction--column':true,'sectionv3__subsection__content':true,'hide':hides[index]}">
            <h3 :class="{'text-align--center':true,'sectionv3__subsection__title':true,'hide':hides[index]}">{{ subsection.title }}</h3>
            <p :class ="{'sectionv3__subsection__text':true,'hide':hides[index], 'text-align--justify':true}">{{ subsection.text }}</p>
          </div>
      </div>
          <iframe :class="{'sectionv3__subsection__video':true,'mt--md':true,'hide':hides[index]}" width="820" height="420" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
    </div>
  </div>
  <Footer/>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Card from "../components/Card.vue"
import Button from '../components/Button.vue';
import ImageBanner from '../components/ImageBanner.vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import PlatformFrontPage from "../components/PlatformFrontPage.vue"
export default {
  components: {Footer,Card,PlatformFrontPage,
    Carousel, Slide, Pagination, Navigation , Navbar,Button,ImageBanner
  },
  methods:{
    on_click(index,workshop){
        this.hides[index] = !this.hides[index];
        console.log("CLICK",index,workshop)
    }
  },
  data() {
      return {
            hides:[true,true,true ,true],
            workshops:[
              {
                title:"Taller de Monterrey",
                image:{
                    src:"/images/workshops/monterrey/00.jpg",
                    alt:"MERIDA",
                    width:0
                },
                subsections:[
                  {
                    title:"Ciencia y salud",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/monterrey/01.png"
                  },
                  {
                    title:"Nez un servicio para la construcción de sistemas de ciencia de datos",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/monterrey/02.png"
                  },
                  {
                    title:"Chimalli un servicio para el cumplimiento de normas en el intercambio de datos",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/monterrey/03.png"
                  },
                  {
                    title:"Xelhua un sevicio para creacion de sistemas de ciencia de datos estructurados",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/monterrey/04.png"
                  }
                ]
              },
              {
                title:"Taller de Iztapalapa",
                image:{
                    src:"/images/workshops/mexico/00.jpg",
                    alt:"IZTAPALAPA",
                    width:0
                }, 
                subsections:[
                  {
                    title:"Subsection 1",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/mexico/1.jpg"

                  },
                  {
                    title:"Subsection 2",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/mexico/02.jpg"
                  },
                  {
                    title:"Subsection 3",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/mexico/03.jpg"

                  },
                  {
                    title:"Subsection 4",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/mexico/4.jpg"
                  }
                ]
              },
              {
                title:"Taller de Puebla",
                image:{
                    src:"/images/workshops/puebla/00.jpg",
                    alt:"PUEBLA",
                    width:0
                }, 
                subsections:[
                  {
                    title:"Subsection 1",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/puebla/1.jpg"

                  },
                  {
                    title:"Subsection 2",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/puebla/02.jpg"
                  },
                  {
                    title:"Subsection 3",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/puebla/03.jpg"
                  },
                  {
                    title:"Subsection 4",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/puebla/04.jpg"
                  }

                ]
              },
              {
                title:"Taller de Merida",
                image:{
                    src:"/images/workshops/merida/00.jpg",
                    alt:"MERIDA",
                    width:0
                },
                subsections:[
                  {
                    title:"Subsection 1",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/01.jpg"

                  },

                  {
                    title:"Subsection 2",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/01.jpg"
                  },
                  {
                    title:"Subsection 3",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/01.jpg"
                  },
                  {
                    title:"Subsection 4",
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, explicabo neque! Accusantium blanditiis deserunt ex consequuntur soluta, quo impedit ipsa quisquam ducimus quasi ea cum nobis, maiores placeat? Sapiente nesciunt vel veniam exercitationem facilis dolorem laboriosam omnis reiciendis quas debitis?",
                    image:"/images/workshops/merida/01.jpg"
                  }
                ]
              }
            ],
          color :"workshops-primary-color",
          dark_color :"workshops-primary-dark-color",
        // color : "bg--chimalli-primary-color"
      };
  },
}
</script>
<style scoped>
.sectionv3.active {
  /* background: purple !important; */
  /* height: 10px; */
  /* width: 80vw; */
}
.sectionv3-body.hide{
  /* max-height: 0 !important; */
  height: 0;
  overflow: hidden;
  /* opacity: 0; */
  /* overflow: hidden; */
  /* position: absolute; */
  /* left:-100%; */
  /* visibility: hidden; */
  /* width: 0 !important; */
  /* display: none; */
  /* overflow: hidden; */
}


.sectionv3 {
  position: relative;
  /* width: 80vw; */
  /* height: auto; */
  /* background: yellowgreen; */
  /* height: 0; */
  /* overflow: hidden; */
  /* padding: 10px; */
  /* height: 100vh; */
  /* height: 100vh; */
}

/* .sectionv3.hide { */
  /* opacity: 0; */
/* } */
.sectionv3-body{
  display: block;
  height: 240vh;
  /* overflow-y:scroll; */
  /* max-height: 300vh; */
  /* height: auto; */
  /* min-height: 50vh; */
  /* max-height:100vh; */
  transition: height ease 500ms;
  /* transition: opacity ease 500ms; */
  /* background-color: red; */
}
.sectionv3__subsection {
  /* padding: 10px; */
  width: 80vw;
  /* background: orange; */
  padding: 50px;
  border-bottom: 1.5px solid rgba(0,0,0,0.1);
  max-height: 600px;
}

.sectionv3__subsection.hide {
  border:0;
}

.sectionv3__subsection__img{
  width: 30%;
  border-radius: 10px;
  /* margin-right: 20px; */
  transition: opacity ease 500ms;
}
.sectionv3__subsection__img.hide{
  opacity: 0;
}

.sectionv3__subsection__content{
  background: white;
  /* justify-content: center; */
  padding: 40px;
  
}
.sectionv3__subsection__title{
  font-size: 2.5rem;
  transition: opacity ease 500ms;
}
.sectionv3__subsection__title.hide{
  opacity:0;
}
.sectionv3__subsection__text{
  font-size: 1.5rem;
  transition: opacity ease 500ms;
}
.sectionv3__subsection__text.hide{
  opacity:0;
}


.sectionv3__subsection__video{
  transition: box-shadow ease 400ms, transform ease 400ms;
}
.sectionv3__subsection__video:hover{
  box-shadow: 0px 5px 45px 2px rgba(0,0,0,0.5);
  transform: scale(1.01);
  /* height: 100%; */
}
.sectionv3__subsection__video.hide {
  opacity: 0;
  height:0;
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