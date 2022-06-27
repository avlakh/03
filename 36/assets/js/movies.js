const movieItem = {
    props: ['movie'],
    methods: {
        getMovieInfo(id){
            this.$emit('getMovie', id)
        },
        addRemoveFavorites (id){
            // спосіб з перентом можливий, але так роблять джуни, бо хтось може змінити метод вище і все може зіпсуватись
            this.$emit('addRemove', id)
        }
    },
    template: '#movieItem'
};

const App = {
    data() {
        return {
            API_KEY: '294b52ec',
            search: 'Batman',
            selected: '///',
            movieList: [],
            movieInfo: {},
            showModal: false,
            favorites: [],
            showFavoritesList: false,
            searchResult: false
        }
    }, methods: {
        searchMovies(){
            if (this.search !== '') {
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`)
                    .then(response => {
                        this.movieList = response.data.Search
                        this.searchResult = true;
                        this.search = '';
                    })
                    .catch(err=>{
                        console.log(err);
                    });
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
        showFavorites() {
            this.showFavoritesList = true;
        },
        getFavorites(){
            const localStorage = localStorage.getItem('favorite_films').findIndex(el => el.imdbID);
            this.showFavorites();
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
    }, created() {
        // записати сюди масив зі стореджа і відобразити в фейворітсах
    }, components: {
        movieItem
    },
}

Vue.createApp(App).mount('#app')

