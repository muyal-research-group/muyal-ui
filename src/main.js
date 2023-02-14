import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Section from "./components/Section.vue";
import PlatformsNav from "./components/PlatformsNav.vue";
import FeatureBox from "./components/FeatureBox.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
import PortionSection from "./components/PortionSection.vue";
import IconCard from "./components/IconCard.vue"
import Button from "./components/Button.vue";
import ImageBanner from './components/ImageBanner.vue';
import ContactCard from "./components/ContactCard.vue";
import Separator from './components/Separator.vue';
import SimpleSection from './components/SimpleSection.vue';
import ListTable from './components/ListTable.vue'

import App from './App.vue';
import router from './router';
// import Vue from "vue";
import './assets/main.css';

const app = createApp(App);

const MyPlugin = {
  install(app, options) {
    app.config.globalProperties.$resolve_image = (x) => {
        const url  = new URL(x,import.meta.url).href
        return url
    }

    app.config.globalProperties.$resolve_img = (x) => {
        // const url  = new URL(x,import.meta.url).href
        // return url
        return x
    }
  },
}
app.use(MyPlugin)
app.use(createPinia());
app.use(router);
// app.use(VueCarousel)
// app.use(VueGlide)
//  Component registration
app.component("Section",Section);
app.component("PlatformsNav",PlatformsNav);
app.component("FeatureBox",FeatureBox);
app.component("Footer",Footer);
app.component("Card",Card);
app.component("PortionSection",PortionSection);
app.component("IconCard",IconCard);
app.component("Button",Button);
app.component("ImageBanenr",ImageBanner);
app.component("ContactCard",ContactCard);
app.component("Separator",Separator);
app.component("SimpleSection",SimpleSection);
app.component("ListTable",ListTable)
// app.component("Carrousel",Carousel)

app.mount('#app')
