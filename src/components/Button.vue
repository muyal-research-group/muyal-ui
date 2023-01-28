<template>
    <div @click="press()" :class="color +' btn'"> <h2>{{ title }}</h2> </div>
</template>

<script >
    export default{
        props:{
            title: String,
            color: String,
            ref: String,
        },
        methods:{
            press(){
                console.log("presioanado")
                window.location.href=ref
            }
        }
    }
</script>

<style>
    .btn{
        border-radius: 10%;
        width: auto;
        cursor: pointer;
    }
    .btn:hover{
        background-color: rgb(193, 194, 248);
    }
    .btn p{
        color: white;
        text-align: center;
    }
</style>