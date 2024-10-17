import {createApp, h} from 'vue';
import App from './App.vue'
import '@/style.scss'
import {setupRouter} from './plugins/route';
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


const app = createApp({
    render: () => h(App),
});

// Router setup
const router = setupRouter();
app.use(router);

// Pinia setup
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.mount('#app');
