сво-во computed позволяет вынести вычисления из шаблона компнента, формурия геттер, 
который кеширует return и не формирует новый результат в случае, если используемые
сво-ва меняться не будут

watch позволяет следить за моделькой и выполнять побочный код
Следя за моделькой, мы можем получить новое и старое значение, указав их в качестве аргумента

Метод mounted позволяет реализовать побочный код в момент монтирования компонента
<template>
    <div>
        <h2>Example</h2>
        <input v-model="name"/>
        <input v-model="lastName"/>
        <p>{{ fullName }}</p>
        <p>{{ conditionName }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: 'Alex',
                lastName: 'Willyam'
            }
        },
        computed: {
            fullName(){
                return  this.name + ' ' + this.lastName 
            },
            conditionName(){
                return this.name.length > 10 ? 'name > 10' : 'name <= 10' 
            },
            // этот геттер нужен чтобы следить (watch) за двумя модельками
            fulNameWatch(){
                return [this.name, this.lastName]
            }
        },
        watch: {
            name(newValue, oldValue){
                console.log(newValue, 'new name')
                console.log(oldValue, 'old name')
            },
            lastName(){
                console.log(this.lastName, 'change lastName')
            },
            fulNameWatch(){
                console.log(this.fulNameWatch, 'change fullName')
            }
        },
        mounted(){
            this.name = 'Tigran'
        }
    }
</script>