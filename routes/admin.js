const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const productsController = require('../controllers/products');

const router = express.Router();

//const products = []; 

//router.get('/add-product', (req, res, next)=> {
//    res.render('add-product',{pageTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
//});
router.get('/add-product', productsController.getAddProduct);

//router.post('/add-product', (req, res, next) => {
//    products.push({title : req.body.title});
    //console.log(req.body);
//    res.redirect('/');
//});
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
//exports.routes = router;
//exports.products = products;