<template>
    <div class="form">
        <input-elem @changeProp="changeProp" key_name="name" type='text' placeholder="Name"></input-elem>
        <input-elem @changeProp="changeProp" key_name="phone" type='tel' placeholder="Phone"></input-elem>
        <input-elem @changeProp="changeProp" key_name="email" type='email' placeholder="Email"></input-elem>
        <input-elem @changeProp="changeProp" key_name="date" type='date' placeholder="Date"></input-elem>
    </div>
</template>

<script>
import InputElem from '@/UI/InputElem.vue';

    export default{
        props: {
            form: Object
        },
        emits: ['changeProp'],
        components: {InputElem},
        methods: {
            changeProp(prop, title){
                this.$emit('changeProp', prop, title)
            }
        }

    }
</script>

<style>
    .form{
        display: flex;
        flex-direction: column;
        gap: 15px
    }
</style>