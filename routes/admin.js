const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const adminController = require('../controllers/admin');
//const { route } = require('./shop');

const router = express.Router();

//const products = []; 

//router.get('/add-product', (req, res, next)=> {
//    res.render('add-product',{pageTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
//});
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);
//router.post('/add-product', (req, res, next) => {
//    products.push({title : req.body.title});
    //console.log(req.body);
//    res.redirect('/');
//});
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
//exports.routes = router;
//exports.products = products;