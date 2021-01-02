const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
//const adminData = require('./admin');

const productsController = require('../controllers/products');


const router = express.Router();

//router.get('/', (req, res, next)=> {
    //console.log('shop.js',adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html'));
//    const products =  adminData.products;
//    res.render('shop',{prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true});
//});
router.get('/', productsController.getProducts);

module.exports = router;