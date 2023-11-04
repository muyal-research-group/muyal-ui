<template>
 <v-layout class="rounded rounded-md">
    <!-- <v-app-bar title="Observatorios"></v-app-bar> -->
    <v-app-bar :elevation="9" title="Observatorios">
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
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        
        <v-list-item title="IARC">
            <v-select
                clearable
                chips
                label="Select"
                :items="[
                    '1','2A','2B','3'
                    ]"
                multiple
            ></v-select>
        </v-list-item>
        <v-list-item title="Año">
            <v-select
                clearable
                chips
                label="Select"
                :items="[
                    '2023',
                    '2022',
                    '2021',
                    ]"
            ></v-select>
        </v-list-item>
        <v-list-item title="Estado">
            <v-select
                clearable
                chips
                label="Select"
                :items="[
                    'Tamaulipas',
                    'Estado 2',
                    'Estado 3',
                    ]"
            ></v-select>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="max-height:1000px; min-height: 300px;">
        <v-carousel  
                height="500px"
                show-arrows="hover"
                >
                <v-carousel-item
                        cover
                    >
                    <div class="d-flex justify-center">

                        <iframe src="https://alpha.tamps.cinvestav.mx/v0/mictlanx/1_2021_TAMAULIPAS" frameborder="0" height="420" width="420"></iframe>
                        </div>
                </v-carousel-item>
                <v-carousel-item
                        cover
                    >
                    <div class="d-flex justify-center">

                        <iframe src="https://alpha.tamps.cinvestav.mx/v0/mictlanx/1_2021_TAMAULIPAS" frameborder="0" height="420" width="420"></iframe>
                        </div>
                </v-carousel-item>
            <!-- <v-carousel-item
                cover
            ></v-carousel-item>

            <v-carousel-item
                cover
            ></v-carousel-item> -->

        </v-carousel>
    </v-main>
  </v-layout>
</template>

<script>
import router from '../../router';

</script>
<style scoped>
.test {
    background: blue;
    display: block;
    height: 100vh;
}
</style>