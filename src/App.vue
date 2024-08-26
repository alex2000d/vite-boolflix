<script>
import Appheader from './components/Appheader.vue';
import { store } from './store.js';
import axios from 'axios';
export default {
  data(){
    return{
      store,
      axios
    }
  },
  components:{
    Appheader,
    
  }
}
</script>
<template>
  <div>
    
  </div>
</template>
<style lang="scss">
@use './style/generals.scss'
</style>