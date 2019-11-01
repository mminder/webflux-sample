const
    http = require('http'),
    url = require('url');

let requestCounter = 1;

const app = http.createServer((request, response) => {
    let requestCount = requestCounter++;

    let path = url.parse(request.url, true);

    if (path.pathname !== '/200') {
        response.writeHead(404);
        response.end();
        return;
    }

    const query = path.query;
    const sleep = (query && query.sleep) ? query.sleep : 0;

    console.log(`request ${requestCount} with requested delay ${sleep}ms`);
    setTimeout(() => {
        console.log(`responding ${requestCount} with HTTP 200`);
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(`{"message":"I\'m OK"};`);
        response.end();
    }, sleep);


});

app.listen(3000);
