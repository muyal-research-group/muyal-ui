<template>
    <div :class="color+' circle'">
        <h2>{{ title }}</h2>
    </div>
</template>
<script>
export  default{
    props: {
        color: String ,
        title: String, 
    },
}
    
</script>
<style>
.circle {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    align-self: center;
    padding: auto;
}

.circle h2 {
    color: white;
    text-align: center;
}
</style>