var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8000 });

var Pkg = require('../package.json');

server.route({
    method: 'GET',
    path: '/version',
    handler: function (request, reply) {
        reply({ "version": Pkg.version });
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});