var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

var campgrounds = [
  {name:"Salmon Creek", image: "https://farm5.staticflickr.com/4382/36020853483_b212856152.jpg"},
  {name:"Granite Hill", image: "https://farm4.staticflickr.com/3114/3571272604_0aa8b05f51.jpg"},
  {name:"Granite Hill", image: "https://farm9.staticflickr.com/8625/16822003745_3e09fa04ea.jpg"}
]

app.get('/', function(req,res){
  res.render('landing');
});

app.get('/campgrounds', function(req,res){
res.render('campgrounds', {campgrounds: campgrounds});

});

app.post('/campgrounds',function(req,res){
  //get data from form and add campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image}
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new' ,function(req,res){
res.render('new.ejs');
});


app.listen(3000, function(){
  console.log('listening on port 3000')
});
