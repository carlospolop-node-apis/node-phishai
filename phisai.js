const request = require('request');

var apiKey = "";

function checkDomain(domain){
    var promise = new Promise(function(resolve, reject) {
        json_data = {url: domain}
        var options = {
            method: "POST",
            url: 'https://app.phish.ai/api/url/scan',
            headers: [
                {
                name: 'Authorization',
                value: apiKey
            }],
            json: json_data
        };

        request(options, function(error, response, body){
            if (error) reject(Error("Error using PhisAI: "+error));
            resolve(body);
        });
    });
    return promise;
}

function checkId(id){
    var promise = new Promise(function(resolve, reject) {
        var options = {
            method: "GET",
            url: 'https://app.phish.ai/api/url/report?scan_id='+id,
            headers: [
                {
                name: 'Authorization',
                value: apiKey
            }],
        };

        request(options, function(error, response, body){
            if (error) reject(Error("Error using PhisAI: "+error));
            try {
                var job = JSON.parse(body);
                resolve(job);
            } catch (e) {
                reject(Error("Error using PhisAI: "+body));
            }
            
        });
    });
    return promise;
}


exports.setApiKey = function(key){ apiKey = key; }
exports.checkDomain = checkDomain;
exports.checkId = checkId;
