<script>
export default {
    data(){
        return{
            value: ''
        }
    }
    
}
</script>
<template lang="">
<div class=" d-flex mb-3 mt-3">

<input type="text" class="me-2 " placeholder="Cerca film o serie  " aria-label="Recipient's username" aria-describedby="button-addon2"
v-model="value" @keyup.enter="$emit ('buttonClick', value)">
<button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="$emit ('buttonClick', value)">cerca</button>

</div>
</template>
<style lang="scss">

button{
border:none;
background-color: white;
color:red;
margin-left: 1rem;
font-size: 15px;
padding: 0.5rem;
border: 1px solid red
}

</style>