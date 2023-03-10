<script setup>
    import { ref, reactive } from 'vue'
    import Form from './components/Form.vue'
    import Card from './components/Card.vue'

    let name = ref('')
    let rank = ref('')
    let position = ref('')

    let arr = reactive([])

    function updateArray() {
        if (name.value.length > 0 && rank.value.length > 0 && position.value.length > 0) {
            arr.push({
                "name": name.value, 
                "rank": rank.value,
                "position": position.value
            })
        } else {
            alert("Must have all data selected to submit. NOTE: Rank must be move from initial position to register.")
        }
    }

</script>

<template> 
    <div id="main-area" class="container row">
        <div class="col-md-8 col-sm-12">
            <h3>Prospects</h3>
            <div v-for="data in arr">
                <Card v-bind="data" />
            </div>  
        </div>
        <div class="col-md-4 col-sm-12">
            <Form v-model:name="name" v-model:rank="rank" v-model:position="position" @update-array="updateArray"></Form>
        </div>
        
    </div>
</template>

<style scoped>
    #main-area {
        margin: 1.5em;
    }
</style>
