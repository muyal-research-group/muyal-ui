<template>
    <div class="image-banner" :style = "css_style">
        <!-- <img class="image-banner__img" :src="image" :alt="title "> -->
        <div class="flex justify-content--center align-items--center image-banner__overlay">
            <h1 :class="{'image-banner__title':true,['text-size--'+title_size]:true}"> {{ title }}</h1>
        </div>
    </div>
</template>

<script>
import useBreakpoints from "vue-next-breakpoints";
export default {
    props:["image","title"],
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
    computed :{
        css_style(){
            return {
                '--workshops-bg-image': `url(${this.image})`
            }
        },
        is_mobile() {
            return this.breakpoints.mobile.matches || this.breakpoints.table.matches
        },
        title_size(){
            return this.is_mobile ? 'xxxl':"xl"
        }
    }
}
</script>
<style scoped>
.image-banner{
    width: 100vw;
    position: relative;
    height: 70vh;
    /* background-image: url(/images/workshops/merida/00.jpg); */
    background-image: var(--workshops-bg-image);
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}
.image-banner__img{
    position: absolute;
    /* width: 100vw; */
    /* height: 100vh; */
}
.image-banner__overlay{
    background: rgba(0,0,0,0.3);
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
.image-banner__title{
    color:#fff;
    font-size: 4rem;
}

</style>