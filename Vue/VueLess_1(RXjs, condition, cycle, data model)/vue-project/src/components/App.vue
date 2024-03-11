<template>
    <Cycle></Cycle>
</template>

<script>
import Block from './Block.vue'
import ContentList from './ContentList.vue'
import Cycle from './Cycle.vue'

export default {
    components: {
        Block, ContentList, Cycle
    }
}
</script>

<style>
    .item{
        color: red;
    }
</style>