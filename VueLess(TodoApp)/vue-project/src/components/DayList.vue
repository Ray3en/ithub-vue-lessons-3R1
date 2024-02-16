<template>
    <div class="days_wrapper">
        <day-item 
            v-for="day in todos" :key="day.id_day"
            :day_todos="day.day_todos"
            :id_day="day.id_day"
            :day_text="day.day_text"
        >
        </day-item>
    </div>
</template>

<script>
import DayItem from './DayItem.vue';

    export default {
        components:{
            DayItem
        },
        props: {
            todos: Array
        }
    }
</script>

<style>
    .days_wrapper{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
</style>