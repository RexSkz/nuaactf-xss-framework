const http = require('http');
const url = require('url');

const port = 3001;

function start(route) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.'); // eslint-disable-line no-console
        route(pathname, request, response);
    }
    http.createServer(onRequest).listen(port);
    console.log('Listening at port ' + port + '.'); // eslint-disable-line no-console
}

exports.start = start;
