<template>
    <ul>
        <li v-for="elem in array" :key="elem">
            <slot :number="elem"></slot>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return{
                array: ["Один", "Два", "Три", "Четыре"]
            }
        }
    }
</script>

