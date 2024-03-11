<template>
    <div>
       <slot :msg="message" :user="obj"></slot>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                message: 'Example!',
                obj: {
                    name: 'Alex',
                    age: 40
                }
            }
        }
    }
</script>

