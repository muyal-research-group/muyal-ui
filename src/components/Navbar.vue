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
    methods: {
        showNavbar: function () {
            var nav = document.querySelector(".navbar")
            var nodes= nav.childNodes
            var image=document.querySelector("#icon")
            if (window.scrollY > 0) {
                nav.style.backgroundColor="white";
                nodes[1].classList.remove("active")
                image.style.filter="invert()"
            
            } else {
                nav.style.removeProperty("background-color");
                nodes[1].classList.add("active")
                image.style.removeProperty("filter");
            }

        }
    },
    mounted() {
        document.addEventListener('scroll', this.showNavbar)
    }
}

</script>

<template >
    <div class="navbar ">
        <a href="/"> <img src="../assets/muyal-white.png" id="icon" class="icon"></a>
        <div class="items active">
            <ul>
                <li><a href="/"> Inicio</a></li>
                <li class="dropdown">
                    <a class="dropbtn">Plataformas</a>
                    <div class="dropdown-content">
                        <a href="/nez">Nez</a>
                        <a href="/chimalli">Chimalli</a>
                        <a href="/painal">Painal</a>
                        <a href="/xelhua">Xelhua</a>
                        <a href="/alwa">Alwa</a>
                    </div>
                </li>
                <li> <a href="#">Recursos</a></li>
                <li> <a href="#">Acerca de</a></li>
            </ul>
        </div>
    </div>

</template>
<style scoped>
.navbar {
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
}

.icon {
    height: 90px;
    width: 90px;
    float: left;
}

.items {
    margin: auto;
    align-content: center;

}
.items li a{
    color: black;
}
.active li a{
    color: white;
}
.active .dropdown-content a{
    color: black;
}
.items ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.items li {
    float: left;
    
}

.items li a, .dropbtn {
    display: inline-block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
    background-color: rgb(228, 211, 211);
    border-radius: 10px;
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