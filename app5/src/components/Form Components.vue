<template>
    <div class="container">
        <h1>Form Examples</h1>
        <br>
        <fieldset>
            <legend>User Input Text Controls</legend>
            <br> 
            <div>
                <label for="text">Text</label>
                <input type="text" id="text" class="form-control">
            </div>
            <br> 
            <div>
                <label for="search">Search</label>
                <input type="search" id="search" class="form-control">
            </div>
            <br> 
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control">
            </div>
            <br> 
            <div>
                <label for="tel">Telephone</label>
                <input type="tel" id="tel" class="form-control">
            </div>
            <br> 
            <div>
                <label for="url">URL</label>
                <input type="url" id="url" class="form-control">
            </div>
            <br> 
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" minlength="20" required>
            </div>
            <br> 
            <div>
                <label for="textArea">Text Area</label>
                <textarea class="form-control" id="textArea"></textarea>
            </div>
        </fieldset>

        <br> 
        <br> 
        <br> 

        <fieldset>
            <legend>Programmable Selection Controls</legend>
            <br> 
            <div>
                <label>What is your order:</label>
                <div>
                    <input type="checkbox" id="hamburger" name="hamburger" class="form-check-input">
                    <label for="hamburger">Hamburger</label>
                </div>
                <div>
                    <input type="checkbox" id="fries" name="fries" class="form-check-input">
                    <label for="fries">Fries</label>
                </div>
                <div>
                    <input type="checkbox" id="drink" name="drink" class="form-check-input">
                    <label for="drink">Drink</label>
                </div>
            </div>
            <br> 
            <div>
                <label>Select favorite food:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">Pizza</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">Steak</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                    <label class="form-check-label" for="flexRadioDefault3">Other</label>
                </div>
            </div>
            <br> 
            <div>
                <label for="color-choice">Choose a color:</label>
                <input list="color-flavors" id="color-choice" name="color-choice"  class="form-control">

                <datalist id="color-flavors">
                    <option value="Red"></option>
                    <option value="Orange"></option>
                    <option value="Yellow"></option>
                    <option value="Green"></option>
                    <option value="Blue"></option>
                    <option value="Purple"></option>
                </datalist>
            </div>
            <br> 
            <div>
                <label for="state-select">Choose a state:</label>
                <select id="state-select" class="form-select">
                    <option value="">--Please choose an option--</option>
                    <option value="virginia">Virginia</option>
                    <option value="tennessee">Tennessee</option>
                    <option value="maryland">Maryland</option>
                    <option value="north carolina">North Carolina</option>
                </select>
            </div>
        </fieldset>

        <br> 
        <br> 
        <br> 

        <fieldset>
            <legend>Numeric Selection and Display Controls</legend>
            <div>
                <label for="age">Age (16+):</label>
                <input type="number" id="age" name="age" min="16" max="100" class="form-control">
            </div>
            <br> 
            <div>
                <label for="volume">Volume</label>
                <input type="range" id="volume" name="volume" min="0" max="11" class="form-range">
            </div>
            <br>
            <div>
                <label for="file" class="form-label">Upload progress:</label>
                <br>
                <progress id="file" max="100" value="70"> 70% </progress>
            </div>
            <br> 
            <div>
                <label for="fuel">Fuel level:</label>
                <br> 
                <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter>
            </div>
        </fieldset>

        <br> 
        <br> 
        <br> 

        <fieldset>
            <legend>Pickers</legend>
            <br> 
            <div>
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" min="1900-01-01" max="2006-12-31" class="form-control">
            </div>
            <br> 
            <div>
                <label for="appt">Choose a time for your appointment:</label>
                <input type="time" id="appt" name="appt" min="09:00" max="18:00" class="form-control">
            </div>
            <br>
            <div>
                <label for="meeting-time">Choose a time for your party:</label>
                <input type="datetime-local" id="meeting-time"
                    name="meeting-time"
                    min="2023-02-01T00:00" max="2023-06-14T00:00" class="form-control">
            </div>
            <br>
            <div>
                <label for="favColor">Favorite Color:</label>
                <input type="color" id="favColor" name="favColor" value="#ff8400" class="form-control form-control-color">
            </div>
            <br>
            <div>
                <label for="avatar">Choose a profile picture:</label>
                <input type="file" class="form-control"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg">
            </div>
        </fieldset>

        <br> 
        <br> 
        <br> 

        <fieldset>
            <legend>Buttons</legend>
            <br> 
            <label>Input Tags</label>
            <div>
                <input type="submit" value="Submit" class="btn btn-primary">
                <br> 
                <br> 
                <input type="reset" value="Reset" class="btn btn-primary">
                <br>
                <br> 
                <input type="image" value="Image" src="https://loremflickr.com/30/30" class="btn btn-primary">
                <br>
                <br> 
                <input type="button" value="Custom" class="btn btn-primary">
            </div>
            <br> 
            <label>Button Tags</label>
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <br>
                <br> 
                <button type="reset" class="btn btn-primary">Reset</button>
                <br>
                <br> 
                <button class="btn btn-primary">Custom</button>
            </div>
        </fieldset>

        <br> 
        <br> 
        <br>

        <fieldset>
            <legend>Hidden Input Controls</legend>
            <div>
                <label for="hidden-control">Hidden control:</label>
                <input id="hidden-control" class="form-control" v-bind:type="inputState">
            </div>
            <button type="button" class="btn btn-secondary" @click="toggleHidden">Press</button>
        </fieldset>
        <br> 
        <br>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    let inputState = ref("hidden")
    function toggleHidden() {
        inputState.value = (inputState.value === "hidden") ? "text" : "hidden"
    }
</script>

<style>
    .container {
        max-width: 30em;
    }
</style>