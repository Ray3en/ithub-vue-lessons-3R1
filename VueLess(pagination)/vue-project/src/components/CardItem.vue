<script setup>
    const props = defineProps({
        id: Number,
        name: String,
        image: String
    })
</script>

<template>
    <div>
        <img width="300" height="300" :src="image"/>
        <h2>{{ id + ' ' + name }}</h2>
    </div>
</template>