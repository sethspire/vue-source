<script setup>
  import { inject} from 'vue'

  const props = defineProps(['num'])

  const maxNum = inject('maxNum')

  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
</script>

<template>
  <div v-if="primes.includes(props.num)" class="container prime">
    <span>{{ props.num }}</span>
    <Card v-if="props.num < maxNum" :num=props.num+1 />
  </div>
  <div v-else class="container composite">
    <span>{{ props.num }}</span>
    <Card v-if="props.num < maxNum" :num=props.num+1 />
  </div>
</template>

<style >
  .container {
    margin: 0 3px 1px 3px;
    text-align: center;
    border: 1px solid black;
    border-radius: 8px;
  } 
  .prime {
    background-color: blue;
    color: white;
  }
  .composite {
    background-color: white;
    color: black;
  }
</style>