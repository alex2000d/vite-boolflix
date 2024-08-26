<script>
import AppHeader from './components/AppHeader.vue';
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
    AppHeader,
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