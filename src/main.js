import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins/plugin-kit'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAccordion } from "vue3-rich-accordion";

createApp(App).use(router).use(store).use(useAccordion).use(plugins).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
