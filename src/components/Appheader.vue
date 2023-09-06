<script>
export default {
    name: "Appheader",
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Post',
                    routeName: 'posts'
                },
                {
                    label: 'Categorie',
                    routeName: 'categories'
                },
                {
                    label: 'Contatti',
                },
                {
                    label: 'Chi siamo',
                },
            ]
        }
    }
}
</script>
<template>
    <div>
        <div class="navbar" v-for="(item, index) in menuItems" :key="index">
            <router-link :to="{ name: item.routeName }">{{ item.label }}</router-link>
        </div>
    </div>
</template>
<style>
/* Stile di base per la navbar */
.navbar {
    background-color: #333;
    overflow: hidden;
}

/* Stile per i link nella navbar */
.navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Cambia colore dei link quando ci passi sopra con il mouse */
.navbar a:hover {
    background-color: #ddd;
    color: black;
}
</style>