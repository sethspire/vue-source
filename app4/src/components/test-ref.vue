<script setup>
  import { ref } from 'vue'


  const count = ref(1)  // 1
  function increment() {
    count.value++
  }


  let addr1 = {
    street: "123 Main Street",
    city: "Bridgewater",
    state: "VA"
  }
  let addr2 = {
    street: "456 Water Street",
    city: "Winthrop",
    state: "NY"
  }
  const address = ref(addr1)
  function toggleAll() {
    address.value = (address.value.street == addr1.street) ? addr2 : addr1
  }
  function toggleState() {
    address.value.state = (address.value.state == "VA") ? "NY" : "VA"
  }


  const name = {
    first: ref("Jesse"),
    last: ref("Martinez")
  }
  function toggleFirstName() {
    name.first.value = (name.first.value === "Jesse") ? "Mary" : "Jesse"
  }
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>

  <br>

  <span>
    {{address.street }} {{address.city }}, {{address.state }}
  </span>
  <button @click="toggleAll">Change All</button>
  <button @click="toggleState">Change State</button>

  <br>

  <span>
    {{ name.first.value }}, {{ name.last.value }}
  </span>
  <button class="btn btn-primary" @click="toggleFirstName"> Toggle First Name </button>
</template>