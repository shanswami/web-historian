var path = require('path');
var archive = require('../helpers/archive-helpers');
var responder = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if( req.method === 'GET' ){
    if( req.url === '/' ){
      res.writeHead(200, responder.headers);
      res.end('<input>'+archive.paths.list);
    }else {
      archive.isUrlInList(req.url.slice(3, -1), function() {
      res.writeHead(200, responder.headers);
      res.end('<input text = "google">'+archive.paths.list);
      })
    }
  }else if( req.method === 'POST' ) {
    res.writeHead(302, responder.headers);
    archive.addUrlToList('www.example.com');
    res.end('fdsa')
  }

};
