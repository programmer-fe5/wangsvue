import { createApp } from 'vue';
import App from './App.vue';

// Style
import './src/assets/css/main.css';

// PrimeVue
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import router from './playground';

// Preset
import Preset from '@/preset';

const app = createApp(App);

// Init PrimeVue
app.use(PrimeVue, {
  unstyled: true,
  pt: Preset,
});

app.use(router);

app.use(ToastService);
app.directive('tooltip', Tooltip);

app.mount('#app');
