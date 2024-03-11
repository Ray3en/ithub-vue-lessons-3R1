<template>
    <h2>Phone: {{ clearPhone }}</h2>
</template>

<script>
    export default {
        computed: {
            clearPhone(){
                return "+7"+this.phone.slice(1).replace(/[()-]/g, '')
                // return "+7"+this.phone.slice(1).replaceAll('(', '').replaceAll(')', '').replaceAll('-', '')
                // return "+7"+this.phone.slice(1).split('').filter(el => (!'-()'.includes(el))).join('')  }
        },
        props: {
            phone: String
        },
        
    }
</script>