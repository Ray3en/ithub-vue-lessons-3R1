<template>
    <h2>Cycle methods example</h2>
    <h3>{{ boolean }}</h3>
    <button @click="handler">Reverse</button>
    <p>{{ computedBoolean }}</p>
</template>


<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

// аналог mounted (отработка побочного кода после монтирования компонента)
onMounted(() => {   
    console.log('CycleComp mounted')
})

// Функция вызывает побочный код после размонтирования компонента (в App необходимо изменить count на 4)
onUnmounted(() => {
    console.log('CycleComp unmounted')
})

let boolean = ref(true)

const handler = () => (boolean.value = !boolean.value) 

// Пример работы функции watch
watch(boolean, (newValue, oldValue) => {
    console.log(boolean.value)
})

// Пример работы computed (кешируемость результата)
let computedBoolean = computed(() => {
    return `${boolean.value} = boolean`
})

</script>