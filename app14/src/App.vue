<script setup>
  import Row1 from './components/Row1.vue'
  import Row2_Left from './components/Row2_Left.vue'
  import Row2_Right from './components/Row2_Right.vue'
  import Row3_Left from './components/Row3_Left.vue'
  import Row3_Right from './components/Row3_Right.vue'
  import Row4 from './components/Row4.vue'
</script>

<template>
  <main>
    <div class="parent">
      <div class="div1 row"><Row1 /></div>
      <div class="div2 row"><Row2_Left /></div>
      <div class="div3 row"><Row2_Right /></div>
      <div class="div4 row"><Row3_Left /></div>
      <div class="div5 row"><Row3_Right /></div>
      <div class="div6 row"><Row4 /></div>
    </div>
  </main>
</template>

<style>
  :root {
    --padding: 2em
  }
  body {
    margin: 0;
    background-color: black;
  }
  main {
    background-color: black;
    margin: var(--padding);
    width: calc(100vw - 2*var(--padding));
    height: calc(100vh - 2*var(--padding));
    text-align: center;
    font-weight: bold;
  }
  .parent {  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "div1 div1 div1"
      "div2 div3 div3"
      "div4 div4 div5"
      "div6 div6 div6";
    height: 100%;
  }

  .div1 { grid-area: div1; }

  .div2 { grid-area: div2; }

  .div3 { grid-area: div3; }

  .div4 { grid-area: div4; }

  .div5 { grid-area: div5; }

  .div6 { grid-area: div6; }

  .text {
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
  }
</style>
