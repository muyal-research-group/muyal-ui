<template>
    <div class="image-banner" :style = "css_style">
        <!-- <img class="image-banner__img" :src="image" :alt="title "> -->
        <div class="flex justify-content--center align-items--center image-banner__overlay">
            <h1 class="image-banner__title"> {{ title }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props:["image","title"],
    computed :{
        css_style(){
            return {
                '--workshops-bg-image': `url(${this.image})`
            }
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