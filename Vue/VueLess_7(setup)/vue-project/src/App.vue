<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>Counter</h2>
    <p> {{ counter }}</p>
    <button @click="increment">Click!</button>
  </div>
  <div>
    <h2>List</h2>
    <button @click="deleteLastElem">Delete last</button>
    <ul>
      <li v-for="(number, ind) in list" :key="ind">
          {{ number }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Props example</h2>
    <content @upperCase="upperCase" :message="message"></content>
  </div>
  <div v-if="counter < 4">
    <cycle-comp></cycle-comp>
  </div>
</template>


<script setup>
import Content from './components/Content.vue'
import CycleComp from './components/CycleComp.vue'
import { reactive, ref } from 'vue';

  // Инициализация реактивного выражения
  let message = ref('Hello!')
  let counter = ref(0)

  // Инициализация реактивного выражения для ссылочного типа
  let list = reactive([1,2,3,4,5])

  function increment(){
    counter.value++
  }

  function deleteLastElem(){
    list.pop()
  }

  function upperCase(){
    message.value = message.value.toUpperCase()
  }

</script>
