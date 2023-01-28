<script>

</script>
<template>
    <div class="block"><p>hola</p></div>
    <div class="footer">
        <img src="../assets/muyal-black.png">
        <p> Contactanos a través de nuestros diferentes canales y conoce más sobre la Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.</p>
        
        <div class="social-icon">
            <a href="https://www.facebook.com/cinvestav.lti" target="_blank">
               <div class="circle"> 
                    <img src="@/assets/facebook-icon-1.svg"> 
                </div> 
            </a>
            <a href="#">
                <div class="circle">
                <img src="@/assets/instagram-glyph-1.svg"></div></a>
            <a href="#">
                <div class="circle"><img src="@/assets/twitter-6.svg">
                </div></a>
        </div>
        <p>© Copyright 2020 - E-Salud by Cinvestav Tamaulipas</p>
    </div>
</template>

<style>
    .footer{
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: column;
        padding: 20px;
    }
    .block{
        width: 100%;
        height: 40%;
        background-color: black;
    }
    .footer p{
        text-align: center;
        justify-content: center;
        width: auto;
        min-width: 400px;
        max-width: 1050px;
    }
    .footer img{
        height: 10%;
        width: 10%;
    }
    .social-icon{
        align-self: center;
        display: flex;
    }
    .social-icon img{
        width: 30px;
        height: 30px;
        margin: 10px;
        filter: invert();
    }
    .social-icon .circle{
        background-color: black;
        margin: 10px;
    }
</style>
