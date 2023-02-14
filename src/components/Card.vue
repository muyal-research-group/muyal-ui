<script >
export  default{
    data(){
        return {show:false}
    },
    props: {
        color: String ,
        title: String,
    },
    methods:{
        toggle_show(){
            this.show =!this.show
        }
    }
}
    
</script>

<template>
    <div class="card">
        <header :class="{['bg--'+color]:true,'pa--sm':true}" @click="toggle_show()">{{ title }}</header>
        <div :class="{'content':true,'show':this.show}">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style>
    .card{
        border-radius: 10px;
        /* height: 500px; */
        /* width: auto; */
        /* min-height: 168px; */
        /* max-width: 641px; */
        /* min-width: 300px; */
    }
    .content{
        /* display: flex; */
        /* border-radius: 0 0 10px 10px; */
        border: thin solid rgba(0,0,0,0.1);
        background-color: #ffffff;
        /* align-self: center; */
        /* justify-content: center; */
        overflow: hidden;
        height: 0;
        transition: all ease 400ms;
    }
    .content.show{
        height: 230px;
        padding: 20px;
    }

</style>