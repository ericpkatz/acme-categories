var router = require('express').Router();
var DB = require('../db');
module.exports = router;

router.post('/', function(req, res, next){
  var category = req.body.name;
  DB.addCategory(category);
  res.redirect('/categories/' + category);
});

router.delete('/:category', function(req, res, next){
  var category = req.params.category;
  DB.deleteCategory(category);
  res.redirect('/');
});

router.get('/:category', function(req, res, next){
  var category = req.params.category;
  res.render('category', { title: category, selectedCategory: category, categories: DB.categories(), products: DB.category(category), category: category });
});

router.post('/:category/products', function(req, res, next){
  var category = req.params.category;
  DB.addProduct(category, req.body);
  res.redirect('/categories/' + category);
});

router.delete('/:category/products/:idx', function(req, res, next){
  var category = req.params.category;
  DB.deleteProduct(category, req.params.idx);
  res.redirect('/categories/' + category);
});
