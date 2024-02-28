import axios from "axios";
import { defineStore } from "pinia";

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleValue(){
            return this.count ** 2
        },
    },
    actions: {
        increment(){
            this.count++
        },
        decrement(){
            this.count -= 1
        },
        changeValue(num){
            this.count = num
        },
        async getRandonValue(){
            let url = 'https://dummyjson.com/users'
            let res = await axios.get(url)
            this.count = res.data.users[5].age
        }
    }
})