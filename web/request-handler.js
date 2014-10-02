var path = require('path');
var archive = require('../helpers/archive-helpers');
var responder = require('./http-helpers');
// require more modules/folders here!

var sendResponse = function(res, data, statCode){
  res.writeHead(statCode, responder.headers);
  res.end(data);
};

var actions = {
  'GET': function (res, req) {
    if( req.url === '/' ){
      sendResponse(res, '<input>'+archive.paths.list, 200);
    }else {
      archive.isUrlInList( req.url.slice(1), function(res, boolean) {
        sendResponse(res, '<input text = "'+ 'google' +'">', boolean?200:404);
      }, res );
    }
  },
  'POST': function( res, req ){
    archive.addUrlToList(req._postData.url);
    sendResponse(res, null, 302);
  }
};

exports.handleRequest = function (req, res) {
  actions[req.method](res, req);
};
