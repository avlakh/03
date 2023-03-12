const movieItem = {
	props: ['movie'],
	methods: {
		getMovieInfo(id) {
			this.$emit('getMovie', id);
		},
		addRemoveFavorites(id) {
			this.$emit('addRemove', id);
		},
	},
	template: '#movieItem',
};

const Pagination = {
	props: {
		page: {
			type: Number,
			default: 1,
			required: true,
		},
		total: {
			type: Number,
			default: 0,
			required: true,
		},
	},
	computed: {
		isDisabledFirst() {
			return this.page === 1;
		},
		isDisabledLast() {
			return this.page === this.total;
		},
		showFirst() {
			return this.page > 4 && this.total > 6;
		},
		showLast() {
			return this.page < this.total - 3 && this.total > 6;
		},
		pageRange() {
			let from = this.page - 2;
			let to = this.page + 2;

			if (this.page < 5) {
				from = 1;
				to = 5;
			}

			if (this.page > this.total - 4) {
				from = this.total - 4;
				to = this.total;
			}

			if (from < 1) {
				from = 1;
			}

			if (to > this.total) {
				to = total;
			}

			if (this.total === 6) {
				from = 1;
			}

			return Array(to - from + 1)
				.fill()
				.map((_, idx) => from + idx);
		},
	},
	methods: {
		goToPage(new_page) {
			this.$emit('goToPage', new_page);
		},
	},
	template: '#pagination',
};

const App = {
	data() {
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
			page: 1,
			perPage: 10,
		};
	},
	components: {
		movieItem,
		Pagination,
	},
	created() {
		this.favorites =
			JSON.parse(localStorage.getItem('favorite_films')) || [];
	},
	mounted() {
		this.checkToggleTheme();
		new WOW().init();
	},
	methods: {
		searchMovies() {
			if (this.search !== '') {
				this.selectCategory();
				axios
					.get(
						`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.movieType}&y=${this.year}&page=${this.page}`
					)
					.then((response) => {
						this.movieList = response.data.Search;
						this.searchResult = true;
						this.showFavoritesList = false;
						this.totalPages = Math.ceil(
							response.data.totalResults / 10
						);
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				this.showPopup('Enter movie title');
			}
		},
		selectCategory(event) {
			if (event === 'movie') {
				movieType = 'movie';
			} else {
				movieType = 'series';
			}
		},
		showMovieInfo() {
			this.showModal = true;
		},
		getMovieInfo(id) {
			axios
				.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
				.then((response) => {
					this.movieInfo = response.data;
					this.showMovieInfo();
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getFavorites() {
			this.showFavoritesList = true;
			this.favorites = JSON.parse(localStorage.getItem('favorite_films'));
			this.searchResult = false;
		},
		addRemoveFavorites(id) {
			const index = this.movieList.findIndex((el) => el.imdbID === id);
			const index2 = this.favorites.findIndex((el) => el.imdbID === id);
			if (index2 === -1) {
				let item = this.movieList[index];
				item.inFav = true;
				this.favorites.push(item);
				this.showPopup('Added to favorites.');
			} else {
				this.favorites.splice(index2, 1);
				this.showPopup('Removed from favorites.');
			}
			localStorage.setItem(
				'favorite_films',
				JSON.stringify(this.favorites)
			);
		},
		movieListWithFavorite() {
			let arr = [];
			this.movieList.forEach((element) => {
				let findFav = this.favorites.find((item) => {
					return element.imdbID === item.imdbID;
				});
				element.inFav = findFav !== undefined ? true : false;
				arr.push(element);
			});
			console.log(arr);
			return arr;
		},
		toggleTheme() {
			const inputStatus = document.getElementById('theme_toggle');
			inputStatus.addEventListener('change', (e) => {
				if (e.target.checked) {
					document.getElementById('theme_css').href =
						'assets/css/dark.min.css';
					// localStorage.setItem('theme', 'dark')
					document.cookie = 'dark';
				} else {
					document.getElementById('theme_css').href =
						'assets/css/style.min.css';
					// localStorage.setItem('theme', 'light')
					document.cookie = 'light';
				}
			});
		},
		checkToggleTheme() {
			// можна через сторедж теж
			// const themeStatus = localStorage.getItem('theme');
			const themeStatus = document.cookie;
			let inputStatus = document.getElementById('theme_toggle');
			if (themeStatus === 'dark') {
				document.getElementById('theme_css').href =
					'assets/css/dark.min.css';
				inputStatus.checked = true;
			} else {
				document.getElementById('theme_css').href =
					'assets/css/style.min.css';
				inputStatus.checked = false;
			}
		},
		goToPage(new_page) {
			this.page = new_page;
			this.searchMovies();
		},
		styleProgressBar(index) {
			const width =
				parseFloat(this.movieInfo.Ratings[index].Value) * 10 + '%';
			return width;
		},
		showPopup(text) {
			const popup = document.getElementById('pop_up');
			let html = '';
			html += `
            <div class="modal_overlay">
                <div class="my_modal animate__animated animate__tada text-center">
                <h5><b>${text}</b><h5>
                </div>
            </div>
            `;
			popup.insertAdjacentHTML('afterbegin', html);
			setTimeout(() => {
				let el = document.querySelector('.modal_overlay');
				el.classList.add('display_none');
			}, 1500);
		},
	},
};

Vue.createApp(App).mount('#app');
