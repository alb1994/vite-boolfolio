import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from './pages/Homepage.vue';
import Postlist from './pages/Postlist.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/posts',
            name: 'posts',
            component: Postlist
        }
    ]
});

export { router };
