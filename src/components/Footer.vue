<script>

</script>
<template>
    <div class="footer-wrapper"> 
        <div class="footer__header"></div>
        <div class="footer">
            <img class="mb--md" src="../assets/images/muyal/muyal-black.png">
            <p class="text-size--sm"> Contactanos a través de nuestros diferentes canales y conoce más sobre la Plataforma tecnológica para la gestión, aseguramiento, intercambio y preservación de grandes volúmenes de datos en salud y construcción de un repositorio nacional de servicios de análisis de datos de salud.</p>
            
            <div class="footer__icons mb--md">
                <a class="flex justify-content--center align-items--center circle" href="https://www.facebook.com/cinvestav.lti" target="_blank">
                    <!-- <div >  -->
                        <img src="@/assets/images/icons/facebook-icon-1.svg"> 
                    <!-- </div>  -->
                </a>
                <a class="flex justify-content--center align-items--center circle" href="#">
                    <!-- <div > -->
                        <img src="@/assets/images/icons/instagram-glyph-1.svg">
                    <!-- </div> -->
                </a>
                <a class="flex justify-content--center align-items--center circle" href="#">
                    <!-- <div> -->
                        <img src="@/assets/images/icons/twitter-6.svg">
                    <!-- </div> -->
                </a>
            </div>
            <p>© Copyright 2020 - E-Salud by Cinvestav Tamaulipas</p>
        </div>
    </div>
</template>

<style>
    .footer-wrapper{
        position: relative;
        width: 100vw;
        display: block;
    }
    .footer{
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: column;
        padding: 20px;
        width: 100%;
    }
    .footer__header{
        width: 100%;
        height: 40px;
        background-color: black;
    }
    .footer p{
        text-align: center;
        justify-content: center;
        width: auto;
        min-width: 400px;
        max-width: 1050px;
        margin-bottom: 20px;
    }
    .footer img{
        /* width: 10px; */
        /* height: 10%; */
        width: 100px;
    }
    .footer__icons{
        align-self: center;
        display: flex;
        /* margin-bottom: 10px; */
    }
    
    .footer__icons img{
        --size:25px;
        width: var(--size);
        height: var(--size);
        /* margin: 10px; */
        filter: invert();
    }
    .footer__icons .circle{
        background-color: black;
        position: relative;
        display: block;
        --size:60px;
        width: var(--size);
        height: var(--size);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        /* background: red; */
        /* margin: 10px; */
    }
</style>
