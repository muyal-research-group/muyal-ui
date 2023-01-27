<template>
    <div @click="press()" :class="color +' btn'">{{ title }} </div>
</template>

<script >
import { ref } from 'vue';

    export default{
        props:{
            title: String,
            color: string,
            ref: string,
        },
        methods:{
            press(){
                return new URL(ref).href
            }
        }
    }
</script>

<style>
    .btn{
        border-radius: 10%;
        width: auto;
    }
    .btn:hover{
        background-color: rgb(193, 194, 248);
    }
</style>