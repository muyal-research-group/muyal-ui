
<template>
 <v-layout class="rounded rounded-md">
    <!-- <v-app-bar :elevation="9" title="Observatorios">
     <template v-slot:prepend>
      <router-link to="/">
        <v-btn icon="mdi-arrow-left"></v-btn>
      </router-link>
    </template>
    <template v-slot:append>
        <v-btn icon="mdi-heart"></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
    </v-app-bar> -->
    <v-main class="d-flex align-center justify-center" style="max-height:1000px; min-height: 300px;">
          <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->
        <v-parallax
            class="parallax-container"
            src="https://phoenixchildrensfoundation.org/wp-content/uploads/2023/04/cell-illustration-scaled.jpeg"
         >
            <!-- src="https://www.jax.org/-/media/jaxweb/images/news-and-insights/cancer-cell-rendering-in-purple.jpg" -->
            <v-container fill-height fluid>
                <v-layout  class="d-flex justify-center">
                    <v-flex text-center>
                        <v-card dark color="transparent" elevation="0">
                            <v-card-text>
                                <span class="headline font-weight-bold">
                                    <h1 style="color:white;">Crea observatorios - Identificador Nominal</h1>
                                </span>
                            </v-card-text>
                        </v-card>
                            <v-card
                                loading
                                title=""
                                subtitle=""
                                text=""
                            >
                                <template v-slot:text>
                                    <v-autocomplete
                                        label="Identificador nominal"
                                        :items="[
                                            'obs.v1/MEX.PUB.*/(2020,2023]/[SEXO,RANGO_EDAD,CIE10]',
                                            'obs.v1/MEX.PUB.*/>2020/[CIE10]',
                                            'obs.v1/MEX.PUB.*/(2020,2023]/[CIE10,SEXO]',
                                        ]"
                                    ></v-autocomplete>
                                </template>
                            <v-card-actions>
                                <v-btn>Crear</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>

                    </v-layout>
                </v-container>
            </v-parallax>
        
        </v-main>
    </v-layout>
</template>

<script>

</script>
<style scoped>
.test {
    background: blue;
    display: block;
    height: 100vh;
}
.parallax-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5); /* Adjust the transparency here */
}
</style>