var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello  world');
=======
 res.send('hello  world');
>>>>>>> 57481642722c89460f352fb861d28868d52faa2d
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
