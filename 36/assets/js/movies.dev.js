"use strict";

var movieItem = {
  props: ['movie'],
  methods: {
    getMovieInfo: function getMovieInfo(id) {
      this.$emit('getMovie', id);
    },
    addRemoveFavorites: function addRemoveFavorites(id) {
      this.$emit('addRemove', id);
    }
  },
  template: '#movieItem'
};
var App = {
  data: function data() {
    return {
      API_KEY: '294b52ec',
      search: '',
      year: '',
      movieList: [],
      movieInfo: {},
      movieType: 'movie',
      showModal: false,
      favorites: [],
      showFavoritesList: false,
      searchResult: false,
      totalPages: 0,
      page: 1,
      perPage: 10
    };
  },
  components: {
    movieItem: movieItem
  },
  created: function created() {
    this.favorites = JSON.parse(localStorage.getItem('favorite_films'));
  },
  methods: {
    searchMovies: function searchMovies() {
      var _this = this;

      if (this.search !== '') {
        this.selectCategory();
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&type=").concat(this.movieType, "&y=").concat(this.year, "&page=").concat(this.page)).then(function (response) {
          _this.movieList = response.data.Search;
          _this.searchResult = true;
          _this.showFavoritesList = false;
          _this.totalPages = Math.ceil(response.data.totalResults / 10);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    goToPage: function goToPage(pageNum) {
      this.page = pageNum;
      this.searchMovies();
    },
    selectCategory: function selectCategory(event) {
      if (event === 'movie') {
        movieType = 'movie';
      } else {
        movieType = 'series';
      }
    },
    showMovieInfo: function showMovieInfo() {
      this.showModal = true;
    },
    getMovieInfo: function getMovieInfo(id) {
      var _this2 = this;

      axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&i=").concat(id)).then(function (response) {
        _this2.movieInfo = response.data;

        _this2.showMovieInfo();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getFavorites: function getFavorites() {
      this.showFavoritesList = true;
      this.favorites = JSON.parse(localStorage.getItem('favorite_films'));
      this.searchResult = false;
    },
    addRemoveFavorites: function addRemoveFavorites(id) {
      var index = this.movieList.findIndex(function (el) {
        return el.imdbID === id;
      });
      var index2 = this.favorites.findIndex(function (el) {
        return el.imdbID === id;
      });

      if (index2 === -1) {
        var item = this.movieList[index];
        item.inFav = true;
        this.favorites.push(item);
      } else {
        this.favorites.splice(index2, 1);
      }

      localStorage.setItem('favorite_films', JSON.stringify(this.favorites));
    },
    movieListWithFavorite: function movieListWithFavorite() {
      var _this3 = this;

      var arr = [];
      this.movieList.forEach(function (element) {
        var findFav = _this3.favorites.find(function (item) {
          return element.imdbID === item.imdbID;
        });

        element.inFav = findFav !== undefined ? true : false;
        arr.push(element);
      });
      return arr;
    },
    toggleTheme: function toggleTheme() {
      var inputStatus = document.getElementById('theme_toggle');
      inputStatus.addEventListener('change', function (e) {
        if (e.target.checked) {
          document.getElementById('theme_css').href = 'assets/css/dark.min.css';
          localStorage.setItem('theme', 'dark');
        } else {
          document.getElementById('theme_css').href = 'assets/css/style.min.css';
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }
};
Vue.createApp(App).mount('#app');