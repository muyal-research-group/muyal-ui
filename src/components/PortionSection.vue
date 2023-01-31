<template>
        <div class="flex justify-content--center pa--xl sectionv2-wrapper">
            <div :class="{'flex':true, 'sectionv2-container':true, 'flex-direction--column':column, 'align-items--center':column, 'w-100':column} ">
                <div :class="{['w-'+part1_width]:!column,'w-100':column}">
                    <slot :name="'part1'"></slot>
                    <!-- <img class="sectionv2__img" :width="image_width" :src="image_url" :alt="title"> -->
                </div>
                <!-- <div :class="'w-'+part2_width"> -->
                <!-- <div class="flex flex-direction--column align-items--center sectionv2-title-wrapper sectionv2-1"> -->
                <div :class="{['w-'+part2_width]:true, 'flex':true,'align-items--center':true,'justify-content--center':true}">
                    <slot :name="'part2'"></slot>
                    <!-- <h1 class="sectionv2-title">{{ title }}</h1>
                    <p class="text-size--md text-align--justify">{{ text }}</p> -->
                </div>
            </div>
        </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    props:["part1_width","part2_width","column","invert"],
    computed:{
        image_url(){
            return new URL("../assets/"+this.image,import.meta.url).href
        }
    },
    components:{Carousel,Slide,Pagination,Navigation}
}
</script>
<style scoped>
.sectionv2__img{
 min-width: 500px;   
}
.sectionv2-wrapper{
    /* padding: 60px; */
    /* width: 90%; */
}
.sectionv2-container{
    /* display: flex; */
    /* flex-direction: column;
     */
    /* align-items: center; */
    width: 90%;
    /* background: red; */
    /* background: ; */
}
/* .sectionv2-1{
    width: 50%;
} */

/* .sectionv2-2{
    display: flex;
    justify-content: center;
    align-items: center;
} */
    /* width: 50%; */
    /* width: 60%; */
    /* background: red; */
.sectionv2-title{
    font-size: 4rem;
    margin-bottom: 30px;
}
/* __________________________ */
.steps-wrapper{
    /* background: yellow; */
    width: 80vw;
}
</style>