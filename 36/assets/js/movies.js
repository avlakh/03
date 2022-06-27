const movieItem = {
    props: ['movie'],
    methods: {
        getMovieInfo(id){
            this.$emit('getMovie', id)
        },
        addRemoveFavorites (id){
            this.$emit('addRemove', id)
        }
    },
    template: '#movieItem'
};

const App = {
    data() {
        return {
            API_KEY: '294b52ec',
            search: '',
            movieList: [],
            movieInfo: {},
            movieType: 'movie',
            showModal: false,
            favorites: [],
            showFavoritesList: false,
            searchResult: false
        }
    }, components: {
        movieItem
    }, methods: {
        searchMovies(){
            if (this.search !== '') {
                this.selectCategory()
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.movieType}`)
                    .then(response => {
                        this.movieList = response.data.Search
                        this.searchResult = true;
                        this.showFavoritesList = false;
                    })
                    .catch(err=>{
                        console.log(err);
                    });
            }
        },
        selectCategory(event){
            if (event === 'movie') {
                movieType = 'movie'
            } else {
                movieType = 'series'
            }
        },
        showMovieInfo(){
            this.showModal = true;
        },
        getMovieInfo(id){
            axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
                .then(response => {
                    this.movieInfo = response.data
                    this.showMovieInfo()
                })
                .catch(err=>{
                    console.log(err);
                });
        },
        getFavorites(){
            this.showFavoritesList = true;
            this.favorites = JSON.parse(localStorage.getItem('favorite_films'))
            this.searchResult = false;
        },
        addRemoveFavorites(id){
            const index = this.movieList.findIndex(el => el.imdbID === id);
            const index2 = this.favorites.findIndex(el => el.imdbID === id);
            if (index2 === -1 ) {
                let item = this.movieList[index]
                item.inFav = true;
                this.favorites.push(item)
            } else {
                this.favorites.splice(index2, 1);
            }
            localStorage.setItem('favorite_films', JSON.stringify(this.favorites))
        },
        movieListWithFavorite (){
            let arr = [];
            this.movieList.forEach(element => {
                let findFav = this.favorites.find(item => {
                    return element.imdbID === item.imdbID
                });
                element.inFav = findFav !== undefined ? true : false;
                arr.push(element)
            });
            return arr
        }
    }
}

Vue.createApp(App).mount('#app')

/*

Actors: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright"
Awards: "2 wins & 7 nominations"
BoxOffice: "$369,345,583"
Country: "United States"
DVD: "19 Apr 2022"
Director: "Matt Reeves"
Genre: "Action, Crime, Drama"
Language: "English, Spanish, Latin, Italian"
Metascore: "72"
Plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
Poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
Production: "N/A"
Rated: "PG-13"
Ratings: [{Source: "Internet Movie Database", Value: "7.9/10"}, {Source: "Rotten Tomatoes", Value: "85%"},…]
Released: "04 Mar 2022"
Response: "True"
Runtime: "176 min"
Title: "The Batman"
Type: "movie"
Website: "N/A"
Writer: "Matt Reeves, Peter Craig, Bill Finger"
Year: "2022"
imdbID: "tt1877830"
imdbRating: "7.9"
imdbVotes: "510,059"

*/