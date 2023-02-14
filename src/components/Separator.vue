<template>
    <div :class="{['separator--'+type]:true}" :style="{
        'height':size+'px',
        '--size':size+'px',
    }">
    </div>
</template>

<script>
export default {
    props:{
        size:{
            type:Number,
            default:30
        }, 
        type:{
            type:String,
            default:"muyal"
        }
    }
}
</script>
<style scoped>

.separator--muyal {
     background-image:
        linear-gradient(to right, #FF6600, #FF6600), /* gradient 1 as solid color */
        linear-gradient(to right, #FF0000, #FF0000), /* gradient 2 as solid color */
        linear-gradient(to right, #990000, #990000), /* gradient 3 as solid color */
        linear-gradient(to right,#FF00FF, #FF00FF); /* gradient 3 as solid color */
        /* url('http://lorempixel.com/400/200/'); image */
    background-repeat: no-repeat; /* same as no-repeat, no-repeat, no-repeat */
    background-position:
        0 0, /* gradient 1 */
        20px 0, /* gradient 2 */
        40px 0, /* gradient 3 */
        60px 0; /* image position */
    background-size:
        25% var(--size),
        50% var(--size),
        75% var(--size),
        100%  var(--size);
}
.separator--nez {
     background-image:
        linear-gradient(to right, var(--nez-primary-color),var(--nez-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--nez-primary-color-dark), var(--nez-primary-color-dark)); /* gradient 2 as solid color */
    background-repeat: no-repeat; /* same as no-repeat, no-repeat, no-repeat */
    background-position:
        0 0, /* gradient 1 */
        20px 0; /* gradient 2 */
        /* 40px 0, gradient 3 */
        /* 60px 0; image position */
    background-size:
        55% var(--size),
        100% var(--size);
        /* 75% var(--size), */
        /* 100%  var(--size); */
}
.separator--xelhua {
     background-image:
        linear-gradient(to right, var(--xelhua-primary-color),var(--xelhua-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--xelhua-primary-color-dark), var(--xelhua-primary-color-dark)), /* gradient 2 as solid color */
        linear-gradient(to right, var(--xelhua-primary-color),var(--xelhua-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--xelhua-primary-color-dark), var(--xelhua-primary-color-dark)); /* gradient 2 as solid color */
    background-repeat: no-repeat; /* same as no-repeat, no-repeat, no-repeat */
    background-position:
        0 0, /* gradient 1 */
        20px 0, /* gradient 2 */
        40px 0,
        60px 0;
    background-size:
        25% var(--size),
        50% var(--size),
        75% var(--size),
        100%  var(--size);
        /* 75% var(--size), */
        /* 100%  var(--size); */
}
.separator--chimalli {
     background-image:
        linear-gradient(to right, var(--chimalli-primary-color),var(--chimalli-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--chimalli-primary-color-dark),var(--chimalli-primary-color-dark)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--chimalli-primary-color),var(--chimalli-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--chimalli-primary-color-dark), var(--chimalli-primary-color-dark)); /* gradient 2 as solid color */
    background-repeat: no-repeat; /* same as no-repeat, no-repeat, no-repeat */
    background-position:
        0 0, /* gradient 1 */
        20px 0, /* gradient 2 */
        40px 0, 
        60px 0;
    background-size:
        25% var(--size),
        50% var(--size),
        75% var(--size),
        100%  var(--size);
}
.separator--painal{
     background-image:
        linear-gradient(to right, var(--painal-primary-color),var(--painal-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--painal-primary-color-dark), var(--painal-primary-color-dark)); /* gradient 2 as solid color */
    background-repeat: no-repeat; /* same as no-repeat, no-repeat, no-repeat */
    background-position:
        0 0, /* gradient 1 */
        20px 0; /* gradient 2 */
        /* 40px 0, gradient 3 */
        /* 60px 0; image position */
    background-size:
        55% var(--size),
        100% var(--size);
        /* 75% var(--size), */
        /* 100%  var(--size); */
}
.separator--alwa{
     background-image:
        linear-gradient(to right, var(--alwa-primary-color),var(--alwa-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--alwa-primary-color-dark), var(--alwa-primary-color-dark)); /* gradient 2 as solid color */
    background-repeat: no-repeat; /* same as no-repeat, no-repeat, no-repeat */
    background-position:
        0 0, /* gradient 1 */
        20px 0; /* gradient 2 */
        /* 40px 0, gradient 3 */
        /* 60px 0; image position */
    background-size:
        55% var(--size),
        100% var(--size);
        /* 75% var(--size), */
        /* 100%  var(--size); */
}
.separator--use-case{
     background-image:
        linear-gradient(to right, var(--use-case-primary-color),var(--use-case-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--use-case-primary-color-dark), var(--use-case-primary-color-dark)), /* gradient 2 as solid color */
        linear-gradient(to right, var(--use-case-primary-color),var(--use-case-primary-color)), /* gradient 1 as solid color */
        linear-gradient(to right, var(--use-case-primary-color-dark), var(--use-case-primary-color-dark)); /* gradient 2 as solid color */
    background-repeat: no-repeat; /* same as no-repeat, no-repeat, no-repeat */
    background-position:
        0 0, /* gradient 1 */
        20px 0, /* gradient 2 */
        40px 0,
        60px 0; 
    background-size:
        25% var(--size),
        50% var(--size),
        75% var(--size),
        100%  var(--size);
}


</style>