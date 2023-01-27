<template>
    <div class="step__description">
        <div class="step">
            <img class="step__img" :src="image_url" :alt="title">
            <h4 class="step__title">{{ title }}</h4>
            <p class ="step__text">{{ text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["title","text","image"],
    computed:{
        image_url(){
            return new URL("../assets/"+this.image,import.meta.url).href
        }
    }
}
</script>
<style scoped>
.step__description{
    background: white;
    height: 400px;
    border-radius: 10px;
}
.step__header{
    /* background: red; */
    padding: 40px;
    /* width: 1000px; */
}
.step__header__title{
    font-size: 2rem;
    text-align: center;
}

.step__img{
    width: 50px;
    /* margin-bottom: 30px; */
}

.step__title{
    font-size: 1.5rem;
    margin-bottom: 10px;
}
.step__text {
    font-size: 1.2rem;
    color:#565656;
    text-align: justify;
}
.step{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
}
</style>
