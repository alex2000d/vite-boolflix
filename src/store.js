import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    apiurlMovie: "https://api.themoviedb.org/3/search/movie",
    apiurlSerie: "https://api.themoviedb.org/3/search/tv",
    apiKey: "0fe111ce8fba000d787deffde8430250",

    async searchMovies(moviename) {
        try {
            const response = await axios.get(`${this.apiurlMovie}?api_key=${this.apiKey}&query=${moviename}`);
            return response.data.results
        }
        catch (error) {
            console.error("errore nella ricerca del film", error)
        }
    },

    async searchSeries(seriesname) {
        try {
            const response = await axios.get(`${this.apiurlSerie}?api_key=${this.apiKey}&query=${seriesname}`);
            return response.data.results
        }
        catch (error) {
            console.error("errore nella ricerca della serie", error)
        }
    },
})

