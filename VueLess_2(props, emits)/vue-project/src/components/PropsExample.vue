
<template>
    <h1 @click="handleLog"> {{ title }}</h1>
</template>

<script>
    export default {
        props: ['title'],
        emits: ['handle'],
        methods: {
            handleLog(){
                // $emit регистрирует входящее событие (нужно для корреткной передачи информации родительского компонента)
                this.$emit('handle', this.title)
            }
        }
    }
</script>