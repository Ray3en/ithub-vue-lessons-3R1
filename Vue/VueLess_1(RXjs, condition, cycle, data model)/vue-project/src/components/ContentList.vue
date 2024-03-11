
<template>
    <div v-if="number % 2 === 0">
        <p>Hello!</p>
    </div>
    <img v-if="number % 10 === 0" :src="srcImage"/>
</template>

Реализуйте значение для number в виде рандомного значения в диапазоне от 1 до 50 (включительно)
Также подготовьте новую модель srcImage с ссылкой на любую картинку (из интернета)
Реализуйте условие, которое будет отображать картинку в случае, если number будет кратен 10

<script>

const number = Math.ceil((Math.random() * 40) + 10)
export default {
    data(){
        return{
            number,
            srcImage: 'https://freepngimg.com/thumb/happy/144618-emoji-happy-free-clipart-hd.png'
        }
    }
}
</script>


<style>
    .content{
        color: blue
    }
</style>