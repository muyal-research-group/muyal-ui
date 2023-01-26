<template>
    <div class="feature-card">
        <img class="feature-card__icon" :src="icon" alt="">
        <h2 class="feature-card__title">{{ title }}</h2>
        <p class="feature-card__text">{{ text }}</p>
    </div>
</template>
<script >
export default {
    props:["icon","title","text"]
}
</script>
<style scoped>
.feature-card{
    background: white;
}
</style>