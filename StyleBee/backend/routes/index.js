var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');
const Items = require('../models/items');


router.get('/', function(req, res, next) {
  if(req.user) {
    let search = req.query.search;
    let filter = req.query.filter;
    let category = ["", "Male","Female","Unisex", "Boy", "Girl"]
    var perPage = 6
    var page = req.query.page || 1
    let query = {}
    query.is_deleted = false
    if(search) {
        query = {"title": {"$regex": search, "$options": "i"}}
      }
    if(filter) {
        query.gender = {"$regex": '^'+filter+'$', "$options": "i"}
    }
    Items.countDocuments(query).exec(function(err, count) {
      Items.find(query, function(err, items){
        console.log(items)
        res.render('index', { user: req.user, items: items, category: category, current: page,
          pages: Math.ceil(count / perPage) });
      }).skip((perPage * page) - perPage)
      .limit(perPage);
    })

  } else {
    res.render('login', { user : req.user });
  }
});

//Account management starts
router.get('/register', function(req, res) {
  res.render('register', { user : req.user, error : {}});
});

router.post('/register', function(req, res) {
Account.register(new Account({ username : req.body.username, type: "user" }), req.body.password, function(err, account) {
    if (err) {
        return res.render('register', { account : account, error: err});
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

// Account management ends

module.exports = router;
