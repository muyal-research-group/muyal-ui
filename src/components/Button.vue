<template>
    <div @click="press()" :class="color +' btn'"> <h2>{{ title }}</h2> </div>
</template>

<script >

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
    .btn p{
        color: white;
        text-align: center;
    }
</style>