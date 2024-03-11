<template>
  <div class="main">
    <form-elem @changeProp="changeProp" :form="form"></form-elem>
    <button-elem @submitHandle="submitHandle" title="Submit"></button-elem>
  </div>
</template>

<script>
import ButtonElem from './UI/ButtonElem.vue';
import FormElem from './components/FormElem.vue';

  export default{
    components: {
      ButtonElem, FormElem
    },
    data(){
      return{
        form: {
          name: '',
          email: '',
          phone: '',
          date: '',
        }
      }
    },
    methods: {
      submitHandle(){
        console.log({...this.form})
      },
      changeProp(prop, value){
        this.form[prop] = value
      }
    }
  }
</script>

<style>
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
</style>