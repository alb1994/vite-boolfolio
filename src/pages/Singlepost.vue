<template lang="">
    <div>
        <p>{{post.title}}</p>
        <p>{{post.content}}</p>
        <p>{{post.slug}}</p>
        <p>{{post.tags}}</p>
        <p>{{post.created_at}}</p>
        <p>{{post.updated_at}}</p>
        <p>{{post.title}}</p>
        <p>{{post.id}}</p>
    </div>
</template>
<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'Singlepost',
    data() {
        return {
            store,
            post: null
        }
    },
    created() {
        this.getsinglePost();
    },
    methods: {
        getsinglePost() {
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.post = response.data.post;
                } else {

                    this.$router.push({ name: 'not-found' })
                }
            });
        }
    },
} 
</script> 
<style lang="">
    
</style>