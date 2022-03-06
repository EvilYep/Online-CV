require('./bootstrap');

//require('alpinejs');

import { createApp } from "vue";
import router from './router';

import App from "./layouts/App";

createApp({
    components: {
        App,
    }
}).use(router).mount('#app');
