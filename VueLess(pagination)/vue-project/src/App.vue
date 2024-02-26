<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import CardList from './components/CardList.vue';
import Pagination from './components/Pagination.vue';
import axios from 'axios'


let page = ref(1)
let countElemPage = ref(6)
let recipes = reactive({
  items: [],
  countElem: 0
})

function changePage(num){
  page.value = num
}

let computed_recipes = computed(() => {
  let last_elem = page.value * countElemPage.value
  let first_elem = last_elem - countElemPage.value
  return recipes.items.slice(first_elem, last_elem)
})

let count_elem_page = computed(() => {
  let count = Math.ceil(recipes.countElem / countElemPage.value)
  return Array(count).fill('').map((_,ind) => ind + 1)
})

onMounted(async () => {
  let res = await axios.get('https://dummyjson.com/recipes?limit=50')
  recipes.items = res.data.recipes
  recipes.countElem = res.data.recipes.length
})

</script>

<template>
  <Pagination 
    @changePage="changePage"
    :page="page"
    :countArray="count_elem_page"/>
  <CardList 
    :recipes = 'computed_recipes'/>
</template>


