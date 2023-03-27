<script setup>
    import { RouterLink } from 'vue-router'
    const props = defineProps(['itemSearch'])

    function searchForItem() {
        let searchItem=document.getElementById("searchItem").value;
        console.log(searchItem)
        location.href = "/items/" + searchItem
    }
</script>

<template>
    <nav class="navbar dark-background">
        <div class="container v-space">
            <RouterLink to="/" class="link">home</RouterLink>
            <div class="navbar-nav ml-auto mb-2 mb-lg-0 flex-horizontal">
                <RouterLink to="/items" class="link">items</RouterLink>
                <div v-if="itemSearch">
                    <input id="searchItem" type="text" onkeypress="" placeholder="search item">
                    <input id="search" type="button" value="search" @click="searchForItem">
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