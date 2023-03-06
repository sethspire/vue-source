<template>
    <main>
        <div id="header-area">
            <div class="main-container">
                <h2>Order Form</h2>
                <span>Please fill in your information and we'll be sending your order in no time.</span>
            </div>
        </div>
        <div id="form-area">
            <div class="main-container">
                <form onsubmit="return false">
                    <fieldset>
                        <div class="input-row">
                            <label for="first-name">Name</label>
                            <input type="text" name="name" id="first-name" class="input-half" required v-model="data.name.first">
                            <input type="text" name="name" id="last-name" class="input-half" required v-model="data.name.last">
                        </div>

                        <div class="input-row">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" class="input-half" required v-model="data.email">
                        </div>

                        <div class="input-row">
                            <label>T-shirt model</label>
                            <div class="radio-section">
                                <label for="collared">
                                    <img src="https://bricksafe.com/files/ginger-snapped/vue-images/collared%20shirt.PNG">
                                </label>
                                <input type="radio" id="collared" name="model" checked value="collared" v-model="data.model">
                            </div>

                            <div class="radio-section">
                                <label for="buttoned">
                                    <img src="https://bricksafe.com/files/ginger-snapped/vue-images/buttoned%20shirt.PNG">
                                </label>
                                <input type="radio" id="buttoned" name="model" value="buttoned" v-model="data.model">
                            </div>

                            <div class="radio-section">
                                <label for="t-shirt">
                                    <img src="https://bricksafe.com/files/ginger-snapped/vue-images/t-shirt.PNG">
                                </label>
                                <input type="radio" id="t-shirt" name="model" value="t-shirt" v-model="data.model">
                            </div>
                        </div>

                        <div class="input-row">
                            <label for="size">Size</label>
                            <select name="size" id="size" class="input-half" v-model="data.size">
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>

                        <div class="input-row">
                            <label for="quantity">Quantity</label>
                            <input type="number" name="quantity" id="quantity" min="0" class="input-half" required v-model="data.quantity">
                        </div>

                        <div class="input-row">
                            <label for="deliveryDate">Delivery Date</label>
                            <input type="date" name="deliveryDate" id="deliveryDate" class="input-half" required v-model="data.deliveryDate">
                        </div>
                    </fieldset>
                    <fieldset id="address">
                        <div class="input-row">
                            <label for="streetAddr">Delivery Address</label>
                            <input type="text" name="deliveryAddr" id="streetAddr" placeholder="Street Address" class="input-full" required v-model="data.address.street">
                        </div>

                        <div class="input-row">
                            <label></label>
                            <input type="text" name="deliveryAddr" id="streetAddr2" placeholder="Street Address Line 2" class="input-full" v-model="data.address.street2">
                        </div>

                        <div class="input-row">
                            <label></label>
                            <input type="text" name="deliveryAddr" id="city" placeholder="City" class="input-half" required v-model="data.address.city">
                        </div>

                        <div class="input-row">
                            <label></label>
                            <input type="number" name="deliveryAddr" id="zip" placeholder="Postal / Zip Code" class="input-half" required v-model="data.address.zip">
                        </div>
                    </fieldset>
                    <fieldset>
                        <div id="fieldset-submit" class="input-row">
                            <input type="submit" id="submit-form" value="Purchase" class="btn btn-primary" @click="printData">
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </main>
</template>

<style>
    main {
        border: 0.125em solid black;
        border-radius: 2em;
        margin: auto;
        margin-top: 2em;
        margin-bottom: 2em;
        width: 50em;
    }
    .main-container {
        padding: 1em 3em;
    }
    #header-area {
        background-color: #68bd45;
        border-radius: 1.9em 1.9em 0 0;
        color: white;
    }
    fieldset {
        display: flex;
        flex-direction: column;
    }
    img {
        height: 6em;
    }
    .input-row {
        display: flex; 
        flex-direction: row;
        margin: 0.5em 0.5em;
    }
    #address {
        background-color: #f2f2f2;
    }
    label {
        flex-basis: 25%;
    }
    .input-full {
        flex-basis: 75%;
    }
    .input-half {
        flex-basis: 35%;
    }
    #first-name {
        margin-right: 5%;
    }
    #fieldset-submit {
        display: flex;
        justify-content: flex-end;
    }
    #submit-form {
        display: flex;
        justify-content: center;
        width: 6em;
        margin-top: 1em;
        background-color: #68bd45;
        border-color: #68bd45;
    }
    .radio-section {
        margin-right: 4.5em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>

<script setup>
    import {reactive, ref} from 'vue'

    let data = ref({
        "name": {
            "first": "",
            "last": ""
        },
        "email" : "",
        "model" : "",
        "size": "",
        "quantity": "",
        "deliveryDate": "",
        "address": {
            "street": "",
            "street2": "",
            "city": "",
            "zip": "",
        }
    })

    async function printData(event) {
        console.log(data._rawValue)
    }
</script>