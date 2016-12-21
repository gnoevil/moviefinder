moviesPlaying = {};
moviesPlaying.allMovies = [];

moviesGenres = {};
moviesGenres.allGenres = [];

function Movie(opts){
  this.poster_path = opts.poster_path;
  this.overview = opts.overview;
  this.release_date = opts.release_date;
  this.id = opts.id;
  this.title = opts.title;
  this.popularity = opts.popularity;
  this.vote_count = opts.vote_count;
  this.vote_average = opts.vote_average;
  this.genre_ids = opts.genre_ids[0];
  this.movieImage = 'https://image.tmdb.org/t/p/w500'+ opts.backdrop_path;
  this.path = '/movie/' + opts.title.replace(/\s+/g, '');
  this.contextTitle = opts.title.replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, '');

};

function Genre(opts){
  this.name = opts.name;
  this.id = opts.id;
};

Movie.fetchAll = function (callback){
  $.ajax({
    async: true,
    crossDomain: true,
    url:'/movieapi/movie/now_playing' ,
    method: 'GET',
    success: function(data, string, xhr){
      // console.log('/genre/movie/now_playing success', data);
      //console.log('/genre/movie/now_playing success', data);

      if (data){
        data.results.forEach(function(obj){
          moviesPlaying.allMovies.push(new Movie(obj));
        });
      }
      // console.log(moviesPlaying.allMovies);
      sortMoviesTopRating();
      //console.log(moviesPlaying.allMovies);
      appendMoviesList();
      appendMoviesSelection();
      movieListRender();
      showListRender();
      topMovieBanner();
      // callback();
    }
  });

  $.ajax({
    async: true,
    crossDomain: true,
    url: '/movieapi/genre/movie/list',
    method: 'GET',
    success: function(data, string, xhr){
      // console.log('/genre/movie/list success', data);
      //console.log('/genre/movie/list success', data);
      if ( data && data.genres){
        data.genres.forEach(function(obj){
          moviesGenres.allGenres.push(new Genre(obj));
        });
      }
      // callback();
    }
  });
};
