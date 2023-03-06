<script setup>
    import validator from 'validator'
    import { ref, reactive, watch } from 'vue'
    import { onMounted, onUpdated } from 'vue'

    const usernameRef = ref(null)

    const username = ref('')
    const password = ref('')
    const password2 = ref('')
    const email = ref('')
    const phone = ref('')
    const avatarFile = ref('')

    const disabled = ref(true)
    const validUsername = ref(false)
    const validPassword = ref(false)
    const passwordsMatch = ref(false)
    const validEmail = ref(false)
    const validPhone = ref(false)

    const usernameErrorRef = ref(null)
    const passwordErrorRef = ref(null)
    const password2ErrorRef = ref(null)
    const emailErrorRef = ref(null)
    const phoneErrorRef = ref(null)

    // called when anything in component changes - including onMounted
    // if used in input element, must have v-model set
    function componentUpdate(elm) {
        //console.log("password changed")
        //console.log(elm.value)
        //console.log(passwordErrorRef.value)
        if (passwordErrorRef.value != null && elm.value.length > 0) {
            validPassword.value = (elm.value.length >= 8)
            passwordErrorRef.value.innerHTML = (validPassword.value) ?
                "&nbsp;" : "Minimum length: 8 characters"
        }
    }
    //watch v-model input.value ref (called when string changes)
    watch(username, () => {
        validUsername.value = (username.value.length >= 4)
        usernameErrorRef.value.innerHTML = (validUsername.value) ?
            "&nbsp;" : "Minimum length: 4 characters"
    })
     // watch array of refs
    watch([password, password2], () => {
        passwordsMatch.value = (password.value === password2.value)
        password2ErrorRef.value.innerHTML = (passwordsMatch.value || password2.value.length == 0) ?
            "&nbsp;" : "Passwords do not match"
    })

    // watch email
    watch(email, () => {
        validEmail.value = validator.isEmail(email.value)
        emailErrorRef.value.innerHTML = (validEmail.value) ?
            "&nbsp;" : "Not valid email"
    })

    // watch phone number
    watch(phone, () => {
        validPhone.value = validator.isMobilePhone(phone.value, "en-US")
        phoneErrorRef.value.innerHTML = (validPhone.value) ?
            "&nbsp;" : "Not valid phone number"
    })

    // watch array of refs
    watch([validUsername, validPassword, passwordsMatch, validEmail, validPhone], async () => {
        disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value && validEmail.value && validPhone.value)
        //console.log(disabled.value)
    })
    function submit() {
        let mssg = username.value + ", " + password.value + ", " + email.value + ", " + phone.value
        console.log(mssg)
    }

    function loadPreviewImg(evt) {
        avatarFile.value = evt.target.files[0]
    }
    watch(avatarFile, () => {
        let reader = new FileReader()
        reader.onloadend = function () {
            let img = document.querySelector("#preview-img")
            img.src = reader.result;
        }
        reader.readAsDataURL(avatarFile.value)
    })

    onMounted(() => {
        usernameRef.value.focus();
    })
    onUpdated(() => {
        //console.log(usernameRef.value.value)
    })
</script>


<template>
    <div class="container">
        <form class="rounded border border-primary border-2 border-opacity-25 py-3 px-5">
            <fieldset class="d-flex flex-column">
                <legend>Create Account</legend>

                <div class="form-floating mb-2">
                    <input ref="usernameRef" v-model="username" id="username" type="text" class="form-control" />
                    <label for="username" class="form-label">Username</label>
                    <small ref="usernameErrorRef" class="text-danger">&nbsp</small>
                </div>

                <div class="form-floating mb-2">
                    <input :ref="componentUpdate" v-model="password" id="password" type="password"
                        class="form-control" />
                    <label for="password" class="form-label">Password</label>
                    <small ref="passwordErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <input v-model="password2" id="password2" type="password" class="form-control" />
                    <label for="password2" class="form-label">Reenter password</label>
                    <small ref="password2ErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <input v-model="email" id="email" type="email" class="form-control" />
                    <label for="email" class="form-label">Email</label>
                    <small ref="emailErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div class="form-floating mb-2">
                    <input v-model="phone" id="phone" type="tel" class="form-control" />
                    <label for="phone" class="form-label">Phone Number</label>
                    <small ref="phoneErrorRef" class="text-danger">&nbsp;</small>
                </div>

                <div id="avatarArea">
                    <div>
                        <label for="avatar" class="form-label">Optional: Choose a profile picture:</label>
                        <input id="avatar" class="form-control" type="file" name="avatar" accept="image/png, image/jpeg" @change="loadPreviewImg">
                    </div>
                    <img id="preview-img">
                </div>
                <br>

                <div>
                    <button @click="submit" class="btn btn-primary" type="button"
                        v-bind:disabled="disabled">Create</button>
                </div>
            </fieldset>
        </form>
    </div>

</template>

<style>
#preview-img {
    width: 100px;
    height: 100px;
    margin-left: 0.5em;
    border-radius: 20%;
    border: none
}
#avatarArea {
    display: flex;
    flex-direction: row;
}
</style>