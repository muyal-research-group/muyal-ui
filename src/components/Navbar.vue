
<template >
    <div :class="{'navbar':true, 'pa--lg':true,'bg--white':is_scrolled,'elevated':is_scrolled,['bg--'+color]:!is_scrolled}">
        <router-link to="/"> 
            <img 
                :src=" $resolve_image(is_scrolled ? 'assets/images/muyal/muyal-black.png' :'assets/images/muyal/muyal-white.png')" 
                id="navbar__logo" 
                :class="{'navbar__logo':true}"
            >
        </router-link>

        <div class="navbar__items active">
            <ul class="navbar__items__ul">
                <li :class="{'navbar__item':true}">
                    <router-link to="/"> 
                        <span :class="{'text-color--white':!is_scrolled, 'text-color--black':is_scrolled}">Inicio</span>
                    </router-link>
                </li>
                <li class="navbar__dropdown dropdown">
                    <span :class="{'navbar__item':true,'text-color--white':!is_scrolled, 'text-color--black':is_scrolled,'navbar__dropdown__list':true,'dropbtn':true}">Plataformas</span>
                    <div class="navbar__dropdown-content dropdown-content">
                        <router-link to="/nez">Nez</router-link>
                        <router-link to="/chimalli">Chimalli</router-link>
                        <router-link to="/painal">Painal</router-link>
                        <router-link to="/xelhua">Xelhua</router-link>
                        <router-link to="/alwa">Alwa</router-link>
                    </div>
                </li>
                <li :class="{'navbar__item':true,'text-color--white':!is_scrolled, 'text-color--black':is_scrolled}">
                    <router-link to="/resources">
                        <span :class="{'text-color--white':!is_scrolled, 'text-color--black':is_scrolled}">Recursos</span>
                    </router-link>
                </li>
                <li :class="{'navbar__item':true,'text-color--white':!is_scrolled, 'text-color--black':is_scrolled}"> 
                    <router-link to="/about">
                        <span :class="{'text-color--white':!is_scrolled, 'text-color--black':is_scrolled}">Acerca de</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
import Button from "../components/Button.vue"
export default {
    props: {
        color: String,
        dark_color: String
    }
    , components: {
        Button
    },
    // computed :{
        // is_scrolled(){
        //     const x = window.scrollY > 0;
        //     console.log("IS_SCROLLED",x)
        //     return x
        // }
    // },
    data(){
        return {is_scrolled:false}
    },
    methods: {
        show_navbar: function () {
            this.is_scrolled = window.scrollY >0
        }
    },
    mounted() {
        document.addEventListener('scroll', this.show_navbar)
    }
}

</script>

<style scoped>
/* router-link{
    text-decoration: none;
} */
.navbar {
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    /* position: absolute; */
    top: 0;
    width: 100%;
    z-index: 1000;
    /* padding: 20px; */
    /* padding: 60px; */
    /* background: red; */
}

.navbar__logo {
    --size:60px;
    height: var(--size);
    width: var(--size);
    /* margin-left: 20px; */
    /* float: left; */
}
.elevated{
    box-shadow: 0px 5px 5px 2px rgba(0,0,0,.1);
}

.navbar__items {
    margin: auto;
    align-content: center;

}
.navbar__items__ul {
    list-style-type: none;
    /* list-style: none; */
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    color:white;
    /* background: red; */
}
.navbar__item {
    display: block;
    padding: 10px 25px;
    text-decoration: none;
    cursor: pointer;
}
.navbar__item:hover{
    background: white;
    border-radius: 50px;
    color: black !important;
}
.navbar__item:hover span{
    color:black !important;
    /* background: red !important; */
}

/* .navbar__items li a, .dropbtn {
    display: inline-block;
    text-align: center;
    padding: 14px 16px;
} */

/* li a:hover,
.dropdown:hover .dropbtn {
    background-color: rgb(228, 211, 211);
    border-radius: 10px;
}  */
.active li a{
    color: white;
}
.active .dropdown-content a{
    color: black;
}

li .dropdown {
    display: inline-block;
}

.dropdown .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 0 0 10px 10px;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>