<script setup>
import CardItem from './CardItem.vue';
    const props = defineProps({
        recipes: Array
    })


</script>

<template>
    <div class="container">
        <CardItem 
            v-for="card in recipes"
            :key="card.id"
            :name="card.name"
            :image="card.image"
            :id="card.id"
        />
    </div>
</template>

<style>
    .container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
</style>