<script setup>
  import Card from './components/Card.vue'

  import {ref, provide} from 'vue'

  let maxNum = ref(5)

  provide('maxNum', maxNum)
</script>

<template>
  <h3>Primes and Composites</h3>
  <p>The user can select how many numbers they want to display. That value is set in the parent (App.vue). This value is then shared with provide and each card element injects that value. Each card is also passed it's individual number via props from its parent card (just 1 more than that of the parent). If the number associated with said card is less than the value of numbers to show (from the injection), then another card is created. Also, background color is set so that all prime numbers are blue.</p>

  <br>

  <form>
    <label for="maxNum">How many numbers (1-100) to display? <i>{{ maxNum }}</i></label>
    <br>
    <input type="range" id="maxNum" name="maxNum" min="0" max="100" class="form-control" v-model="maxNum">
  </form>

  <div>
    <Card :num=1 />
  </div>
</template>

<style scoped>
  form, label, input, h3, p {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
</style>
