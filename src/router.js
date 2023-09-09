import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from './pages/Homepage.vue';
import Postlist from './pages/Postlist.vue';
import SinglePost from './pages/Singlepost.vue';
import Categorieslist from './pages/Categorieslist.vue';
import Notfound from './pages/Notfound.vue';
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
        },
        {
            path: '/blg/:slug',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/*',
            name: 'not-found',
            component: Notfound
        }
    ]
});

export { router };
