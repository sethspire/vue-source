<script setup>
    const props = defineProps(['imageFile'])
</script>

<template>
    <div>
        <img class="itemImage" v-bind:src="imageFile">
    </div>
</template>

<style>
    .itemImage {
        width: 90%
    }
</style>