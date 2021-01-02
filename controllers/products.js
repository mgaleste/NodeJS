//const products = []; 
const Product = require('../models/product');

exports.getAddProduct = (req, res, next)=> {
    res.render('admin/add-product',{
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        activeAddProduct: true
    });
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct =  (req, res, next) => {
    //products.push({title : req.body.title});
    //console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next)=> {
    //console.log('shop.js',adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html'));
    //const products =  adminData.products;
    const products = Product.fetchAll((products)=> {
        res.render('shop/product-list',{
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            hasProducts: products.length > 0, 
            activeShop: true
        });
    });
    
};