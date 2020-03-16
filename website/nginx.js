var express = require('express');
var path = require('path');

var app = express();

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: 'index.html',
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
}
app.use(express.static('build', options))

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
  