var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(res, req, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.originalUrl);
  }
});
// app.use(function(res, req, next){
//   if (req.headers['x-forwarded-proto'] === 'http'){
//     next();
//   }else {
//     res.redirect('http://' + req.hostname + req.url);
//   }
// });

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port' + PORT);
});
