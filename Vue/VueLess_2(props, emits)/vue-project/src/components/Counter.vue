<template>
    <div>
        <h2>Counter</h2>
        <h3>{{ count }}</h3>
        <button @click="count++">Incr</button>
        <button @click="incr(100)">Incr 100</button>
        <button @click="decr(1)">Decr 1</button>
        <button @click="decr(100)">Decr 100</button>
        <button @click="console.log(count)">Log Count</button>
        <button @click="eventHandle(count, $event), incr(1)">Log Count & incr Count</button>
        <input @keydown="eventHandle(count, $event)"/>
        <button @click="promptHandle">Prompt</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                count: 0
            }
        },
        methods: {
            incr(n){
                this.count += n
            },
            decr(n){
                this.count -= n
            },
            eventHandle(n, event){
                console.log(n)
                console.log(event)
            },
            promptHandle(){
                let result = prompt()
                if (isNaN(result)){
                    this.count = 0
                } else {
                    this.count = +result
                }
            }
        }
    }
</script>

