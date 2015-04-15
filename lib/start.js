var Hoek = require('hoek');
var Index = require('./index');

Index.init(8000, function (err, server) {

    Hoek.assert(!err, err);
    console.log('Server started at: ' + server.info.uri);
});