<template>
    <div class="day_block">
        <div class="day_title">
            <p> {{ day_text }}</p>
        </div>
        <div class="todos_wrapper">
            <todo-item
                v-for="todo in day_todos" :key="todo.id"
                    :title="todo.title"
                    :id="todo.id"
                    :priority="todo.priority"
                    :id_day="id_day"
                    @deleteTask="deleteTask"
            >

            </todo-item>
            <button @click="deleteDay" class="x_day">x</button>

        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

    export default {
        components: {
            TodoItem
        },
        props: {
            id_day: Number,
            day_text: String,
            day_todos: Array
        },        
        emits: ['deleteDay','deleteTask'],
        methods: {
            deleteDay(){
                this.$emit('deleteDay', this.id_day)
            },
            deleteTask(idDay, id){
                this.$emit('deleteTask', idDay, id)
            }
        }
}
</script>

<style>
.day_block{
    background-color: rgb(236, 240, 241);
    display: flex;
    border-radius: 23px;

}
.todos_wrapper{
    position: relative;
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}
.day_title{
    background: rgb(52, 73, 94);
    padding: 10px;
    width: 80px;
    color: white;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 23px 0px 0px 23px;
}
</style>