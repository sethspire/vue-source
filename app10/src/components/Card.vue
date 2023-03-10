<script setup>

const props = defineProps({
    name: String,
    rank: String,
    position: String,
})

</script>

<template>
        <form>
            <fieldset>
                <legend>{{ name }}</legend>
                <div class="player-data">
                    <h6>Position: <i>{{ position }}</i></h6>
                    <h6>Rank: <i>{{ rank }}</i></h6>
                </div>
            </fieldset>
        </form>
</template>

<style >
    fieldset {
        border: 1px solid #000;
    }
    legend {
        width: auto;
        float: none;
        margin-left: .5em;
    }
    .player-data {
        padding-bottom: 1em;
    }
    .player-data > h6 {
        display: inline;
        margin: 0 3em 0 1em;
    }
</style>