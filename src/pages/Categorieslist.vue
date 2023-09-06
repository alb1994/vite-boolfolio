<template>
    <div>
        <p>boolpres - categorie</p>
        <div v-for="category in categories" :key="category.id">
            Nome della categoria: {{ category.slug }}
        </div>
        <a href="#">Dettaglio categorie</a>
    </div>
</template>
<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: "Categorieslist",

    data() {
        return {
            store,
            categories: [],
            loading: true,
        }
    },
    created() {
        this.getcategories();
    },
    methods: {
        getcategories() {
            axios.get(`${this.store.baseUrl}/api/categories`).then((response) => {
                this.store.loading = true;
                if (response.data.success) {
                    this.categories = response.data.results;
                    this.store.loading = false;
                }
            });
        }
    },

}
</script>
<style lang="">
    
</style>