<template>
<!-- ['bg--'+color]:true -->
    <div 
        @click="$emit('on_click')" 
        :class="{'btn':true,'mb--sm':true}"
        :style="{
            '--hover-color':hover_color,
            '--hover-text-color':hover_text_color,
            '--btn-width':btn_width,
            '--btn-color': color,
        }"
    > 
        <span :class="{['text-color--'+text_color]:true}">{{ text }}</span> 
    </div>
</template>

<script >

    export default{
        props:{
            text: {
                type:String,
                default:"CLICK"
            },
            color: {
                type:String,
                default:"black"
            },
            hover_color:{
                type:String,
                default:"black"
            },
            text_color:{
                type:String,
                default:"white"
            },
            hover_text_color:{
                type:String,
                default:"white"
            },
            btn_width:{
                type: Number,
                default: 200
            }
        },
        methods:{}
    }
</script>

<style>
    .btn{
        border-radius: 10%;
        padding: 10px 20px;
        color:white;
        border-radius: 50px;
        width: var(--btn-width);
        display: flex;
        justify-content: center;
        transition: all ease 300ms;
        background: var(--btn-color);
    }
    .btn:hover{
        cursor: pointer;
        transform: scale(1.05);
        background: var(--hover-color) !important;
    }
    .btn span{
        text-align: center;
        font-weight: bold;
        min-width: 150px;
    }
    .btn:hover span{
        color: var(--hover-text-color) !important;
    }
</style>