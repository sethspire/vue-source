<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    file: String,
    label: String,
    url: String,
    recorder: String,
    duration: String
})

</script>
<template>
        <div class="audio-card">
            <div class="audio-label">
                <h3>{{ label }}</h3>
                <span><a v-bind:href="url">{{ recorder }}</a> (<i>{{ duration }}</i>)</span>
            </div>
            <audio v-bind:src="file" controls></audio>
        </div>
</template>
<style >
.audio-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    padding: 0.5em 0.5em 0.5em 2em;
    border: 2px solid black;
    border-radius: 10em;
    background-color: #58c25b;
}
h3 {
    margin: 0.125em;

}
</style>