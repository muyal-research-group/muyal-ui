import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Section from "./components/Section.vue";
import PlatformsNav from "./components/PlatformsNav.vue";
import FeatureBox from "./components/FeatureBox.vue";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//  Component registration
app.component("Section",Section);
app.component("PlatformsNav",PlatformsNav);
app.component("FeatureBox",FeatureBox);

app.mount('#app')
