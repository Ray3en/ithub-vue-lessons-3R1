<template>
    <h2>Home View</h2>
    <button @click="navigate">Go to</button>
</template>

<script>
    export default {
        methods: {
            navigate(){
                // this.$router.push('/404')
                this.$router.replace('/404')
            }
        }
    }
</script>