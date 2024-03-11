<template>
    <div>
        <div>
            <h2>User List</h2>
            <input v-model="name" placeholder="name" />
            <input v-model="age" placeholder="age" />
            <button @click="addHandle">Add new user</button>
        </div>
        <div>
            <div v-for="user in usersStore.users" :key="user.id">
                <h3>{{ user.name }}</h3>
                <p>{{ user.age }}</p>
                <button @click="removeHandle(user.id)">Remove user</button>
            </div>
        </div>
    </div>
</template>

Реализуйте удаление по ID

<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import {ref} from 'vue'

const usersStore = useUsersStore()

let name = ref('')
let age = ref('')

const addHandle = () => {
    usersStore.addNewUser({name: name.value, age: age.value})
    name.value = ''
    age.value = ''
}

const removeHandle = (id) => {
    usersStore.deleteUser(id)
}

</script>