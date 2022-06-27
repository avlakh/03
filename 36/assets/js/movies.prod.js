"use strict";var movieItem={props:["movie"],methods:{getMovieInfo:function(t){this.$emit("getMovie",t)},addRemoveFavorites:function(t){this.$emit("addRemove",t)}},template:"#movieItem"},App={data:function(){return{API_KEY:"294b52ec",search:"",movieList:[],movieInfo:{},movieType:"movie",showModal:!1,favorites:[],showFavoritesList:!1,searchResult:!1}},components:{movieItem:movieItem},methods:{searchMovies:function(){var i=this;""!==this.search&&(this.selectCategory(),axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY,"&s=").concat(this.search,"&type=").concat(this.movieType)).then(function(t){i.movieList=t.data.Search,i.searchResult=!0,i.showFavoritesList=!1}).catch(function(t){console.log(t)}))},selectCategory:function(t){movieType="movie"===t?"movie":"series"},showMovieInfo:function(){this.showModal=!0},getMovieInfo:function(t){var i=this;axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY,"&i=").concat(t)).then(function(t){i.movieInfo=t.data,i.showMovieInfo()}).catch(function(t){console.log(t)})},getFavorites:function(){this.showFavoritesList=!0,this.favorites=JSON.parse(localStorage.getItem("favorite_films")),this.searchResult=!1},addRemoveFavorites:function(i){var t,e=this.movieList.findIndex(function(t){return t.imdbID===i}),o=this.favorites.findIndex(function(t){return t.imdbID===i});-1===o?((t=this.movieList[e]).inFav=!0,this.favorites.push(t)):this.favorites.splice(o,1),localStorage.setItem("favorite_films",JSON.stringify(this.favorites))},movieListWithFavorite:function(){var e=this,o=[];return this.movieList.forEach(function(i){var t=e.favorites.find(function(t){return i.imdbID===t.imdbID});i.inFav=void 0!==t,o.push(i)}),o}}};Vue.createApp(App).mount("#app");