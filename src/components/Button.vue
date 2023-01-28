<template>
    <div @click="press()" :class="'btn bg--nez-primary-dark-color'">
        {{ title }} 
    </div>
</template>

<script >
// import { ref } from 'vue';

    export default{
        props:{
            title: String,
            color: String,
            dark_color:String
        },
        methods:{
            press(){
                console.log("CLICK")
                // return new URL(ref).href
            }
        }
    }
</script>

<style>
    .btn{
        border-radius: 10%;
        padding: 10px 20px;
        color:white;
        border-radius: 50px;
        /* background: red !important; */
        /* width: auto; */
    }
    .btn:hover{
        cursor: pointer;
    }
</style>