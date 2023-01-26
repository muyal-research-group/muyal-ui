<script>
    let contador=1;
    let url='';
    export default{
        props:{
            paths:{ type: Array},
        },
        methods:{
            clickNext() {
                console.log("se hio click")
                contador++;
            },
            clickPrevius(){
                if(contador==0){
                    console.log("se hio click")
                }
            },
            showFrame(){
                if(this.paths[contador]!=""){
                    url=this.paths[contador];
                    console.log('valor del contador:',contador);
                    console.log(url);
                    return  url;
                }
            }

        }
    }
    
</script>
<template>
    <div class="carrusel">
        <div @click="clickPrevius" class="previus">a</div>
        <div class="slider">
            <img :src="showFrame()" >
        </div>
        <div @click="clickNext" class="next">b</div>
    </div>
</template>
<style>
    .carrusel {
        display: flex;
        height: 100%;
        width: 100%;
        align-self: center;
    }
    .slider{
        display: flex;
        background-color: lightgray;
        height: 80%;
        width: 80%;
        align-self: center;
        align-content: center;
        border-radius: 10px;
    }
    .slider img{
        align-self: center;
        height: 70%;
        width: 70%;
    }
    .carrusel .previus{
        display: flex;
        background-color: aqua;
        cursor: pointer;
    }
    .carrusel .next{
        display: flex;
        background-color: aqua;
        cursor: pointer;
    }
</style>