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
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products)=> {
        res.render('admin/products',{
            prods: products, 
            pageTitle: 'Admin Products', 
            path: '/admin/products', 
            hasProducts: products.length > 0, 
            activeShop: true
        });
    });
};