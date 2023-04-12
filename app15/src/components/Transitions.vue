<script setup>
    import { ref } from 'vue'

    const show = ref(false)
    function toggleShow() {
        show.value = !show.value
    }

    const show2 = ref(false)
    function toggleShow2() {
        show2.value = !show2.value
    }

    const show3 = ref(false)
    function toggleShow3() {
        show3.value = !show3.value
    }

    const textList = ref([])
    const newText = ref('')
    function addData() {
        if (newText.value.length > 0) {
            textList.value.unshift(newText.value.toUpperCase())
            newText.value = ''
        }
    }

    const textList2 = ref([])
    const newText2 = ref('')
    function addData2() {
        if (newText2.value.length > 0) {
            textList2.value.unshift(newText2.value.toUpperCase())
            newText2.value = ''
        }
    }
</script>

<script>
    export default {
        methods: {
            scramble
        }
    }

    function scramble(el, done) {
        let iteration = 0;
  
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let interval = null
        el.dataset.value = el.innerText
        
        interval = setInterval(() => {
            el.innerText = el.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return el.dataset.value[index];
                    }
                
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            
            if(iteration >= el.dataset.value.length){ 
                clearInterval(interval);
            }
            
            iteration += (1/100)*el.dataset.value.length;
        }, 30);
    }
</script>

<template>
    <div class="container">
        <div style="height: 10em; border: 2px solid black; padding: 0.5em;">
            <h4>Toggle with v-if and fade/animate first tag</h4>
            <button @click="toggleShow()">Toggle</button>
            <Transition name="fade_text">
                <p v-if="show">hello (with fade...)</p>
            </Transition>
            <Transition>
                <p v-if="show">hello</p>
            </Transition>
        </div>

        <div style="height: 10em; border: 2px solid black; padding: 0.5em;">
            <h4>Toggle with v-if and custom classes</h4>
            <button @click="toggleShow2()">Toggle</button>
            <Transition name="custom-classes" enter-active-class="animate__animated animate__rotateInUpRight" leave-active-class="animate__animated animate__zoomOut">
                <p v-if="show2">hello...</p>
            </Transition>
        </div>

        <div style="height: 15em; border: 2px solid black; padding: 0.5em;">
            <h4>nested transitions</h4>
            <button @click="toggleShow3()">Toggle</button>
            <Transition name="nested">
                <div v-if="show3" class="outer">
                    <div class="inner">Hello</div>
                </div>
            </Transition>
        </div>

        <div style="min-height: 10em; border: 2px solid black; padding: 0.5em; text-align: center;">
            <h4>add text to list, using js hooks and custom classes</h4>
            <form onsubmit="return false">
                <input type="text" name="newText" id="newText" v-model="newText" maxlength="40">
                <input type="submit" id="addData" value="ADD" class="btn btn-primary" @click="addData">
            </form>

            <TransitionGroup name="list" tag="ul" enter-active-class="animate__animated animate__bounceIn" @enter="scramble">
                <li v-for="item in textList" :key="item" class="slow-transition">
                    {{ item }}
                </li>
            </TransitionGroup>
        </div>

        <div style="min-height: 10em; border: 2px solid black; padding: 0.5em; text-align: center;">
            <h4>add text to list, using regular animations</h4>
            <form onsubmit="return false">
                <input type="text" name="newText2" id="newText2" v-model="newText2" maxlength="40">
                <input type="submit" id="addData2" value="ADD" class="btn btn-primary" @click="addData2">
            </form>

            <TransitionGroup name="list2" tag="ul">
                <li v-for="item in textList2" :key="item" class="slow-transition">
                    {{ item }}
                </li>
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin: 2em;
        margin-bottom: 10em;
    }



    .fade_text-enter-active, .fade_text-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade_text-enter-active {
        animation: bounce-in 0.5s;
    }
    .fade_text-enter-from, .fade_text-leave-to {
        opacity: 0;
    }
    .fade_text-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }



    .outer, .inner {
        background: #eee;
        padding: 30px;
        min-height: 20px;
    }
    .inner { 
        background: #ccc;
    }
    .nested-enter-active, .nested-leave-active {
        transition: all 0.3s ease-in-out;
    }
    .nested-leave-active {
        transition-delay: 0.25s;
    }
    .nested-enter-from, .nested-leave-to {
        transform: translateY(30px);
        opacity: 0;
    }
    .nested-enter-active .inner, .nested-leave-active .inner { 
        transition: all 0.3s ease-in-out;
    }
    .nested-enter-active .inner {
        transition-delay: 0.25s;
    }
    .nested-enter-from .inner, .nested-leave-to .inner {
        transform: translateX(30px);
        opacity: 0.001;
    }



    ul {
        list-style-type: none;
        font-size: 3em;
        font-family: monospace;
        font-weight: 900;
    }
    .slow-transition {
        --animate-duration: 3.7s;
    }
    .list-move  {
        transition: all 0.5s ease;
    }




    .list2-enter-active, .list2-leave-active {
        transition: opacity 1.5s linear;
    }
    .list2-enter-active {
        animation: curve-in 7s linear;
    }
    .list2-enter-from, .list2-leave-to {
        opacity: 1;
    }
    .list2-leave-active {
        animation: curve-in 0.5s reverse;
    }
    @keyframes curve-in {
        0% {
            transform: translate(60vw, 0) scale(1);
        }
        16% {
            transform: translate(50vw, 1.5em) rotate(-20deg) scale(.6);
        }
        33% {
            transform: translate(40vw, 3em) scale(.3);
            color: red;
        }
        50% {
            transform: translate(30vw, 0) rotate(40deg) scale(1);
        }
        67% {
            transform: translate(20vw, -3em) scale(1.7);
            color: blue
        }
        83% {
            transform: translate(10vw, -1.5em) rotate(-20deg) scale(1.4);
        }
        100% {
            transform: translate(0, 0);
        }
    }
</style>