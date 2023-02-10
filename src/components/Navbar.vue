
<template >
                <!-- :src=" $resolve_image(is_scrolled ? 'assets/images/muyal/muyal-black.png' : 'assets/images/muyal/muyal-white.png')"  -->
    <div :class="{'navbar':true, 'pa--lg':true,'elevated':is_scrolled,[_background_color]:true, 'justify-content--space-between':is_mobile}">
        <router-link to="/"> 
            <img 
                :src="is_scrolled ? scrolled_logo : normal_logo" 
                id="navbar__logo" 
                :class="{'navbar__logo':true}"
            >
        </router-link>

        <div :class="{'navbar__items':true,'hide':is_mobile}">
            <ul class="navbar__items__ul">
                <li :class="{'navbar__item':true}">
                    <router-link class="navbar__link" to="/"> 
                        <span :class="{[text_color]:true }">Inicio</span>
                    </router-link>
                </li>
                <li :class="{'navbar__dropdown':true,'show':dropdowns_hover[0]}" @mouseover="on_hover(0)" >
                    <span :class="{'navbar__item':true,'navbar__link':true,[text_color]:true ,'navbar__dropdown__list':true,'dropbtn':true}">Servicios</span>
                    <div :class="{'navbar__dropdown-content':true, 'show':dropdowns_hover[0], }"  @mouseleave="on_leave(0)">
                        <router-link to="/services/nez">Nez</router-link>
                        <router-link to="/services/chimalli">Chimalli</router-link>
                        <router-link to="/services/painal">Painal</router-link>
                        <router-link to="/services/xelhua">Xelhua</router-link>
                        <router-link to="/services/alwa">Alwa</router-link>
                    </div>
                </li>
                
                <li :class="{'navbar__item':true,[text_color]:true}"> 
                    <router-link class="navbar__link" to="/use-case">
                        <span :class="{[text_color]:true}">Caso de uso</span>
                    </router-link>
                </li>
                <li :class="{'navbar__dropdown':true, }" @mouseover="on_hover(1)"  @mouseleave="on_leave(1)" >
                    <span :class="{'navbar__item':true,'navbar__link':true,[text_color]:true,'navbar__dropdown__list':true,'dropbtn':true}">Recursos</span>
                    <div :class="{'navbar__dropdown-content':true, 'show':dropdowns_hover[1]}">
                        <router-link to="/resources/publications"  >Publicaciones</router-link >
                        <router-link to="/resources/workshops" >Tallares</router-link>
                    </div>
                </li>
                <li :class="{'navbar__item':true,[text_color]:true}"> 
                    <router-link class="navbar__link" to="/contact">
                        <span :class="{[text_color]:true}">Conctacto</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <div v-if="is_mobile" :class="{'menu__bars':true,}" @click ="on_click_bars">
            <div v-for="i in [0,1,2]" :class ="{'bar':true, [_bars_color]:true , 'hide':hide_bar[i], ['cross-'+i]: i!=1 ? show_side_menu : false}"></div>
        </div>
    
    </div>
        
    <div v-if="is_mobile" class="navbar-wrapper">
        <div :class ="{'overlay':true,'show':show_side_menu}" >
            <nav :class ="{'side_menu':true, 'show':show_side_menu}">
                    <ul class="side_menu__items">
                        <li class="side_menu__item">
                            <router-link to="/">Inicio</router-link>
                        </li>
                        <li class="side_menu__item">
                            <div class="side_menu__dropdown">
                                <div class="flex justify-content--space-between"  @click="side_menu_dropdown(0)">
                                    <span class="side_menu__dropdown-text">Servicios</span> 
                                    <img :class="{'rotate-180':dropdown_hide[0]}" src="/images/icons/arrow-down.svg" alt="DOWN" width="15" >
                                </div>
                                <ul :class="{'side_menu__dropdown-items':true ,'hide':dropdown_hide[0], 'dropdown-h-230px':true }">
                                    <li class="side_menu__subitem">
                                        <router-link to="/services/nez">Nez</router-link>
                                    </li>
                                    <li class="side_menu__subitem"><router-link to="/services/chimalli">Chimalli</router-link></li>
                                    <li class="side_menu__subitem"><router-link to="/services/painal">Painal</router-link></li>
                                    <li class="side_menu__subitem"><router-link to="/services/xelhua">Xelhua</router-link></li>
                                    <li class="side_menu__subitem"><router-link to="/services/alwa">Alwa</router-link></li>
                                </ul>
                            </div>

                        </li>
                        <li class="side_menu__item"><router-link to="/use-case">Caso de uso</router-link></li>

                        <li class="side_menu__item">
                            <div class="side_menu__dropdown ">
                                <div class="flex justify-content--space-between"  @click="side_menu_dropdown(1)">
                                    <span class="side_menu__dropdown-text">Recursos</span> 
                                    <img :class="{'rotate-180':dropdown_hide[1]}" src="/images/icons/arrow-down.svg" alt="DOWN" width="15" >
                                </div>
                                <ul :class="{'side_menu__dropdown-items':true ,'hide':dropdown_hide[1], 'dropdown-h-100px':true }">
                                    <li class="side_menu__subitem"><router-link to="/resources/publications">Publicaciones</router-link></li>
                                    <li class="side_menu__subitem"><router-link to="/resources/workshops">Talleres</router-link></li>
                                    <!-- <li class="side_menu__subitem"><router-link to="/xelhua">Xelhua</router-link></li> -->
                                    <!-- <li class="side_menu__subitem"><router-link to="/alwa">Alwa</router-link></li> -->
                                </ul>
                            </div>

                        </li>
                        <!-- <li class="side_menu__item">
                            <router-link to="/resources">Recursos</router-link>
                        </li> -->
                        <li class="side_menu__item"><router-link to="/contact">Contacto</router-link></li>
                    </ul>
            </nav>
        </div>
    </div>

</template>
<script>
import useBreakpoints from "vue-next-breakpoints";
// import Button from "../components/Button.vue"
export default {
    props: {
        // color: String,
        // dark_color: String,
        bars_color:{
            type: String, 
            default: "black",
        },
        scrolled_bars_color:{
            type: String, 
            default: "black",
        },
        background_color:{
            type:String,
            default:"white"
        },
        scrolled_background_color:{
            type:String,
            default:"white"
        },
        text_color_normal:{
            type:String,
            default: "white"
        },
        text_color_scrolled:{
            type:String,
            default:"black"
        },
        scrolled_logo:{
            type:String, 
            default: "/images/muyal/muyal-black.png"
        },
        normal_logo:{
            type:String,
            default:"/images/muyal/muyal-white.png"
        }
    },
  setup(){
      const breakpoints = useBreakpoints({
          mobile:[240,768], // max-width: 600px
          table:[768,1024],
          desktop: [1281] // min-width: 601px
      });

      return {
          breakpoints
      };
  },
  computed:{
    _background_color(){
        return 'bg--' + (!this.is_scrolled ? this.background_color : this.scrolled_background_color)
        // "bg--"+this.color : "bg--white"
    },
    _bars_color(){
        return 'bg--'+(this.is_scrolled ? this.bars_color : this.scrolled_bars_color)
    },  
    text_color(){
        return "text-color--"+ (!this.is_scrolled ? this.text_color_normal : this.text_color_scrolled)
    },
    is_mobile(){
      return this.breakpoints.mobile.matches || this.breakpoints.table.matches
    }
  },
    // , components: {
    //     Button
    // },
    data(){
        return {is_scrolled:false,show_side_menu:false,dropdowns_hover:[false,false],hide_bar:[!true,!true,!true,],dropdown_hide:[true,true]}
    },
    methods: {
        show_navbar: function () {
            this.is_scrolled = window.scrollY > 0
        }, 
        on_click_bars(){
            this.show_side_menu = !this.show_side_menu;
            this.hide_bar[1]=!this.hide_bar[1];
        },
        on_hover(index){
            this.dropdowns_hover[index] = true;
        //  alert("HOVER ON: "+index)
        },
        on_leave(index){
            console.log("LEAVE "+index)
            this.dropdowns_hover[index] = false;
        },
        side_menu_dropdown(index){
            this.dropdown_hide[index] = !this.dropdown_hide[index];
        }

    },
    mounted() {
        document.addEventListener('scroll', this.show_navbar)
    }
}

</script>

<style scoped>
.side_menu__dropdown-items{
    list-style: none;
    padding:15px;
    transition: all ease 400ms;
}

.dropdown-h-230px{
    height: 230px;
}
.dropdown-h-100px{
    height: 100px;
}

.side_menu__dropdown-items.hide{
    position: absolute;
    height: 0;
    z-index: -100;
    /* background: red; */
}

.side_menu__subitem{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.side_menu__subitem:last-child{
    border-bottom: none;
    /* background: red; */
}
.rotate-180{
    transform: rotate(180deg);
}
.navbar-wrapper{
    position: fixed;
    width: 100vw;
    height: 100vh;
    /* z-index: 10; */
}
.overlay {
    background: rgba(0,0,0,0.5);
    position: absolute;
    top:0;
    z-index: 1000;
}
.overlay.show{
    width: 100vw;
    height: 100vh;
}
.side_menu{
    position: absolute;
    /* top:0; */
    /* left: 0; */
    /* z-index: 1000000; */
    height: 100vh;
    width: 400px;
    background-color: white;
    left:-1000px;
    transition: left ease-in-out 700ms;
    /* z-index: 100; */
    /* background: red !important; */
    /* right: 10px; */
}
.side_menu.show {
    left:0;
}

.side_menu__items{
    padding:15px;
    /* background: red; */
}
.side_menu__item{
    padding: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    text-decoration: none;
    list-style: none;
}

/* __________________ */
/* router-link{
    text-decoration: none;
} */
.menu__bars{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    /* background: red; */
}
.bar{
    width: 40px;
    height: 6px;
    margin-bottom: 5px;
    /* background: red; */
    border-radius: 5px;
    opacity: 1;
    transition: all ease 500ms;
    /* transition:  rotate ease 400ms, translate ease 1000ms; */
}
.bar.hide{
    opacity: 0;
}
.bar.cross-0 {
    /* background: red !important; */
    transform: rotate(40deg) translate(9px,10px);
    /* height: 100px; */
}
.bar.cross-2 {
    /* background: yellowgreen !important; */
    /* width: 45px; */
    transform:rotate(-40deg) translate(5px,-7px);
    /* height: 100px; */
}
.navbar {
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    /* position: absolute; */
    top: 0;
    width: 100%;
    z-index: 100;
    /* background: red; */
    /* padding: 20px; */
    /* padding: 60px; */
    /* background: red; */
}
.navbar__items.hide{
    opacity: 0;
    display: none;
}

.navbar__logo {
    --size:50px;
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
    /* padding: 10px 25px; */
    text-decoration: none;
    cursor: pointer;
    position: relative;
    /* background: yellow; */
}
.navbar__link {
    display: block;
    padding: 10px 25px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    display: block;
}
.navbar__item:hover{
    background: white;
    /* border-radius: 5; */
    color: black !important;
}
.navbar__item:hover span{
    color:black !important;
    /* background: red !important; */
}

/* .active li a{
    color: white;
}
.active .navbar__dropdown-content a{
    color: black;
} */

/* li .navbar__dropdown {
    display: inline-block;
} */

/* .navbar__dropdown{ */
    /* background: red !important; */
/* } */
.navbar__dropdown .navbar__dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    /* border-radius: 0 0 10px 10px; */
    /* z-index: 10000; */
}

.navbar__dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    transition: background-color ease 700ms, box-shadow ease 700ms;
}

.navbar__dropdown-content a:hover {
    background-color: #f1f1f1;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.5);
}
.navbar__dropdown-content a:last-child:hover {
    background-color: #f1f1f1;
    box-shadow: none;
}


.navbar__dropdown-content{
    /* height: 400px; */
    /* position: relative; */
    z-index: 1000;
} 
.navbar__dropdown-content.show{
    display: block;
    /* background: red; */
}
/* .navbar__dropdown:hover .navbar__dropdown-content {
    display: block;
} */
</style>