var path = require('path');
var archive = require('../helpers/archive-helpers');
var responder = require('./http-helpers');
// require more modules/folders here!

var actions = {
  'GET': function (res, statCode) {
    res.writeHead(statCode, archive.paths.list);
    res.end('<input text = "'+ 'google' +'">');
  }
}

exports.handleRequest = function (req, res) {

  if( req.method === 'GET' ){
    if( req.url === '/' ){
      console.log('home')
      res.writeHead(200, responder.headers);
      res.end('<input>'+archive.paths.list);
    }else {
      archive.isUrlInList( req.url.slice(1), actions.GET, res );
    }

  }else if( req.method === 'POST' ) {
    res.writeHead(302, responder.headers);
    archive.addUrlToList('www.example.com');
    res.end('fdsa')
  }

};
