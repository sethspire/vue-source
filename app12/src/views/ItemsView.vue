<script setup>
    import Navbar from '../components/Navbar.vue';
    import ItemImage from '../components/ItemImage.vue'
    import ItemInfo from '../components/ItemInfo.vue'
    import { useRoute } from 'vue-router'
    import { watch, ref, reactive } from 'vue'
    import amphibianData from "../assets/amphibianData.json"


    const route = useRoute()
    let data = amphibianData[route.params.id]
    // let label = undefined
    setLabel()
    // watch for params changes
    // watch(() => route.path, () => { console.log("path changed") })
    // watch for params.id changes
    watch(() => route.params.id, setLabel)
    function setLabel() {
      // console.log("params changed")
      // console.log(route.params)
      // let id = route.params.id
      // let friendName = id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : ''
      // label = id ? `${route.name} ${friendName}` : route.name
      data = amphibianData[route.params.id]
    }
</script>

<template>
  <div>
    <Navbar :itemSearch=true />
    <div class="container flex-horizontal">
      <ul id="itemsList">
        <li><RouterLink to="/items/frog" class="link">frog</RouterLink></li>
        <li><RouterLink to="/items/toad" class="link">toad</RouterLink></li>
        <li><RouterLink to="/items/salamander" class="link">salamander</RouterLink></li>
      </ul>

      <div class="center-content flex-vertical tempArea">
        <h2>Choose an amphibian!</h2>
        <div class="center-content flex-vertical item-area" v-if="data">
          <h2>Information about {{ route.params.id }}</h2>
          <div class="flex-horizontal">
            <ItemImage :imageFile="data.img" />
            <ItemInfo :info="data.info" />
          </div>
        </div>
        <div v-else-if="$route.params.id !== undefined">
          <p><i>Sorry, <b>'{{ route.params.id }}'</b> is not in list of current amphibians. Try a link on the left!</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .tempArea {
    margin-top: 1em;
    width: 100%;
  }
  #itemsList {
    margin: 1em;
  }
  .flex-vertical {
    display: flex;
    flex-direction: column;
  }
  .flex-horizontal {
    display: flex;
    flex-direction: row;
  }
  .item-area {
    padding: 2em;
    border: 0.25em solid black;
    border-radius: 1em;
    margin: 1em;
  }
</style>