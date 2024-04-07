<template>
    <!-- <h1>MICTLANX</h1> -->
    <v-layout class="rounded rounded-md">
        <v-app-bar :elevation="9" title="MictlanX" color="black">
        <template v-slot:prepend>
            <router-link to="/">
                <v-btn icon="mdi-arrow-left"></v-btn>
            </router-link>
            <img width="40" src="/images/mictlanx/mictlan_logo_dark.png">
        </template>

        <template v-slot:append>
            <!-- <v-btn icon="mdi-heart"></v-btn> -->

            <div class="mr-3">
            <v-btn class="mr-3" icon="mdi-account"></v-btn>
            <span >
                {{ user.first_name }} {{ user.last_name }}
            </span>
            </div>
            <!-- <v-btn v-show="!auth"  @click="on_login_click">Iniciar sesión</v-btn> -->
            <v-btn v-show="!auth"  @click="on_login_click">Iniciar sesión</v-btn>
            <v-btn v-show="auth" @click="on_logout_click" icon="mdi-logout"></v-btn>
            <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        </template>
        </v-app-bar>

    <v-main class="d-flex" style="max-height:100vh; min-height: 300px;">

            <v-container class="" v-if="auth">
            </v-container>
            <v-container class="d-flex flex-column align-center justify-center" style="height:600px;" v-else>
                <div class="mb-3"> 
                    <img width="200" src="/images/mictlanx/xolo_unauthorized.png" alt="">
                <!-- <v-img max-width="35px"  src="images/mictlanx/xolo_unauthorized.png"> -->
            <!-- </v-img> -->
                </div>
                  <div>
                    <p class="not-found-text">No tienes acceso, por favor ingresa al sistema con tu usuario y contraseña. <span @click="on_login_click" class="signin-text">Iniciar sesion</span> </p>
                </div>
            </v-container>
            
    </v-main>

        <v-dialog
        v-model="xolo_dialog"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
    >
        <v-card>
            <v-toolbar
              dark
              color="black"
            >
          <v-btn
            icon
            dark
            @click="xolo_dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Xolo: Autenticación por contraseña</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>

        <v-list
          lines="two"
          subheader
        >
        </v-list>
        <v-container
        ma-0 pa-0 
        fluid
        style="width:600px;height:90vh"
        >
        <div
        style="height: 400px;">
        <p>Ingrese sus credenciales para continuar</p>
        <v-text-field
          v-model="username"
          color="black"
          label="Nombre de usuario"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          color="black"
          type="password"
          label="Contraseña"
          variant="underlined"
        ></v-text-field>
        <v-btn
          :loading="xolo_loading"
          block
          color="black"
          @click="on_auth_click"
        >
          Iniciar sesión
        </v-btn>

        </div>
      </v-container>
        <v-footer
        class="justify-center bg-grey-lighten-4"
        >
        <p class="mr-3 footer-text-0">Powered by <b class="footer-text-1">Xolo</b></p>
        <v-img max-width="35px"  src="/images/xolo/logo.png">
        </v-img>
        

      </v-footer>
      </v-card>
    </v-dialog>
    </v-layout>
</template>

<script setup>
    import { onBeforeMount,onMounted,ref,computed,watchEffect } from 'vue';
    const env = import.meta.env.VITE_APP_ENV
    const xolo_port = env == "dev" ? `:${import.meta.env.VITE_APP_XOLO_API_PORT}` : ""
    const xolo_host = env == "dev" ? "localhost" : import.meta.env.VITE_APP_XOLO_API_IP_ADDR
    const protocol = env =="dev" ? "http" : "https"
    const is_loading = ref(true)
    const auth = ref(false) 
    const initial_user = {"username":"Guest", "profile_photo":"","first_name":"Invitado","last_name":""}
    const user = ref(initial_user)
    const username = ref("")
    const password = ref("")
    const xolo_loading = ref(false)
    const xolo_dialog = ref(false)
    const xolo_url = xolo_port == "-1" || xolo_port == -1 || xolo_port =="" ? xolo_host : `${xolo_host}:${xolo_port}`
    const XOLO_BASE_URL = `${protocol}://${xolo_url}`
    const XOLO_AUTH_URL = `${XOLO_BASE_URL}/api/v4/users/auth`
    const on_logout_click = async ()=> {
        auth.value=false
        localStorage.removeItem("access_token")
        localStorage.removeItem("secret")
        localStorage.removeItem("user.username")
        localStorage.removeItem("user.first_name")
        localStorage.removeItem("user.last_name")
        localStorage.removeItem("user.profile_photo")
        localStorage.removeItem("user.email")
        user.value=initial_user
    }
    console.log(XOLO_AUTH_URL)

    const on_auth_click = async () =>{
        try {
            xolo_loading.value=true
            const body = JSON.stringify(
            {
                "username": username.value.trim(),
                "password": password.value.trim(),
            })
            // console.log(body)
            const response = await (fetch(XOLO_AUTH_URL,{
            method:"POST",
            body: body,
            headers: {"Content-Type":"application/json"}
            })) 
            console.log(response,response.status)
            if(response.status!= 200) {
                throw "Xolo: Incorrent username or password - 403 UNAUTHORIZED"
            }
            // if (response.status != 200){

            // }
            const data = await response.json()
            console.log("RESPPOONSE",data)

            localStorage.setItem("user.username",data["username"] ?? "guest")
            localStorage.setItem("user.first_name",data["first_name"] ?? "Guest" )
            localStorage.setItem("user.last_name",data["last_name"] ?? "Guest")
            localStorage.setItem("user.email",data["email"] ?? "guest@test.com")
            localStorage.setItem("user.profile_photo",data["profile_photo"] ?? "https://www.eldersinsurance.com.au/images/person1.png?width=368&height=278&crop=1")
            localStorage.setItem("access_token",data["access_token"] ?? "ACCESS_TOKEN")
            localStorage.setItem("secret",data["temporal_secret"] ?? "SECRET")

            auth.value=true
            xolo_loading.value=false
            xolo_dialog.value=false;
            user.value = data
        } catch (error) {
            alert(error)
            xolo_loading.value=false
            user.value=initial_user
            auth.value=false
        }
}
const on_login_click = ()=>{
  xolo_dialog.value = !xolo_dialog.value
}
</script>


<style>
.not-found-text{
  font-size: 24px;
}
.signin-text{
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
</style>