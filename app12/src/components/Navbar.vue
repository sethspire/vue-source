<script setup>
    import { RouterLink } from 'vue-router'
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    const props = defineProps(['itemSearch'])

    const search = ref('');
    const router = useRouter();
    const searchItem = () => {
        console.log("here")
        if (search.value) {
            router.push(`/items/${search.value}`);
            search.value = '';
        }
    };
</script>

<template>
    <nav class="navbar dark-background">
        <div class="container v-space">
            <RouterLink to="/" class="link">home</RouterLink>
            <div class="navbar-nav ml-auto mb-2 mb-lg-0 flex-horizontal">
                <RouterLink to="/items" class="link">items</RouterLink>
                <div v-if="itemSearch">
                    <form @submit.prevent="searchItem">
                        <input v-model="search" type="text" placeholder="Search item">
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
    a {
        color:rgb(108, 238, 108);
        text-decoration: none;
    }
    nav {
        background-color:rgb(42, 42, 42);
    }
    .v-space {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    .flex-horizontal {
        display: flex;
        flex-direction: row;
    }
    input {
        margin-left: 1em;
    }
</style>