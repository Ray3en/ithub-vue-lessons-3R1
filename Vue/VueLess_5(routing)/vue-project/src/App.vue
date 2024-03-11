<script>
import {RouterLink, RouterView} from 'vue-router'
export default {
  data(){
    return{
      value: 'message!!!'
    }
  }
}
</script>

<template>
  <ul>
    <router-link to="/" ><li>Home</li></router-link>
    <router-link to="/about" ><li>About</li></router-link>
    <router-link to="/contacts" ><li>Contacts</li></router-link>
  </ul>
  <div>
    <router-view
      :value="'ewrwerwer'"
    >

    </router-view>
  </div>
</template>