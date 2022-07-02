import { createRouter, createWebHistory } from 'vue-router';
import ClientHome from '@/pages/ClientHome.vue';
import ClientLogin from '@/pages/auth/ClientLogin.vue';
import ClientRegister from '@/pages/auth/ClientRegister.vue';

const routes = [
  { path: '/client/login', component: ClientLogin, meta: { layout: 'client' } },
  {
    path: '/client/register',
    component: ClientRegister,
    meta: { layout: 'client' }
  },
  { path: '/', component: ClientHome, meta: { layout: 'client' } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
