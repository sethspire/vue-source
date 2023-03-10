<script setup>
    defineProps(['name', 'rank', 'position'])
</script>

<template>
    <div class="container">
        <h3>Input Form</h3>
        <form>
            <label for="name">Prospect Name:</label><br>
            <input type="text" id="name" name="name" class="form-control" :value="name" @input="$emit('update:name', $event.target.value)"><br>

            <label for="rank">Player Rank (0-100): <i>{{ rank }}</i></label>
            <input type="range" id="rank" name="rank" min="0" max="100" class="form-control" :value="rank" @input="$emit('update:rank', $event.target.value)">
            
            <br>

            <label for="position">Position:</label>
            <select id="position" class="form-select" :value="position" @input="$emit('update:position', $event.target.value)">
                <option value="Quarterback">Quarterback</option>
                <option value="Running Back">Running Back</option>
                <option value="Wide Receiver">Wide Receiver</option>
                <option value="Tight End">Tight End</option>
                <option value="Offensive Lineman">Offensive Lineman</option>
                <option value="Defensive Lineman">Defensive Lineman</option>
                <option value="Line Backer">Line Backer</option>
                <option value="Corner Back">Corner Back</option>
                <option value="Safety">Safety</option>
            </select>

            <br>

            <input type="button" value="Submit" class="form-control" @click="$emit('update-array')">
        </form>
    </div>
</template>