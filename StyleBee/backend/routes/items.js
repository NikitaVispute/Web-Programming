var express = require('express');
var router = express.Router();
const Items = require('../models/items');
const Cart = require('../models/cart');
let category = ["", "Male","Female","Unisex", "Boy", "Girl"]
const fs = require('fs');
var path=require("path");

router.get('/new', function(req, res, next) {
    res.render('newItem', {user: req.user, category: category});
  });

router.get('/edit/:id', function(req, res, next) {
    Items.findOne({_id: req.params.id}, function(err, item) {
      console.log(req.params.id)
      console.log(item)
      res.render('edit', {user: req.user, category: category, item: item });
    })
  });

  router.get('/test', function(req, res, next) {
    var srcPath=path.resolve('/Users/anishhegde/Downloads/anish.JPG');
    fs.copyFileSync(srcPath, '../public/images/anish.JPG');
  })
  
  router.get('/:id', function(req, res, next) {
    Cart.findOne({user_id: req.user._id, item_id:req.params.id, is_deleted:false}, function(err, cartInfo){
      let cartObj = {quantity:0}
      if(cartInfo) {
        cartObj = cartInfo
      }
      Items.findOne({_id : req.params.id, is_deleted:false}, function(err, item){
        res.render('details', { user: req.user, item: item, category: category, cart: cartObj });
      });
    })

  });
  
  router.get('/', function(req, res) {
    Items.find({is_deleted:false}, function(err, items){
      res.json(items)
    });
  });
  
  router.post('/', function(req, res) {
    console.log(req.body)
    let item = new Items(
      {
          image: req.body.image,
          title: req.body.title,
          description: req.body.description,
          is_deleted: false,
          age_group: req.body.age_group,
          gender: req.body.gender,
          price : {
            value: req.body.price_value,
            currency: req.body.price_currency,
            discount: req.body.price_discount,
            campaign: req.body.price_campaign
          },
          details: {
            sizes: req.body.details_sizes.split(','),
            size_type: req.body.details_size_type,
            color: req.body.details_color,
            style: req.body.details_style,
            care_instructions: req.body.details_care_instructions,
            composition: req.body.details_composition.split(','),
            type: req.body.details_type.split(','),
          }
      }
  );
    item.save(function (err) {
        if (err) {
            console.log('Could not create')
        }
        res.redirect('/');
    })
  });


  router.put('/:id', function(req, res) {
    console.log(req.body)
    let query = 
      {
          image: req.body.image,
          title: req.body.title,
          description: req.body.description,
          is_deleted: false,
          age_group: req.body.age_group,
          gender: req.body.gender,
          price : {
            value: req.body.price_value,
            currency: req.body.price_currency,
            discount: req.body.price_discount,
            campaign: req.body.price_campaign
          },
          details: {
            sizes: req.body.details_size.split(','),
            size_type: req.body.details_size_type,
            color: req.body.details_color,
            style: req.body.details_style,
            care_instructions: req.body.details_care_instructions,
            composition: req.body.details_composition.split(','),
            type: req.body.details_type.split(','),
          }
      }

      Items.update({_id: req.params.id}, query, function(err, data){
        res.redirect('/');
      })

  });

  router.delete('/:id', function(req, res){
    Items.update({ _id: req.params.id }, {is_deleted: true}, function(err, item){
        if (err) throw err;
        res.redirect('/')
    });
  });
  
  module.exports = router;
