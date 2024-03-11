<template>
    <button @click="this.$emit('submitHandle')" class="btn_elem">{{ title }}</button>
</template>

<script>
    export default {
        props: {
            title: String
        },
        emits: ['submitHandle']
    }
</script>

<style>
    .btn_elem{
        padding: 5px 30px;
        border-radius: 15px;
        background-color: plum;
        border: 1px solid black;
    }
</style>