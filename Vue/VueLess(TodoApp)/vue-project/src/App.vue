<script>
import AddForm from './components/AddForm.vue'
import DayList from './components/DayList.vue'

export default {
  components: {
    AddForm,
    DayList
  },
  data() {
    return {
      todos: [
        {
          id_day: 1,
          day_text: 'ПН',
          day_todos: [
            { id: 1, title: 'Помыть руки', priority: true },
            { id: 2, title: 'Помыть', priority: false },
            { id: 3, title: 'Руки', priority: false },
          ]
        },
        {
          id_day: 6,
          day_text: 'СБ',
          day_todos: [
            { id: 4, title: 'Выучить стихотворение ', priority: true },
            { id: 5, title: 'Выучить', priority: true },
            { id: 6, title: 'Стихотворение', priority: false }
          ]
        }
      ]
    }
  },
  methods: {
    deleteDay(idDay){
      this.todos = this.todos.filter(el => el.id_day !== idDay)
    },
    deleteTask(idDay, id){
      let findDay = this.todos.find(el => el.id_day === idDay)
      findDay.day_todos = findDay.day_todos.filter(el => el.id !== id)
      if (!findDay.day_todos.length){
        this.deleteDay(idDay)
      }
    },
    addNewTask(day,priority,title){
      let days = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"]

      let newTask = {
        id: Date.now(),
        priority,
        title
      }

      let findDay = this.todos.find(el => el.day_text === day)
      if (findDay){
        findDay.day_todos.push(newTask)
        findDay.day_todos.sort((a,b) => b.priority - a.priority)
      } else {
        let newDay = {
          id_day: days.indexOf(day)+1,
          day_text: day,
          day_todos: [newTask]
        }
        this.todos.push(newDay)
        this.todos.sort((a,b) => a.id_day - b.id_day)
      }

    }
  }
}
</script>

<template>
  <div class="container">
    <add-form @addNewTask="addNewTask"></add-form>
    <day-list @deleteTask="deleteTask" @deleteDay="deleteDay" :todos="todos"></day-list>
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: rgb(26, 188, 156);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 70px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
.x_todo, .x_day{
  position: absolute;
  top: -14px;
  right: -14px;
  width: 28px;
  height: 28px;
  border: 2px solid black;
  background-color: red;
  border-radius: 50%;
  font-size: 20px;
  opacity: 0;
}

.x_day{
  right: -70px;
}

.todo_item:hover > .x_todo {
  opacity: 1;
}

.day_block:hover   .x_day {
  opacity: 1;
}

.todo_item:hover ~ .x_day {
  opacity: 0;
}

</style>