<template>
    <input 
        :placeholder="placeholder" 
        :type="type"
        class="input_elem"
        @input="changeProp"
    />
</template>

<script>
    export default{
        props: {
            type: String,
            placeholder: String,
            key_name: String
        },
        emits: ['changeProp'],
        methods: {
            changeProp(e){
                this.$emit('changeProp', this.key_name, e.target.value)
            }
        }
    }
</script>

<style>
    .input_elem{
        padding: 5px 20px;
        border-radius: 15px;
        outline: none;
        border: 1px solid black;
    }
</style>