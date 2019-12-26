var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

var monk = require('monk');
var db = monk('localhost:27017/vidzy');

//user signup, login, logout

//homepage
router.get('/', function (req, res) {
//  res.render('index', { user : req.user });
    var collection = db.get('videos');
    collection.find({}, function(err, videos){
        if (err) throw err;
        let querysearch = req.query.search;
        let selectedGenre = req.query.selectedGenre;

        videoArray = []
        //res.json(videos);
        let genre = new Set();
        for( var i = 0; i < videos.length; i++){ 
            genre.add(videos[i].genre)
        }
        let genreArray = Array.from(genre);
        genreArray.unshift("")
        if (querysearch) {
            console.log('has search')
            for( var i = 0; i < videos.length; i++){ 
                if(videos[i].title.toLowerCase().search(querysearch.toLowerCase()) >= 0){
                    videoArray.push(videos[i])
                }
             }
        } else {
            console.log('does not have search')
            videoArray = videos
        }

        if (selectedGenre) {
            var videoArraynew = []
            for( var i = 0; i < videoArray.length; i++){ 
                if(videoArray[i].genre === selectedGenre){
                    videoArraynew.push(videoArray[i])
                }
             }
             videoArray = videoArraynew;
        }

        res.render('index', { videos: videoArray, user: req.user, search: querysearch, genre: genreArray});
    });
});

router.get('/register', function(req, res) {
      res.render('register', { });
});

//create new user
router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username, type: "user" }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
      res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/');
});

router.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
});



//router.get('/', function(req, res) {
//	res.redirect('/videos');
//});


router.get('/videos', function(req, res) {
    var collection = db.get('videos');
    collection.find({}, function(err, videos){
        if (err) throw err;
      	//res.json(videos);
      	res.render('index', { videos: videos });
    });
});

//new video
router.get('/videos/new', function(req, res) {
	res.render('new');
});

router.get('/videos/:id', function(req, res) {
    var collection = db.get('videos');
    collection.findOne({ _id: req.params.id}, function(err, video){
        if (err) throw err;
      	//res.json(video);
      	res.render('show', { video: video, user: req.user })
    });
});

//insert route
router.post('/videos', function(req, res){
    var collection = db.get('videos');
    collection.insert({
        title: req.body.title,
        genre: req.body.genre,
        image: req.body.image,
        description: req.body.description
    }, function(err, video){
        if (err) throw err;

        res.redirect('/');
    });
});

//edit route
router.get('/videos/:id/edit', function(req, res) {
    var collection = db.get('videos');
    collection.findOne({ _id: req.params.id}, function(err, video){
        if (err) throw err;
      	//res.json(video);
      	res.render('edit', { video: video })
    });
});

//update route initially post
router.put('/videos/:id', function(req, res){
    var collection = db.get('videos');
    collection.findOneAndUpdate({ _id: req.params.id }, 
    					   { $set: 
    					   		{ title: req.body.title,
    					   		  genre: req.body.genre,
    					   		  image: req.body.image,
   					   		  description: req.body.description,	
    					   		} 
    					   }).then((updatedDoc) => {})
    res.redirect('/')
});

//delete route initially router.get('/videos/:id/delete'
router.delete('/videos/:id', function(req, res){
    var collection = db.get('videos');
    collection.remove({ _id: req.params.id }, function(err, video){
        if (err) throw err;
        res.redirect('/')
        //res.json(video);
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
