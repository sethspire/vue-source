<script>
  import TitleScreen from './components/TitleScreen.vue'
  import Paragraphs from './components/Paragraphs.vue';
  export default {
  components: {
    TitleScreen,
    Paragraphs
  }
}
</script>

<template>
  <TitleScreen></TitleScreen>
  <Paragraphs></Paragraphs>
</template>

<style>
  body {
    font-family: 'Arial Narrow', sans-serif;
    background-color:rgb(36, 36, 36);
    color: white;
  }
</style>