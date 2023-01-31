<template>
    <div @click="$emit('on_click')" :class="'bg--'+dark_color +' btn mb--sm'"> <span >{{ title }}</span> </div>
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
        min-width: 150px;
        width: 200px;
        display: flex;
        justify-content: center;
        /* background: red !important; */
        /* width: auto; */
    }
    .btn:hover{
        cursor: pointer;
        /* background: red; */
    }
    .btn span{
        color: white;
        text-align: center;
        font-weight: bold;
        min-width: 150px;
    }
</style>