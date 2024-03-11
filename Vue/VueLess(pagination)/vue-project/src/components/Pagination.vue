<script setup>
const props = defineProps({
    countArray: Array,
    page: Number
})

const emit = defineEmits(['changePage'])

function changePage(num){
    emit('changePage', num)
}

</script>

<template>
    <div class="btns_container">
        <button @click="changePage(page - 1)" :disabled="page <= 1">{{ '<--' }}</button>
        <button 
            v-for="numb in countArray" 
            :key="numb" 
            @click="changePage(numb)"
            :class="numb === page ? 'btn active' : 'btn'"
        >
            {{ numb }}
        </button>
        <button @click="changePage(page + 1)" :disabled="page === countArray.length">{{ '-->' }}</button>
    </div>
</template>

<style>
    .btns_container{
        margin: 10px;
        display: flex;
        gap: 5px;
        justify-content: center;
    }
    .active {
        font-weight: bold;
    }
</style>