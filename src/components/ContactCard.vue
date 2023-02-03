<template>
    <div class="pa--xl">

        <div class="contact">
            <div class="flex justify-content--center contact__image-container">
                <img class="contact__image" :src="profile_photo" :alt="email">
            </div> 
            <div class="flex flex-direction--column align-items--center contact__desc">
                <span class="mt--md contact__fullname">{{ fullname }}</span>
                <span class="mb--md contact__position">{{ position }}</span>
                
                <span class="contact__work">{{ company }}</span>
                <span class="mb--md contact__company-address">{{ company_address }}</span>
                
                <span class="contact__phone-number">{{ phone_number }}</span>
                <span class="contact__email">{{ email }}</span>
                <a class="contact__web" :href="web">Sitio web</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["profile_photo","fullname","position","company","company_address","phone_number","email","web"]
}
</script>
<style scoped>
.contact{
    
    width: 450px;
    /* height: 500px; */
    /* height: 300px; */
    background: white;
    padding: 50px;
    border-radius: 5px;
    transition: box-shadow ease 300ms;
}
.contact:hover{

    box-shadow: 0px 5px 25px 5px rgba(0,0,0,0.1);
}
.contact__image{
    border-radius: 100%;
    --size: 150px;
    height: var(--size);
    width: var(--size);

}
.contact__image-container{
    /* background: yellow; */
}
.contact__desc{}
.contact__fullname{
    font-size: 1.5rem;
    font-weight: 500;
}
.contact__position{
    font-size: 1rem;
    color: rgba(0,0,0,0.3);
}
.contact__work{
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
}
.contact__company-address{
    font-size: 0.8rem;
    text-align: center;
    /* background: red; */
}
.contact__phone-number{}
.contact__web, .contact__email{
    color: rgb(91, 143, 255);
    text-decoration: underline;
}
</style>