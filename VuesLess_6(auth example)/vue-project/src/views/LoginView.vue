<template>
    <h1>Login</h1>

    <label>
        Enter passcode
        <input v-model="pass_code" @keydown="auth"/>
    </label>
</template>

<script>
    export default{
        data(){
            return {
                pass_code: ''
            }
        },
        methods: {
            auth(e){
                if (e.key === 'Enter'){
                    localStorage.setItem('password', this.pass_code)
                }
            }
        }
    }
</script>