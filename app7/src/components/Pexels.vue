<template>
    <div>
        <div id="heading">
            <div id="title">FROGS + TOADS</div>
            <div id="author"><i>the absolute cutest :)</i></div>
        </div>

        <br>
        <br>

        <div id="panel-cycler">
            <div id="backward-sidebar" class="sidebar">
                <div class="btn" id="previous">&laquo;</div>
            </div>

            <div id="panel-area">
                <img :src="photo.url">
                <br>
                {{ photo.title }}
                <br>
                <i>photographer: <a :href="photo.photographer_url" target="_blank">{{ photo.photographer }} </a></i>
            </div>

            <div id="forward-sidebar" class="sidebar">
                <div class="btn" id="next">&raquo;</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    //import { createClient } from 'pexels'
    import { ref, reactive, watch, onMounted } from 'vue'

    //const client = createClient('5gOIFd4svInUexyB3AZ7BoBrOJF2lyJaFtHrR2qmcNAwgrCHskCBYvEW');
    /*
    const collection = reactive({
        media: {},
        index: 0,
        numImages: 0
    })
    */
    const collection = reactive({
        media: [
            {
                title: "Brown Frog on Water",
                photographer: "Maddog61",
                photographer_url: "https://www.pexels.com/@maddog61-38383861/",
                url: "/images/brown-frog-on-water__maddog.jpg"
            },
            {
                title: "Frog Sitting Near Greenery in Summer Day",
                photographer: "Victor Pace",
                photographer_url: "https://www.pexels.com/@victor-pace-2704890/",
                url: "/images/frog-sitting-near-greenery-in-summer-day__victor-pace.jpg"
            },
            {
                title: "Green, Blue, Yellow, and Orange Frog on Green Leaf",
                photographer: "Pixabay",
                photographer_url: "https://www.pexels.com/@pixabay/",
                url: "/images/green-blue-yellow-and-orange-frog-on-green-leaf__pixabay.jpg"
            }
        ],
        index: 0,
        numImages: 0
    })
    const photo = reactive({
        title: "",
        photographer: "",
        photographer_url: "",
        url: ""
    })

    async function getCollection() {
        let result = await client.collections.all({ per_page: 1 })
        const id = result.collections[0].id
        result = await client.collections.media({ id, type: 'photos', per_page: 1000 })
        
        collection.numImages = result.media.length
        collection.media = result.media
    }

    /*
    async function loadImage() {
        photo.title = collection.media[collection.index].alt
        photo.photographer = collection.media[collection.index].photographer
        photo.photographer_url = collection.media[collection.index].photographer_url
        photo.url = collection.media[collection.index].src.landscape
    }
    */

    async function loadImage() {
        collection.numImages = collection.media.length

        photo.title = collection.media[collection.index].title
        photo.photographer = collection.media[collection.index].photographer
        photo.photographer_url = collection.media[collection.index].photographer_url
        photo.url = collection.media[collection.index].url
    }

    watch(collection, () => {
        console.log("collection changed")
        if (collection.media.length > 0) {
            toggleDisable()
            loadImage()
            console.log(collection)
        }
    })

    // backward
    function backward(){
        if (collection.index >= 1) {
            collection.index -= 1
        } else {
            console.log("cant go back")
        }

        toggleDisable()
    }

    // forward
    function forward(){
        if (collection.index < collection.numImages-1) {
            collection.index += 1
        } else {
            console.log("cant go forward")
        }

        toggleDisable()
    }

    function toggleDisable() {
        if (collection.index == 0) {
            document.getElementById('previous').setAttribute("disabled", "true")
            document.getElementById('previous').classList.add("btn-disabled")
            document.getElementById('previous').classList.remove("btn")
        } else {
            document.getElementById('previous').removeAttribute("disabled")
            document.getElementById('previous').classList.add("btn")
            document.getElementById('previous').classList.remove("btn-disabled")
        }

        if (collection.index >= collection.numImages-1) {
            document.getElementById('next').setAttribute("disabled", "true")
            document.getElementById('next').classList.add("btn-disabled")
            document.getElementById('next').classList.remove("btn")
        } else {
            document.getElementById('next').removeAttribute("disabled")
            document.getElementById('next').classList.add("btn")
            document.getElementById('next').classList.remove("btn-disabled")
        }
    }

    function addOnclick() {
        document.getElementById("previous").onclick = backward
        document.getElementById("next").onclick = forward
    }

    onMounted(() => {
        //getCollection()
        addOnclick()
        toggleDisable()
        loadImage()
    })
</script>

<style>
    body {
        font-family: 'Arial Narrow', sans-serif;
        margin: 0;
        min-height: 100vh;
        min-width: 600px;
        background-image: linear-gradient(to bottom right, #58c25b, #49b59a, #40baba);
    }


    #heading {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #title {
        font-family: 'Arial Narrow Bold', sans-serif;
        font-size: 5em;
        text-shadow: 3px 1px 0.3rem rgb(255, 255, 255);
    }
    #author {
        font-size: 1.5em;
    }


    #panel-cycler {
        display: flex
    }
    .sidebar {
        flex-grow: 1;
        width: 10%;
        align-items: center;
        justify-content: center;
        display:flex;
    }
    #panel-area {
        flex-grow: 1;
        width: 80%;
        background-color: rgba(255, 255, 255, 0.3);
        height: 25em;
        border-radius: 2em;

        align-items: center;
        justify-content: center;
        display:flex;
        flex-direction: column;
        padding: 1em 0;
    }


    .btn {
        background: black;
        color: white;
        border-radius: 50%;
        font-size: 2em;
        height: 1.5em;
        width: 1.5em;
        text-align: center;
    }
    .btn:hover {
        background: white;
        color: black;   
    }
    .btn:active {
        box-shadow: 0 0 0 0.125em rgba(0,0,0,0.4);
    }
    .btn-disabled {
        background: rgba(52, 52, 52, 0.624);
        color: rgba(205, 205, 205, 0.686);
        border-radius: 50%;
        font-size: 2em;
        height: 1.5em;
        width: 1.5em;
        text-align: center;
    }


    .panel {
        align-items: center;
        justify-content: center;
        display:flex;
        flex-direction: column;
        margin: 0.25em;
        height: 25em;
    }
    .visible {
        display: flex;
    }
    .invisible {
        display: none;
    }
    img {
        max-width: 60%;
        max-height: 60%;
    }
    .panel-title {
        font-size: 3em;
    }
    .panel-desc {
        font-size: 1.5em;
    }
    #big-text {
        font-size: 25em;
    }
</style>