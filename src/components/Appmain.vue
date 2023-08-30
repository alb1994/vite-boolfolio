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
        this.getPosts();
    },
    methods: {
        getPosts() {
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
        <div class="container">
            <div class="row">
                <div class="col-12">
                    boolfolio
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Add your styles here */
</style>