
<template>
    <h2>Contacts View</h2>
    <ul>
        <router-link to="/contacts/email"><li>Email</li></router-link>
        <router-link to="/contacts/phone"><li>Phone</li></router-link>
    </ul>
    <router-view :phone="phone" :email="email"></router-view>
</template>

<script>
    import {RouterView, RouterLink} from 'vue-router' 
    export default {
        data(){
            return{
                phone: '8(900)001-001',
                email: 'example@ithub.ru'
            }
        }
    }
</script>

Задание. Сфомрируйте в компоненте 2 модельки (phone, email) с произвольными значениями
Передайте значения этих моделек детям и отобразите их в разметке

