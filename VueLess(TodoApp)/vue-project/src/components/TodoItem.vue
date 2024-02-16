<template>
    <div class="todo_item" :style="todoStyle">
        {{ title }}
        <button class="x_todo">x</button>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            title: String,
            priority: Boolean
        }, 
        computed:{
            todoStyle(){
                return {backgroundColor: this.priority ? 'rgb(231, 76, 60)' : 'rgb(26, 188, 156)'}
            }
        }
    }
</script>

<style>
.todo_item{
    position: relative;
    min-width: 300px;
    padding: 10px 15px;
    font-size: 25px;
    color: white;
}
</style>
