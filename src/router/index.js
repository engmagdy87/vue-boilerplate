import VueRouter from 'vue-router';
import Home from '@/containers/Home.vue';

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '*', component: Home }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
