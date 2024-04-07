<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar :elevation="1" title="Product detail">
            <template v-slot:prepend>
            <router-link :to="router_back_link">
                <v-btn icon="mdi-arrow-left"></v-btn>
            </router-link>
            </template>
        </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="max-height:1000px; min-height: 300px;">

    <div class="flex flex-direction--column full-with">

    <div class="d-flex justify-center iframe-full">
        <iframe 
        class="iframe-full"
        :src="`${product.url}`"
        allowfullscreen
        frameborder="0"
        ></iframe>
    </div>
          <v-card
    class="pa-4"
  >
    <!-- class="mx-auto pa-2" -->
    <!-- max-width="600" -->

    <v-list class="full-width">
      <v-list-subheader>Metadatos</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
    </div>
    </v-main>
    </v-layout>
    <!-- <h1>PRODUCT DETAIL</h1> -->
</template>
<script setup>

import { onBeforeMount,onMounted,ref,computed,watchEffect, watch } from 'vue';
import {useRoute,useRouter} from 'vue-router'

const router = useRouter()
const $route = useRoute()
const env = import.meta.env.VITE_APP_OCA_ENV
const protocol = env == "dev" ? "http" : "https"
const port = env == "dev" ? `:${import.meta.env.VITE_APP_OCA_API_PORT}` : ""
const host = env == "dev" ? "localhost" : import.meta.env.VITE_APP_OCA_API_IP_ADDR

const items = ref([]);
const product_map_attr = {
  "pid":"Product ID",
  "description":"Descripción",
  "product_type":"Tipo de Producto",
  "profile":"Perfil"
}
const product = ref({
    "pid":"PRODUCTID",
    "description":"No description yet",
    "level_path":"L1.L2",
    "product_name":"Default product",
    "profile":"V1.V2",
    "url":""
})
    // "text":"Key: value",
    // "icon":"mdi-circle-slice-8"
// const 
// const observatory_id = ref($route.params.observatory_id)
const observatory_id = ref("")
const router_back_link = ref("/observatories")
onBeforeMount(async ()=>{
try {
  const product_id = $route.params.product_id;
  const obid_parm =$route.params.observatory_id
  observatory_id.value = obid_parm
  router_back_link.value = `/observatories/${observatory_id.value}`

  
  // console.log("ROUTEs",$route.params)
  const base_url = `${protocol}://${host}${port}/products/${product_id}`
  // console.log("________________________________")
  // console.log("OBS",observatory_id)
  // console.log("BAKCX___",router_back_link)
  const get_product_ = fetch(base_url,{
    method:"GET"
  }).then(x=>x.json())
  product.value =await get_product_
  console.log("PRODUCT",product)
  const _items = []
  for (const key in product.value) {
    if(key in product_map_attr){
      _items.push({
        "text":`${product_map_attr[key]}: ${product.value[key]}`,
        "icon":"mdi-circle-slice-8"
      })
    }else{
      console.log("KEY",key,key!="tags" , key!="levels")
      if ( key !="tags" && key != "levels")
      _items.push({
        "text":`${key}: ${product.value[key]}`,
        "icon":"mdi-circle-slice-8"
      })
    }
  }
  items.value = _items
  // items.value = [{}]
} catch (error) {
  alert(error)
}

})
</script>

<style>

.iframe-full {
    width: 100%;
    height: 500px;
    max-height: 500px;
}
.full-width{
    display: block;
    width: 100%;
}
</style>