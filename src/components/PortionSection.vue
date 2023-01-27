<template>
        <div class=" sectionv2-wrapper">
            <div class="flex sectionv2-container">
                <div class="sectionv2-2">
                    <img class="sectionv2__img" :width="image_width" :src="image_url" :alt="title">
                </div>
                <div class="flex flex-direction--column align-items--center sectionv2-title-wrapper sectionv2-1">
                    <h1 class="sectionv2-title">{{ title }}</h1>
                    <p class="text-size--md text-align--justify">{{ text }}</p>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props:["title","text","image","image_width"],
    computed:{
        image_url(){
            return new URL("../assets/"+this.image,import.meta.url).href
        }
    }
}
</script>
<style scoped>
.sectionv2__img{
 min-width: 500px;   
}
.sectionv2-wrapper{
    padding: 60px;
}
.sectionv2-1{
    width: 50%;
}

.sectionv2-2{
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    /* width: 60%; */
    /* background: red; */
}
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