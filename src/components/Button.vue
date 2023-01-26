<template>
    <button v-blind: ref class="button">{{ title }} </button>
</template>

<script >
    export default{
        props:{
            title: String,
            color: string,
            ref,
        }
    }
</script>

<style>
    .button{
        border-radius: 10%;
        width: auto;
        background-color: v-blind('color');
    }
</style>