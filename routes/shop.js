const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
//const adminData = require('./admin');

const shopController = require('../controllers/shop');
const { route } = require('./admin');


const router = express.Router();

//router.get('/', (req, res, next)=> {
    //console.log('shop.js',adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html'));
//    const products =  adminData.products;
//    res.render('shop',{prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true});
//});
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart);

router.post('/cart-delete-item',shopController.postCartDeleteProduct);

router.post('/create-order',shopController.postOrder);

router.get('/orders', shopController.getOrders);

// router.get('/checkout',shopController.getCheckout);

module.exports = router;