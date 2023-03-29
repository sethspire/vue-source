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

    const firstName = ref(store.firstName)
    const lastName = ref(store.lastName)
    const streetAddr = ref(store.streetAddr)
    const city = ref(store.city)
    const state = ref(store.state)
    const zip = ref(store.zip)

    function saveData() {
        store.firstName = firstName
        store.lastName = lastName
        store.streetAddr = streetAddr
        store.city = city
        store.state = state
        store.zip = zip

        router.replace({ path: '/' })
    }
</script>

<template>
    <nav class="navbar dark-background">
        <div class="container v-space">
            <h1>EDIT DATA</h1>
        </div>
    </nav>
    <div class="container">
        <form onsubmit="return false">
            <fieldset>
                <p>                
                    <label for="firstName"><b>First Name:</b></label>
                    <input type="text" name="firstName" id="firstName" class="input-half" required v-model="firstName">
                </p>

                <p>
                    <label for="lastName"><b>Last Name:</b></label>
                    <input type="text" name="lastName" id="lastName" class="input-half" required v-model="lastName">
                </p>
                <p>
                    <label for="streetAddr"><b>Street Address:</b></label>
                    <input type="text" name="streetAddr" id="streetAddr" class="input-half" required v-model="streetAddr">
                </p>

                <p>
                    <label for="city"><b>City:</b></label>
                    <input type="text" name="city" id="city" class="input-half" required v-model="city">
                </p>

                <p>
                    <label for="state"><b>State:</b></label>
                    <input type="text" name="state" id="state" class="input-half" required v-model="state">
                </p>

                <p>
                    <label for="zip"><b>Zip:</b></label>
                    <input type="number" name="zip" id="zip" class="input-half" required v-model="zip">
                </p>

                <br>

                <input type="submit" id="submit-form" value="SUBMIT CHANGE" class="btn btn-primary" @click="saveData">
            </fieldset>
        </form>
    </div>
</template>

<style>
    label {
        margin-right: 1em;
    }
</style>