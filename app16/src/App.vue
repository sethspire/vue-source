<script setup>
    import { ref } from 'vue'
    import toppings_json from './assets/toppings.json'


    // IMAGE FILE SETUP
    const imgPath = "/images/"
    const crustImg = ref(`${imgPath}crust.png`)
    const cheeseImg = ref(`${imgPath}cheese.png`)


    // INIT REFS FOR TOPPINGS DATA & CURRENT TOPPINGS & HANDS & POPUP
    const toppings_data = ref(toppings_json)
    for (const [key, value] of Object.entries(toppings_data.value)) {
        value.count = 0
    }
    const current_toppings = ref([])
    const current_hands = ref([])
    const showPopup = ref(false)
    const popupText = ref("")
    const showCheese = ref(true)


    // ADD A TOPPING
    async function incrementTopping(topping) {
        if (toppings_data.value[topping].count < 10) {
            await swingArmIn()
            toppings_data.value[topping].count += 1

            let newToppings = []
            for (let i = 0; i < toppings_data.value[topping].numAdd; i++) {
                let topLeft = getTopLeft()
                let aNewTopping = {
                    "image": `${imgPath}${toppings_data.value[topping].image}`,
                    "class": `${topping}__${toppings_data.value[topping].count}`,
                    "width": toppings_data.value[topping].width,
                    "top": `${topLeft[1]}%`,
                    "left": `${topLeft[0]}%`
                }
                aNewTopping.css = `width: ${aNewTopping.width};
                    position: absolute; 
                    top: ${aNewTopping.top};
                    left: ${aNewTopping.left}; 
                    transform: translate(-50%, -50%);`

                newToppings.push(aNewTopping)
            }
            current_toppings.value = current_toppings.value.concat(newToppings)
        }
    }

    // REMOVE A TOPPING
    function decrementTopping(topping) {
        if (toppings_data.value[topping].count > 0) {
            let classToRemove = `${topping}__${toppings_data.value[topping].count}`
            current_toppings.value = current_toppings.value.filter(object => {
                return object.class !== classToRemove;
            });

            toppings_data.value[topping].count -= 1
        }
    }

    // RESET TOPPINGS
    function resetToppings() {
        current_toppings.value = []
        for (const [key, value] of Object.entries(toppings_data.value)) {
            value.count = 0
        }
    }

    // GET RANDOM XY FOR A TOPPING
    function getTopLeft() {
        let a = Math.random()
        let b = Math.random()

        let theta = b * 2 * Math.PI
        let rr = 41 * Math.sqrt(a)
        let x = rr * Math.cos(theta) * 0.97 + 49
        let y = rr * Math.sin(theta) * -1 + 48.5

        return [x, y]
    }

    // SWING ARM IN AND OUT WITH A 2 SECOND WAIT
    let handCounter = 0
    async function swingArmIn() {
        // add arm
        let newHand = {
            "image": `${imgPath}hand closed.png`,
            "handNum": ++handCounter
        }
        newHand.id = `hand__${newHand.handNum}`
        current_hands.value.push(newHand)

        // wait 1 seconds
        await sleep(1000)

        // swap image
        document.getElementById(`hand__${newHand.handNum}`).src = `${imgPath}hand open.png`
        //newHand.image = `${imgPath}hand open.png`

        // remove arm
        current_hands.value.shift()
    }

    // SLEEP FUNCTION (hopefully)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // FAKE ADD PINEAPPLE
    function doNotAddPineapple() {
        popupText.value = "YOU FOOL!\nPINEAPPLE DOES NOT BELONG ON PIZZA!\nINCONCEIVABLE!"
        showPopup.value = true
        setTimeout(function(){
            showPopup.value = false
        }, 10000)
    }

    // FAKE DELETE PINEAPPLE
    function doNotDeletePineapple() {
        popupText.value = "Thank you for being enlightened enough to know that pineapple does NOT belong on pizza in any circumstance.\n\nSincerely,\nSeth A. Spire"
        showPopup.value = true
        setTimeout(function(){
            showPopup.value = false
        }, 10000)
    }

    // delete cheese
    function unSuckPizza() {
        popupText.value = "CHEESE IS GROSS.\nYUCK!"
        showPopup.value = true
        setTimeout(function(){
            showPopup.value = false
        }, 4000)
        showCheese.value = false
    }
</script>

<template>
    <main>
        <div id="pizza-side">
            <div id="pizza">
                <img :src="crustImg" id="crust">
                <Transition name="yuckyCheese">
                    <img v-if="showCheese" :src="cheeseImg" id="cheese">
                </Transition>

                <TransitionGroup name="hands">
                    <img v-for="hand in current_hands" :key="hand" :src="hand.image" class="swinging-hands" :id="hand.id" />
                </TransitionGroup>

                <TransitionGroup name="toppings">
                    <img v-for="top in current_toppings" :key="top" :src="top.image" :style="top.css" class="topping" />
                </TransitionGroup>
            </div>
        </div>

        <div id="panel">
            <button @click="resetToppings()" id="resetBtn">RESET</button>

            <div v-for="(topping) in Object.keys(toppings_data)" class="topping-add">
                <button @click="incrementTopping(topping)" class="addBtn">+</button>
                <span>{{ topping }} ({{ toppings_data[topping].count }})</span>
                <button @click="decrementTopping(topping)" class="delBtn">-</button>
            </div>
            <div class="topping-add">
                <button @click="doNotAddPineapple()" class="addBtn">+</button>
                <span>pineapple (0)</span>
                <button @click="doNotDeletePineapple()" class="delBtn">-</button>
            </div>

            <button id="unSuckPizza" @click="unSuckPizza()">MAKE PIZZA NOT SUCK</button>
        </div>

        <div v-if="showPopup" id="popup">{{ popupText }}</div>
    </main>
</template>

<style>
    html, body, main, #app {
        margin: 0;
        height: 100vh;
        font-family: monospace;
        background-color: #333837;
    }
    main {
        display: flex;
        flex-direction: row;
    }



    #pizza-side {
        height: 99vh;
        width: calc(100% - 15em);
    }
    #panel {
        height: 97vh;
        width: 15em;
        text-align: center;
        margin: 1.5vh;
        background-color: #ead1e5;
    }
    #popup {
        white-space: pre-line;
        position: fixed;
        width: 80%;
        top: 50%;
        left: 50%;
        font-size: 5em;
        font-weight: 700;
        transform: translate(-50%, -50%);
        background-color: rgba(240, 248, 255, 0.826);
        text-align: center;
        border-radius: 1em;
    }



    #pizza {
        aspect-ratio: 1/1;
        position: relative;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }
    #crust, #cheese {
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #cheese {
        max-width: 102%;
        max-height: 102%;
    }
    


    #resetBtn {
        margin-bottom: 1em;
        margin-top: 1em;
    }
    #resetBtn:active {
        margin-bottom: 1.25em;
    }
    #unSuckPizza {
        margin-top: 1em;
    }
    .topping-add {
        text-align: center;
        font-weight: bold;

    }
    button {
        margin: 0.125em;
        font-weight: bold;
        border-radius: 8px;
    }
    button:active {
        font-size: 0.75em;
        margin-left: 0.17em;
        margin-right: 0.17em;
    }
    .addBtn {
        border: 2px green solid;
        background-color: rgba(0, 128, 0, 0.2);
    }
    .addBtn:hover {
        background-color: green;
    }
    .delBtn {
        border: 2px red solid;
        background-color: rgba(255, 0, 0, 0.2);
    }
    .delBtn:hover {
        background-color: red;
    }



    .toppings-enter-active {
        animation: toss-in 1.5s linear;
    }
    .toppings-leave-active {
        animation: drop-out 1.5s linear;
    }
    @keyframes toss-in {
        0% {
            top: 50%;
            left: 0%;
            transform: scale(1.3) translate(-50%, -50%);
        }
        25% {
            transform: scale(2.2) translate(-20%, -50%);
        }
        50% {
            transform: scale(2.8) translate(-10%, -50%);
        }
        75% {
            transform: scale(2) translate(-30%, -50%);
        }
        100% {
            transform: scale(1) translate(-50%, -50%);
        }
    }
    @keyframes drop-out {
        0% {
            transform: translate(-50%, -50%);
        }
        20% {
            transform: translate(-50%, -200%);
        }
        40% {
            transform: translate(-50%, -240%);
        }
        60% {
            transform: translate(-50%, -200%);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0.2;
            left: 50%;
            top: 90vh;
        }
    }
    


    .yuckyCheese-leave-active{
        animation: yeet-cheese 2s linear;
    }
    @keyframes yeet-cheese {
        0% {
            transform: translate(-50%, -50%);
        }
        25% {
            transform: translate(-50%, -50%) scale(1.4) rotateZ(10deg);
            top: 20%;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5) rotateZ(30deg);
            top: 10%;
            opacity: 1
        }
        75% {
            transform: translate(-50%, -50%) scale(1.4) rotateZ(70deg);
            top: 20%;
            opacity: 0.9;
        }
        100% {
            transform: translate(-50%, -50%) scale(0.3) rotateZ(180deg);
            left: 120%;
            top: 80%;
            opacity: 0;
        }
    }



    .swinging-hands {
        position: absolute;
        transform-origin: left;
        height: 50%;
        transform: translate(-73%, 50%);
    }
    .hands-enter-active {
        animation: swing-in 1s linear;
    }
    .hands-leave-active {
        animation: swing-out 1.5s linear;
    }
    @keyframes swing-in {
        0% {
            transform: translate(-73%, 50%) rotateY(90deg) scale(0.2);
        }
        40% {
            transform: translate(-43%, 50%) rotateY(80deg) scale(0.3);
        }
        100% {
            transform: translate(-73%, 50%);
        }
    }
    @keyframes swing-out {
        0% {
            transform: translate(-73%, 50%);
        }
        55% {
            transform: translate(-73%, 50%) rotateY(60deg) scale(0.3);
        }
        100% {
            transform: translate(-73%, 50%) rotateY(90deg) scale(0.2);
        }
    }
</style>
