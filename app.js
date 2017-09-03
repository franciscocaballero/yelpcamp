var express = require('express');
var request = require('request');
var app = express();


app.set('view engine','ejs');

app.get('/', function(req,res){
  res.render('landing');
});

app.get('/campgrounds', function(req,res){

  var campgrounds = [
    { name: 'Salmon Creek', image: "https://unsplash.com/search/photos/camp-grounds?photo=dQn37qrUzDI"},
    { name: 'Granite Hill', image: "https://unsplash.com/search/photos/camp-grounds?photo=XvgtPNWCQcw"},
    { name: 'Moutain Goats rests', image: "https://unsplash.com/search/photos/camp-grounds?photo=2DH-qMX6M4E"}
  ]
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(3000, function(){
  console.log('listening on port 3000')
});
