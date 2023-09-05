<script>
import axios from 'axios';
import { store } from '../store.js';
import Postcard from '../components/Appcard.vue';

export default {
    name: 'Postlist',
    components: {
        Postcard
    },
    data() {
        return {
            store,
            posts: [],
            loading: true,
            currentPage: 1,
            lastPage: null,
        };
    },
    created() {
        this.getPosts(1);
    },
    methods: {
        getPosts(numPage) {
            this.loading = true;
            //axios.get(`${this.baseUrl}/api/posts`).then((response) => {
            //    console.log(response);
            //    if (response.data.success) {
            //        this.posts = response.data.results;
            //        this.loading = false;
            //    } else {
            //        // Handle error here
            //    }
            //});

            axios.get(`${this.store.baseUrl}/api/posts`, { params: { page: numPage } })
                .then((response) => {
                    if (response.data.success) {
                        this.posts = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.loading = false;
                    }
                })
                .catch((error) => {
                    // Gestisci eventuali errori qui
                    console.error("Si è verificato un errore nella richiesta GET:", error);
                });
        }
    }
};
</script>

<template>
    <div>
        <div>
            <div v-for="post in posts" :key="post.id" class="post-card">
                <Postcard :post="post"></Postcard>
            </div>
            <div v-if="loading" class="loading">Loading...</div>
            <div>
                <nav>
                    <ul>
                        <li :class="currentPage === 1 ? 'disabled' : ''">
                            <button @click="getPosts(currentPage - 1)">Precedente</button>
                        </li>
                        <li :class="currentPage === lastPage ? 'disabled' : ''">
                            <button @click="getPosts(currentPage + 1)">Successiva</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>


<style scoped>
.post-card {
    display: inline-block;
    margin: 10px;
}
</style>
