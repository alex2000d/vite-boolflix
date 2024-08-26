import { reactive } from "vue";

export const store = reactive({
    apiurlMovie: "https://api.themoviedb.org/3/discover/movie",
    apiurlSerie: "https://api.themoviedb.org/3/discover/tv",
    apiKey: "0fe111ce8fba000d787deffde8430250",
});