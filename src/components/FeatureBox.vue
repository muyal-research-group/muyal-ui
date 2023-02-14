<template>
    <div :style="styleObject" class="pa--md flex flex-direction--column align-items--center feature-box">
        <div class="feature-box__image-wrapper">
            <img class="feature-box__image" width="150" :src="$resolve_image(image)" :alt="title">
        </div>
        <div class="feature-box__title-wrapper">
            <h2 class="feature-box__title">{{ title }}</h2>
        </div>
        <ul class="feature-box__list">
            <li class="feature-box__list__item" v-for="item in items">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["title","items","image","hover_color"],
    computed: {
        styleObject(){
            return {
                "--hover-color":this.hover_color
            }
        },
        // image_url(){
        //     return new URL("../assets/"+this.image,import.meta.url).href
        // }
    }
}
</script>
<style scoped>
.feature-box {
    /* position: relative; */
    background: rgba(0, 0,0,0.01);
    border: thin dashed rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 350px;
    padding: 40px;
    /* z-index: -1; */
}
.feature-box:hover {
    cursor: pointer;
    box-shadow: 0px 1px 20px 5px rgba(0, 0,0,.1);
    transform: scale(1.05);
    /* scale: 1.02; */
    transition: transform ease-in 300ms;
    /* transition: background ease-in 200ms; */
    /* transition: color ease 0.5s; */
    /* transition: box-shadow ease-in 0.5s; */

    background: var(--hover-color) !important;
    color: white;
}
.feature-box__title-wrapper{
    margin-bottom: 10px;
}
.feature-box__title{
    font-size: 1.1rem;
}
</style>