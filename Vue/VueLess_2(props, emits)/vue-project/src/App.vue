<template>
  <!-- <counter></counter> -->
  <!-- <user-list></user-list> -->

  <!-- Пример передачи пропов -->
  <!-- <props-example :title="numbers"></props-example> -->

  <props-example
    v-for="(elem, ind) in numbers" 
    :key="ind"
    :title="elem"
    @handle="log"
  >
  </props-example>
</template>

<script>
import Counter from './components/Counter.vue'
import UserList from './components/UserList.vue'
import PropsExample from './components/PropsExample.vue'

  // Задание.
  // Создайте компонент ProductCard, который будет формировать разметку
  // с Заголовокм (имя товара), параграфом (цена товара), а также кнопка, которая должна будет удалять
  // сам товар (X).
  // Необходимо пройтись по модели products и циклично вернуть компонент ProductCard, передав все необходиые
  // пропы, в том числе и метод, который реализует удаление по ID (по клику на кнопку)



export default {
  components: {Counter, UserList, PropsExample},
  data(){
    return {
      numbers: ["Один", "Два", "Три"],
      products: [
          {id: 1, title: 'Item 1', price: 100},
          {id: 2, title: 'Item 2', price: 200},
          {id: 3, title: 'Item 3', price: 300},
          {id: 4, title: 'Item 4', price: 400}
        ]
    }
  },
  methods: {
    log(arg){
      console.log('LOG!', arg)
    }
  }
}
</script>

<style>

</style>