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
var Pagination = {
  props: {
    page: {
      type: Number,
      "default": 1,
      required: true
    },
    total: {
      type: Number,
      "default": 0,
      required: true
    }
  },
  methods: {
    goToPage: function goToPage(new_page) {
      this.$emit('goToPage', new_page);
    }
  },
  template: '#pagination'
};
var App = {
  data: function data() {
    return {
      API_KEY: '294b52ec',
      search: 'Batman',
      year: '',
      movieList: [],
      movieInfo: {},
      movieType: 'movie',
      showModal: false,
      favorites: [],
      showFavoritesList: false,
      searchResult: false,
      totalPages: 0,
      darkThemeToggle: false,
      page: 1,
      perPage: 10
    };
  },
  components: {
    movieItem: movieItem,
    Pagination: Pagination
  },
  created: function created() {
    this.favorites = JSON.parse(localStorage.getItem('favorite_films'));
  },
  mounted: function mounted() {
    this.checkToggleTheme();
    new WOW().init();
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
      } else {
        this.showPopup('Enter movie title');
      }
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
        this.showPopup("Added to favorites.");
      } else {
        this.favorites.splice(index2, 1);
        this.showPopup("Removed from favorites.");
      }

      localStorage.setItem('favorite_films', JSON.stringify(this.favorites));
    },
    movieListWithFavorite: function movieListWithFavorite() {
      var _this3 = this;

      var arr = [];
      this.movieList.forEach(function (element) {
        var findFav = _this3.favorites.find(function (item) {
          if (favorites != null) {
            return element.imdbID === item.imdbID;
          }
        });

        element.inFav = findFav !== undefined ? true : false;
        arr.push(element);
      });
      console.log(arr);
      return arr;
    },
    toggleTheme: function toggleTheme() {
      var _this4 = this;

      var inputStatus = document.getElementById('theme_toggle');
      inputStatus.addEventListener('change', function (e) {
        if (e.target.checked) {
          document.getElementById('theme_css').href = 'assets/css/dark.min.css'; // localStorage.setItem('theme', 'dark')

          document.cookie = 'dark';
          _this4.darkThemeToggle = true;
        } else {
          document.getElementById('theme_css').href = 'assets/css/style.min.css'; // localStorage.setItem('theme', 'light')

          document.cookie = 'light';
          _this4.darkThemeToggle = false;
        }
      });
    },
    checkToggleTheme: function checkToggleTheme() {
      // можна через сторедж теж
      // const themeStatus = localStorage.getItem('theme');
      var themeStatus = document.cookie;
      var inputStatus = document.getElementById('theme_toggle');

      if (themeStatus === 'dark') {
        document.getElementById('theme_css').href = 'assets/css/dark.min.css';
        inputStatus.checked = true;
      } else {
        document.getElementById('theme_css').href = 'assets/css/style.min.css';
        inputStatus.checked = false;
      }
    },
    goToPage: function goToPage(new_page) {
      this.page = new_page;
      this.searchMovies();
    },
    styleProgressBar: function styleProgressBar(index) {
      var width = parseFloat(this.movieInfo.Ratings[index].Value) * 10 + '%';
      return width;
    },
    showPopup: function showPopup(text) {
      var popup = document.getElementById('pop_up');
      var html = '';
      html += "\n            <div class=\"modal_overlay\">\n                <div class=\"my_modal animate__animated animate__rotateIn text-center\">\n                <h5><b>".concat(text, "</b><h5>\n                </div>\n            </div>\n            ");
      popup.insertAdjacentHTML("afterbegin", html);
      setTimeout(function () {
        var el = document.querySelector(".modal_overlay");
        el.classList.add("display_none");
      }, 1500);
    }
  }
};
Vue.createApp(App).mount('#app');