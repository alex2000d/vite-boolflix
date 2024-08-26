<script>
import Appheader from './components/Appheader.vue';
import { store } from './store.js';
import axios from 'axios';
import AppSearchbar from './components/AppSearchbar.vue';
export default {
  data(){
    return{
      store,
      axios
    }
  },
  components:{
    Appheader,
    AppSearchbar,
    
  }
}
</script>
<template>
  <div>
    <AppSearchbar />
  </div>
</template>
<style lang="scss">
@use './style/generals.scss'
</style>