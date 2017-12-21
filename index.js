var express = require('express');

var app = express();


var http = require('http').Server(app);

var path = require('path');

//
//
// app.use(express.static( path.normalize(__dirname )+'/public/fretron-auth' ));
app.use(express.static( path.normalize(__dirname )+'/public' ));
//
//

app.get('/fretron-auth*', (req, res) => {
    console.log("serving index.html for auth")
res.sendFile(path.normalize(__dirname ) + '/public/fretron-auth/index.html');
});

app.get('/tracknet*', (req, res) => {
    console.log("serving index.html for tracknet ")
res.sendFile(path.normalize(__dirname) + '/public/tracknet/index.html');
});

app.get('/transporter*', (req, res) => {
    console.log("serving index.html for transporter")
res.sendFile(path.normalize(__dirname) + '/public/transporter/index.html');
});

app.get('/shipper*', (req, res) => {
    console.log("serving index.html for shipper")
res.sendFile(path.normalize(__dirname) + '/public/shipper/index.html');
});


http.listen(process.env.PORT || 5053, function () {
    console.log('Express server listening on port 5053 ' );
});