(function(module) {
  var movieListRenderObj = {};

  movieListRender = function() {
    for (var i = 5; i < 20; i++) {
      $('#movies-list ul').children().eq(i).hide();
    }
  };

  showListRender = function(event){
    $('#showFullList').on('click', function(){

      if( $('#showFullList').html() === 'show all top movies' ){
        $('#showFullList').html('hide all top movies');
        $('#movies-list ul').children().hide();
        $('#movies-list ul').children().show();
      }

      else{
        $('#showFullList').html('show all top movies');
        $('#movies-list ul').children().show();
        for (var i = 5; i < 20; i++) {
          $('#movies-list ul').children().eq(i).hide();
        }
      }

    });
  };

  module.movieListRenderObj = movieListRenderObj;
})(window);
