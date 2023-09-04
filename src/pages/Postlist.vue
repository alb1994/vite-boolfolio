<script>
import axios from 'axios';

export default {
    name: 'Postlist',
    data() {
        return {
            baseUrl: 'http://localhost:8000',
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

            axios.get(`${this.baseUrl}/api/posts`, { params: { page: numPage } })
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
        <div v-for="post in posts" :key="post.id" class="post-card">
            <div class="card">
                <h2>{{ post.title }}</h2>
                <p>{{ post.content }}</p>
                <div v-if="post.tags">
                    <div v-for="tag in post.tags" :key="tag.id">
                        <h1>{{ tag.name }}</h1>
                    </div>
                </div>
                <div>
                    <span v-if="post.category">{{ post.category.name }}</span>
                    <span v-else>Categoria non assegnata</span>
                </div>
            </div>
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
</template>


<style scoped>
.post-card {
    display: inline-block;
    margin: 10px;
}

.card {
    border: 1px solid #ccc;
    padding: 10px;
}

.card h2 {
    margin: 0;
}

.loading {
    text-align: center;
    padding: 20px;
}
</style>
