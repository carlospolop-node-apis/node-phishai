# Node PhisAI

Use Node to check for phising domains in [PhishAI](https://www.phish.ai)

## Install
`npm install phishai`

## How to use

```javascript
const phisai = require('phishai');

phisai.setApiKey = "<YOUR API KEY>"

// Use checkDomain(<domain>) to check that domain against PhisAI
// A promise will be returned
var domain = "https://example.com"
phisai.checkDomain(domain).then(function(result){ 
    console.log(result);
}, function(err) {
    console.log(err);
});

/*
Output example
{ scan_id: 'U2sG4AkxdHMlrIcT5O8L' }
*/

// Use checkId(<id>) to get the report of the Id
// A promise will be returned
id = "wP7T0DRanBVZCEB4fI3j"
checkId(id).then(function(result){ 
    console.log(result);
}, function(err) {
    console.log(err);
});

/*
Output example
{ url: 'https://example.com',
  status: 'in progress',
  time: '2018-04-21T09:40:53.199Z' }

{"url":"https://example.com",
"status":"completed",
"target":"unknown",
"iso_code":"US",
"title":"example_domain",
"user_agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/67.0.3372.0 Safari/537.36",
"user_email":"api",
"ip_address":"93.184.216.34",
"verdict":"clean",
"domain":"example.com",
"time":"2018-04-12T11:07:36.789Z",
"tld":"com"}
*/
```
