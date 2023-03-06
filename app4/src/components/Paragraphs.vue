<script setup>
    import { ref } from 'vue'

    const p1 = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium consectetur dolor. Fusce elementum porttitor sem sed molestie. Aliquam bibendum ligula id nibh consectetur commodo. Quisque tincidunt vehicula arcu, sit amet laoreet lectus sagittis a. Nulla facilisi. Ut quis commodo arcu. Donec fermentum imperdiet urna, nec laoreet odio iaculis ut. Vestibulum semper quam et dolor condimentum eleifend. Pellentesque id massa non ipsum lacinia sollicitudin sed sed nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc velit metus, convallis eget lorem ut, venenatis rhoncus risus.")
    const p2 = ref("Morbi a tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ullamcorper risus sed ligula ornare pretium. Vestibulum viverra, ipsum sit amet malesuada tempus, orci eros tempus leo, eget tincidunt sapien leo et est. Donec volutpat urna eu vestibulum placerat. Etiam viverra dapibus velit, a eleifend orci suscipit quis. Pellentesque aliquet diam at felis iaculis, vel faucibus leo vehicula. Praesent sagittis dui vitae justo imperdiet, id bibendum justo tempor. Phasellus ut nibh mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sit amet magna sapien.")
    const p3 = ref("Suspendisse eu felis id odio dictum venenatis nec a lectus. Praesent hendrerit nibh sagittis massa aliquam sodales. Proin nec sem nec enim malesuada semper ut at nisi. Nunc vel porta ligula, ac pellentesque tellus. Ut at velit enim. Pellentesque mollis felis sed facilisis mattis. Mauris hendrerit aliquet metus id dignissim. Quisque porta porttitor lobortis. Etiam volutpat consequat mollis. Maecenas tristique metus eu nulla auctor, ut bibendum orci elementum. Maecenas luctus in nisl vel lobortis. Donec sed nulla at justo porta faucibus. Aenean tempor erat neque, ut blandit nulla hendrerit in. Proin tempus placerat dui ac sodales.")

    let textStyle = ref("color: #FFFFFF")

    function toggleColor() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        textStyle.value = "color: #" + randomColor
    }
</script>

<template>
    <div class="box">
        <button @click="toggleColor"><b>Let's Get Funky</b></button>
        <p v-bind:style="textStyle">{{ p1 }}</p>
        <p v-bind:style="textStyle">{{ p2 }}</p>
        <p v-bind:style="textStyle">{{ p3 }}</p>
    </div>
</template>

<style>
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 2em;
    }
    button {
        border-radius: 2em;
        padding: 1em;
        border-style: solid;
        border-color: white;
        background-color: white;
    }
    button:hover {
        color: white;
        background-color: black;
    }
    button:active {
        padding: 0.5em;
        margin: 0.5em;
    }
</style>