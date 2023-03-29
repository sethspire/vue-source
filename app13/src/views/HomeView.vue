<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { useUserStore } from '../stores/user.js'

    // simulate getting the user's info from the login server
    import { info } from '../assets/initialUser.js'

    const router = useRouter()
    const store = useUserStore()

    if (!window.initializedData) {
        console.log("init data")
        store.firstName = info.firstName
        store.lastName = info.lastName
        store.streetAddr = info.streetAddr
        store.city = info.city
        store.state = info.state
        store.zip = info.zip
        window.initializedData = true
    }
</script>

<template>
    <nav class="navbar dark-background">
        <div class="container v-space">
            <h1>USER INFORMATION</h1>
            <RouterLink to="/edit" class="link">EDIT</RouterLink>
        </div>
    </nav>
    <div class="container">
        <div>
            <p><b>First Name:</b> {{ store.firstName }}</p>
            <p><b>Last Name:</b> {{ store.lastName }}</p>
            <p><b>Street Address:</b> {{ store.streetAddr }}</p>
            <p><b>City:</b> {{ store.city }}</p>
            <p><b>State:</b> {{ store.state }}</p>
            <p><b>Zip Code:</b> {{ store.zip }}</p>
        </div>
    </div>
</template>

<style>
    a {
        text-decoration: none;
        color: black;
        background-color: rgb(195, 208, 208);
        border-radius: 0.5em;
        padding: 0.5em;
    }
    a:hover {
        background-color: rgb(78, 87, 87);
        text-decoration: none;
        color: white;
    }
</style>