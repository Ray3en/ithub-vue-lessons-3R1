<script>
import SimpleSlot from './components/SimpleSlot.vue'
import NamesSlot from './components/NamesSlot.vue'
import PropSlot from './components/PropSlot.vue'
import LoopSlot from './components/LoopSlot.vue'
import ButtonSlot from './components/ButtonSlot.vue'

  export default {
    components: {
      SimpleSlot,
      NamesSlot,
      PropSlot,
      LoopSlot,
      ButtonSlot
    },
    data(){
      return{
        a: 0
      }
    }
  }
</script>

<template>
  <!-- Применение слота -->
  <!-- <simple-slot>
    <h2>Value 1</h2>
  </simple-slot> -->

  <!-- 
  <simple-slot>
    <h2>Value 2</h2>
    <h4>Example</h4>
  </simple-slot> -->

  <!-- Именованные слоты (подслоты) -->
  <!-- <names-slot>
    <template v-slot:block1>
      <p>Top</p>
    </template>
  
    <template v-slot:block2>
      <p>Bottom</p>
    </template>
  </names-slot> -->


  <!-- <names-slot>
    <template v-slot:block1>
      <button>Top</button>
    </template>
  
    <template v-slot:block2>
      <ul>
        <li>Bottom</li>
      </ul>
    </template>
  </names-slot> -->

  <!-- Передача параметров из дочернего компонента в родительский -->
  <!-- <prop-slot>
      <template v-slot="slots">
        <h1>{{ slots.msg }}</h1>
        <ul>
          <li>{{ slots.user.name }}</li>
          <li>{{ slots.user.age }}</li>
        </ul>
      </template>
  </prop-slot>
   -->

  <!-- <prop-slot>
      <template v-slot="slots">
        <button>{{ slots.msg }}</button>
      </template>
  </prop-slot> -->

  <!-- <prop-slot>
      <template v-slot="slots">
        <ul>
          <li>{{ slots.msg }}</li>
        </ul>
      </template>
  </prop-slot> -->

  <!-- Формирования итерация для слота -->
  <!-- <loop-slot>
    <template v-slot="slots">
        {{ slots.number }}
    </template>
  </loop-slot>


  <loop-slot>
    <template v-slot="slots">
        <h2>{{ slots.number }}</h2>
    </template>
  </loop-slot>


  <loop-slot>
    <template v-slot="slots">
        <button>{{ slots.number }}</button>
    </template>
  </loop-slot> -->

  <button-slot>
      <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
      </svg>
      Auth
  </button-slot>

</template>

