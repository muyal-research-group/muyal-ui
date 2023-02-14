<template>

    <section class="simple_section pa--xl">
        <header class="mb--lg simple_section__header flex justify-content--center flex-direction--column align-items--center">
            <h1 :class="{'text-align--justify':true, 'simple_section__title':true, ['text-size--'+title_size]:true}">{{ title }}</h1>
            <span class="simple_section__subtitle text-color--light-grey-2">{{ subtitle }} </span>
        </header>
        <div class="simple_section__body">
            <slot name="body"></slot>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        title:{type:String,default:"DEFAULT"},
        subtitle:{type:String,default:"SUBTITLE"},
        title_size:{type:String,default:"lg"}
    }
}
</script>
