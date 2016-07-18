var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');
var sites = require('./sites.json');


var PORT = 8888;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));





app.get('/status', function(req, res, next) {
    var response = [];
    sites.sites.forEach(function(site) {
        portStatus(site.url, site.port, (stat) => {
            if (stat) {
                response.push({
                    name: site.name,
                    description: site.description,
                    status: 200
                });
            } else {
                response.push({
                    name: site.name,
                    description: site.description,
                    status: 400
                });
            }
            if (response.length == sites.sites.length) {
                res.json(response);
            }
        });

        // request(site.url, function(error, resp, body) {
        //     if (error) {
        //         response.push({
        //             name: site.name,
        //             description: site.description,
        //             status: 400
        //         });
        //     } else {
        //         response.push({
        //             name: site.name,
        //             description: site.description,
        //             status: resp.statusCode
        //         });
        //     }
        //
        //     if (response.length == sites.sites.length) {
        //         res.json(response);
        //     }
        // })
    });
});




app.use(function(err, req, res, next) {
    console.log('ERR', err);
    res.status(err.status || 500);
    res.send('Error ');
});

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT + '!');
});









var net = require('net');


function portStatus(host, port, cb) {
    var s = new net.Socket();

    s.setTimeout(2000, function() {
        s.destroy();
    });
    s.connect(port, host, function() {
        cb(true);
    });

    s.on('error', function(e) {
        cb(false);
        s.destroy();
    });
}
