<script setup>
    import Navbar from '../components/Navbar.vue';
    console.log("home view")
</script>

<template>
    <div>
        <Navbar/>
        <div class="container center-content">
            <h1>Guide to Amphibians</h1>
        </div>
        <div class="container center-content">
            <div class="center-content">
                <img src="/images/frog-home.jpg">
                <img src="/images/salamander-home.jpg">
            </div>
        </div>
    </div>
</template>

<style>
    img {
        width: 40%;
    }
    .center-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>