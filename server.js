var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

var proxyMovieDb = function(request, response) {
  console.log('Routing MovieDb request for', request.params[0]);
  (requestProxy({
    url: 'https://api.themoviedb.org/3/' + '?api_key= ' + process.env.DATABASE_TOKEN
  }))(request, response);
};

app.get('/themoviedb/*', proxyMovieDb);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
