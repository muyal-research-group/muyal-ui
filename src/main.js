import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Section from "./components/Section.vue";
import PlatformsNav from "./components/PlatformsNav.vue";
import FeatureBox from "./components/FeatureBox.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
import PortionSection from "./components/PortionSection.vue";

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
//  Component registration
app.component("Section",Section);
app.component("PlatformsNav",PlatformsNav);
app.component("FeatureBox",FeatureBox);
app.component("Footer",Footer);
app.component("Card",Card);
app.component("PortionSection",PortionSection);

app.mount('#app')
