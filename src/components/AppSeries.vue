<script>
import { store } from '../store';
export default {
    props:{
        cardSerie: Object,
    },
    data(){
        return{
           hover: false
        }
    },
    methods: {
                getLenguage(valore){
                    let leng = ''
                    if(valore.original_language){
                        switch(valore.original_language){
                            case 'en':
                                leng = 'gb'
                                break;
                                case 'ja':
                                leng= 'jp'
                                break;

                                default:
                                    leng = (valore.original_language)
                                    break;

                        }
                        let upperLeng = leng.toUpperCase()
                        return upperLeng
                      
                    }
                    
                },

                imageEmpty(){
                    if(this.cardSerie.poster_path != null){
                        return `https://image.tmdb.org/t/p/w342/${(this.cardSerie.poster_path)}`
                    }
                    else{
                        return "non presente "
                    }
                },
                stars(valore){
                    let num = Math.floor(valore.vote_average / 2);
                    let starsarray = []
                    for(let i = 0; i < num; i++){
                        starsarray.push('fa-solid fa star')
                    }

                    let starEmpty = 5 - num;
                    for(let i = 0; i < starEmpty; i++){
                        starsarray.push('fa regular fa-star')
                    }
                    return starsarray
                },
                descriptionCut(){
                    if(this.cardSerie.overview.length > 150){
                        this.cardSerie.overview = this.cardSerie.overview.substring(0, 150) + '...'
                        return this.cardSerie.overview
                    }
                    return this.cardSerie.overview
                }
            }
   
}
</script>
<template lang="">
<div class="card" @mouseenter=" hover = true" @mouseleave=" hover = false">
    <img class="img-cover" :src="imageEmpty()" alt="cardSerie.title">
    
        <div class="card-info" v-if="hover">
            
            <h3 class="titolo">{{cardSerie.name}}</h3>
            <p>{{ descriptionCut() }}</p>
            <h3>lingua {{cardSerie.original_language}}</h3> 
            <div class="container-voto">
                <i class="fa-solid fa-star stella-piena" v-for="(item, index) in Math.floor(cardSerie.vote_average / 2) "></i>
                <i class="fa-solid fa-star stella-piena" v-for="(item, index) in (5 - Math.floor(cardSerie.vote_average / 2)) "></i>
                <h3 class="voto">voto {{cardSerie.vote_average}}</h3> 
            </div>
           

        </div>
    </div>
</template>
<style lang="scss">

p{
    margin-bottom: 1rem;
}
</style>