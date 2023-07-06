const https = require('https');
 
var options = {
  "method": "GET",
  "hostname": "rest.coinapi.io",
  "path": "/v1/exchangerate/BTC?invert=false",
  "headers": {'X-CoinAPI-Key': " 0B34D14D-4227-4B17-BA68-7D470702B186"}
};
 
var request = https.request(options, function (response) {
  var chunks = [];
  response.on("data", function (chunk) {
    chunks.push(chunk);
  });
});
 
request.end();