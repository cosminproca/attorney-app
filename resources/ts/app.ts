import { createApp } from 'vue';
import App from '@/components/App.vue';
import router from '@/router';
import '~/scss/app.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
