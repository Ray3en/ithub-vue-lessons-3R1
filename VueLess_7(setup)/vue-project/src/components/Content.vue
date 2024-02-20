<template>
    <p>{{ message }}</p>
    <button @click="handler">Upper</button>
</template>

<script setup>
    // defineProps получает пропы от родителя
    const {message} = defineProps({
        message: String
    })

    // defineEmits получает (регистрирует) события (методы) от родителя
    const emit = defineEmits(['upperCase'])

    function handler(){
        emit('upperCase')
    }


    
</script>