<template>
    <h2>Users</h2>
    <div>
        <div v-for="user in users" :key="user.id">
            <h3>{{ user.firstName }}</h3>
            <p>{{ user.age }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                users: [
                    {id: 31, firstName: 'Alex', age: 21},
                    {id: 32, firstName: 'Steven', age: 24},
                    {id: 33, firstName: 'Neena', age: 32},
                    {id: 34, firstName: 'John', age: 26},
                ]
            }
        },
        mounted(){
            fetch('https://dummyjson.com/users')
                .then(res => res.json())
                .then(data => {
                    this.users = [...this.users, ...data.users]
                })
        } 
    }
</script>



Задание 1
Реализовать удаление сотрудника по ID (используя даблклик)

Задание 2
Реализовать механизм сохранения и чтения масисва в LS