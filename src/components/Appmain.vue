<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            posts: [],
            loading: true
        };
    },
    created() {
        this.getposts();
    },
    methods: {
        getposts() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/posts`).then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.posts = response.data.results;
                    this.loading = false;
                } else {
                    // Handle error here
                }
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
            </div>
        </div>
        <div v-if="loading" class="loading">Loading...</div>
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