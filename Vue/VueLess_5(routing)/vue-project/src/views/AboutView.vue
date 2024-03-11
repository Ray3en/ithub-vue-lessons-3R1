<template>
    <h2>About View</h2>
    <p>{{ title }}</p>
    <p> {{ value }}</p>
</template>

<script>
    export default {
        props: {
            title: String,
            value: String
        },
        mounted(){
           console.log(this.$route.params)
        //    console.log(this.$route.fullPath)
        //    console.log(this.$route.meta)
        //    console.log(this.$route.matched)
        //    console.log(this.$route.path)
        //    console.log(this.$route.hash)
        }
    }
</script>