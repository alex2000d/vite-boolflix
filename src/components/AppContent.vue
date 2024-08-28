<script>
import { store } from '../store';
import AppFilm from './AppFilm.vue';
import AppSeries from './AppSeries.vue';
import axios from 'axios'
export default {
  components:{
    AppFilm,
    AppSeries,
    axios
  },
  data(){
    return{
        store,
        
    }
  },
  
}
</script>
<template lang="">
<div class="container-content my-4">

   <h1>I FILM DI NETFLIX</h1>
  <div class="movie-container">
      <AppFilm v-for="(item, index) in store.movieList" :key="index" :movie="item"></AppFilm>
  </div>
  <h1>LE SERIE TV DI NETFLIX</h1>
  <div class="movie-container">
      <AppSeries v-for="(item, index) in store.serieList" :key="index" :cardSerie="item"></AppSeries>
  
  </div>

</div>

</template>
<style lang="scss">

.container-content{
  background-color: white;
  width: 100%;

  h1{
    color: black;
    margin-left: 1rem;

  }

  .movie-container{
    width: 100%;
    display: flex;
    justify-content:space-between;
    height: 100%;
    overflow-x: scroll;
    
  }
  ::-webkit-scrollbar{
  width:0.8em;
  height:0.8em;
  background: white;
  margin-right: 10px;
}
::-webkit-scrollbar-thumb{
  background-color:gray ;
  border: 1px solid black;
}
  
}
</style>