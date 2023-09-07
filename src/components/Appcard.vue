<template>
    <div class="postcard">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <div v-if="post.tags && post.tags.length > 0">
            <div v-for="tag in post.tags" :key="tag.id">
                <h3>{{ tag.name }}</h3>
            </div>
        </div>
        <div>
            <span v-if="post.category">{{ post.category.name }}</span>
            <span v-else>Categoria non assegnata</span>
            <Router-Link :to="{ name: 'single-post', params: { slug: post.slug } }">
                Dattagli
            </Router-Link>
        </div>
    </div>
</template>
  
<script>
import { store } from '../store.js';
export default {
    name: "Postcard",
    props: {
        post: Object,
    },
    data() {
        return {
            store,
        }
    },
};
</script>
  
<style scoped>
.postcard {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}

.postcard h2 {
    margin: 0;
    font-size: 18px;
}

.postcard h3 {
    margin: 5px 0;
    font-size: 14px;
}

.loading {
    text-align: center;
    padding: 20px;
}
</style>