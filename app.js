var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');


//schema SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model('Campground',campgroundSchema);

// Campground.create(
//   {
//     name:"Granite Hill",
//     image: "https://farm4.staticflickr.com/3114/3571272604_0aa8b05f51.jpg"
//
// }, function(err, campground){
// if(err){
//   console.log(err);
// }else {
//   console.log('Newly created campground: ');
//   console.log(campground);
// }
// });


app.get('/', function(req,res){
  res.render('landing');
});

app.get('/campgrounds', function(req,res){
// get all campgrounds from db
Campground.find({}, function(err, allCampgrounds){
  if(err){
    console.log(err);
  } else {
     res.render('campgrounds', {campgrounds:allCampgrounds});
  }
});

});

app.post('/campgrounds',function(req,res){
  //get data from form and add campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image}
  //create new campground and save to database
  Campground.create(newCampground,function(err, newlyCreated){
    if(err){
      console.log(err);
    }else {
      //redirect back to campgrounds page
      res.redirect('/campgrounds');
    }
  });

});

app.get('/campgrounds/new' ,function(req,res){
res.render('new.ejs');
});


app.listen(3000, function(){
  console.log('listening on port 3000')
});
