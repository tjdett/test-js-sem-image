var express = require('express'),
    fs      = require('fs');

var app = express.createServer();

app.use(app.router);
app.use(express.logger());
app.use(express.static('./html'));

app.get('/base64/:filename', function (req, res) {
    fs.readFile('./img/'+req.params.filename, function (err, data) {
        res.send(new Buffer(data).toString('base64'));
    });
});

app.listen(3000);
