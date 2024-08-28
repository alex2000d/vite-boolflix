<script>
import { store } from '../store'
import AppSearchbar from './AppSearchbar.vue';
import axios from 'axios'
export default {
  components: {
    AppSearchbar,
  },
  data(){
    return{
        store
    }
  },
  methods:{
    searchFilm(input){
        let apiCall = store.api_url + input;

        axios.get(apiCall).then((response) => {
            store.movieList = response.data.results
        })
    },
    searchSerie(input){
      let Serie = store.apiSerie + input;

      axios.get(Serie).then((response)=>{
        store.serieList = response.data.results
      })
    },

    ricercaTutto(input){
      this.searchFilm(input);
      this.searchSerie(input);
    }
  }
}
</script>
<template lang="">
<header>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png" alt="">
    <AppSearchbar @buttonClick="ricercaTutto"></AppSearchbar>
</header>
</template>
<style lang="scss" scoped>
header{
    height: 75px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items:center ;
    padding: 1rem;
    border-bottom: 4px solid #C63531;

    img{
        width: 150px;
    }
}

</style>