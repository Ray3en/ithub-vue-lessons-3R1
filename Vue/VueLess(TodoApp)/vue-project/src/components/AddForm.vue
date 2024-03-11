<template>
    <form @submit.prevent="addNewTask">
        <select v-model="day" required class="select_days">
            <option value="" disabled selected>Выберите день</option>
            <option v-for="(elem, ind) in days" :key="ind" :value="elem">
                {{ elem }}
            </option>
        </select>
        <select v-model="priority" value="12" class="select_priority">
            <option :value="true">Важная</option>
            <option :value="false">Не важная</option>
        </select>
        <input v-model="title" class="todo_title"/>
        <input class="submit_btn" type="submit" value="Добавить"/>
    </form>
</template>

<script>
    export default {
        data(){
            return{
                days: ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],
                title: '',
                day: '',
                priority: ''
            }
        },
        methods: {
            addNewTask(){
                this.$emit('addNewTask', this.day, this.priority, this.title)
            }
        },
        emits: ['addNewTask'],

    }
</script>

<style>
    form{
        padding: 32px 62px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 
                    'SD SP . .'
                    'TT TT . SB';
        background-color: rgb(236, 240, 241);
        border-radius: 20px;
        gap: 25px
    }


    .select_days{
        grid-area: SD;
        padding: 10px;
    }

    .select_priority{
        grid-area: SP;
        padding: 10px;
    }
    .todo_title{
        grid-area: TT;
        padding: 10px;
    }
    .submit_btn{
        grid-area: SB;
        padding: 15px 10px;
        border: 1px solid black;
        background: rgb(26, 188, 156);
        color: white;
        border-radius: 23px;


    }
</style>