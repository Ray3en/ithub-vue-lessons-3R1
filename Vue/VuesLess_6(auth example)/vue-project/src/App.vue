<script>
import { RouterView, RouterLink } from 'vue-router';
  export default {

  }
</script>

<template>
  <header>
    <ul>
      <router-link to="/public"><li>Public</li></router-link>
      <router-link to="/private"><li>Private</li></router-link>
      <router-link to="/login"><li>Login</li></router-link>
    </ul>
  </header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>


<style lang="scss">

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header{
    padding: 75px;
    background-color: bisque;
    ul {
      list-style-type: none;
      display: flex;
      gap: 25px;
      font-size: 30px;
      text-decoration: none;
      a {
        text-decoration: none;
        color: rgb(60, 60, 60);
      }
      a:hover{
        color: black;
      }
    }
  }

  .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 35px 0;
      gap: 25px
    }

</style>