<template>
    <h1 class="item">Hello world</h1>

    <!-- Преобразование шаблона. Бинд атрибутов -->
    <h2>{{ test.toLowerCase() + 'TEST' }}</h2>
    <h2 :id="id" >{{ a }}</h2>

    <!-- Тернарный оператор -->
    <h2 :class="bool ? 'y' : 'n'" >
        {{ (bool) ? 'YES' : 'NO' }}
    </h2>

    <!-- Условный оператор -->
    <p v-if="false">
        Condition 1
    </p>
    <p v-else-if="1 === 3">
        Condition 2
    </p>
    <p v-else>
        Condition (ELSE)
    </p>
</template>

<script>

    const a = 100


  export default {
    data(){
        return {
            test: 'ITHub',
            id: 'elem_value',
            bool: true,
            a
        }
    }
  }
</script>


<style>
    .block{
        color: purple
    }
</style>