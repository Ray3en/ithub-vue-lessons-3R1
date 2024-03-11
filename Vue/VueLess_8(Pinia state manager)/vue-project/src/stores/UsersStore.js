import { defineStore } from "pinia";
import { ref, watch } from "vue";

let data = [
    {id: 1, name: 'Alex', age: 40},
    {id: 2, name: 'Steven', age: 20},
    {id: 3, name: 'Neena', age: 30},
    {id: 4, name: 'John', age: 24},
]

export const useUsersStore = defineStore('usersStore', () => {
    let users = ref( JSON.parse(localStorage.getItem('users')) ?? data )

    const addNewUser = (user) => {
        let newUser = {
            id: Date.now(),
            name: user.name,
            age: +user.age
        }
        users.value.push(newUser)
    }

    const deleteUser = (id) => {
        users.value = users.value.filter(el => el.id !== id)
    }

    // LS
    watch(
        () => users,
        () => {
            localStorage.setItem('users', JSON.stringify(users.value))
        },
        // Позволяет более детальнее смотреть за зименением (изменение сво-йств внутри объекта)
        // watch без этого режимо не замечает изменения
        {deep: true}
    )

    return {
        users,
        addNewUser,
        deleteUser
    }
})

