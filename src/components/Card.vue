<script >
export  default{
    props: {
        color: String ,
        title: String,
        content: String 
    },
}
    
</script>

<template>
    <div class="card">
        <div :class="color+' borde-superior'"><h2>{{ title }}</h2></div>
        <div class="body">{{ content }}</div>
    </div>
</template>

<style>
    .card{
        border-radius: 10px;
        height: auto;
        width: auto;
        min-height: 168px;
        max-width: 641px;
        min-width: 300px;
    }
    .borde-superior{
        border-radius: 10px 10px 0 0;
    }
    .borde-superior h2{
        color: white;
        text-align: center;
    }
    .body{
        display: flex;
        border-radius: 0 0 10px 10px;
        background-color: #ffffff;
        align-self: center;
        justify-content: center;
        padding: 20px;
    }
    .body p{
        color: black;
        size: 1rem;
        text-align: center;
        text-justify: center;
    }
</style>