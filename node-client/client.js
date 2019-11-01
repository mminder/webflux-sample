const http = require('http');

const TOTAL_REQUESTS = 20;
const TIME_INTERVAL_MS = 10000;

// running TOTAL_REQUESTS randomly in a time interval of TIME_INTERVAL_MS
for (let i = 0; i < TOTAL_REQUESTS; i++) {
    setTimeout(() => {
        httpGET('http://localhost:8080/api/external-system/local');
    }, Math.floor(Math.random() * TIME_INTERVAL_MS));
}

function httpGET(url) {
    console.log('executing GET request');

    http
        .get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                console.log(`done: ${data}`);
            });
        })
        .on("error", (err) => {
            console.log("Error: " + err.message);
        });
}
