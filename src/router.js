import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from './pages/Homepage.vue';
import Postlist from './pages/Postlist.vue';
import Categorieslist from './pages/Categorieslist.vue';
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
        },
        {
            path: '/categories',
            name: 'categories',
            component: Categorieslist
        }
    ]
});

export { router };
