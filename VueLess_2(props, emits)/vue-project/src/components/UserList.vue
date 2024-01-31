<template>
    <div>
        User List
        <form @submit="addNewUser">
            <input placeholder="name" name="name"/>
            <input type="submit"/>
        </form>
    </div>
    <div>
        <button @click="deleteFirstUser">Delete first user</button>
        <h3 v-for="user in users" :key="user.id" @dblclick="deleteById(user.id)">
            {{ user.name }}
        </h3>
    </div>
</template>

Задание 2. Реализует удаление пользователя по ID
Удаление должно происходить после двойного клика на заголовок

Задание 3. Внутри формы реализуйте процесс который позволит добавлять
нового юзера в массив, указав имя, после нажатия на кнопку "Submit"


<script>

    export default {
        data(){
            return {
                users: [
                    {id: 1, name: 'Alex'},
                    {id: 2, name: 'Steven'},
                    {id: 3, name: 'Neena'},
                    {id: 4, name: 'John'},
                    {id: 5, name: 'Greeca'},
                ]
            }
        },
        methods: {
            deleteFirstUser(){
                this.users.shift()
            },
            deleteById(id){
                this.users = this.users.filter(elem => elem.id !== id)
            },
            addNewUser(event){
                event.preventDefault()
                let form_data = new FormData(event.target)
                let data = Object.fromEntries(form_data)
                this.users.push({id: Date.now(), name: data.name})
            }
        }
    }
</script>