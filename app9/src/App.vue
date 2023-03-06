<script setup>
import AudioCard from './components/AudioCard.vue'
import audioData from "./assets/audio_data.json"

</script>

<template>
  <main>
    <div id="header">
      <h1>Frogs Around the World</h1>
      <img src="https://c.pxhere.com/photos/6b/fe/frogs_travel_go_away_holiday_holidays_around_the_world_globe_earth-491573.jpg!d" srcset="https://c.pxhere.com/photos/6b/fe/frogs_travel_go_away_holiday_holidays_around_the_world_globe_earth-491573.jpg!d" alt="travel, green, color, holiday, globe, world, art, earth, holidays, frogs, go away, around the world, old world globe, Free Images In PxHere">
    </div>
    <div id="container">
      <div v-for="(audio) in audioData">
        <AudioCard v-bind="audio" />
      </div>
    </div>
  </main>
</template>

<style>
body {
  font-family: 'Arial Narrow Bold', sans-serif;
  background-image: linear-gradient(to bottom right, #58c25b, #49b59a, #58c25b);
}
#container {
  margin-left: 10%;
  margin-right: 10%;
}
#header {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 2em;
}
img {
  max-width: 50%;
}
</style>
