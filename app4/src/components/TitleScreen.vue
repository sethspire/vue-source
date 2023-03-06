<script setup>
    import { ref } from 'vue'

    const title = ref("LOREM IPSUM: Just the Hits")
    const imgUrl = ref("https://picsum.photos/350")
</script>

<template>
    <div class="box">
        <h1><i>{{ title }}</i></h1>
        <img v-bind:src="imgUrl">
    </div>
</template>

<style>
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>