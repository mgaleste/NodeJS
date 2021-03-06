const Product = require('../models/product');


exports.getAddProduct = (req, res, next)=> {
    res.render('admin/edit-product',{
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        activeAddProduct: true,
        editing: false
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
    const product = new Product(title, price, description, imageUrl, null, req.user._id);
    product
    .save()
    .then(result=>{
        console.log('Created a Product');
        res.redirect('/admin/products');
    })
    .catch(err=>{
        console.log(err);
    });
    
};

exports.getEditProduct = (req, res, next)=> {
    const editMode = req.query.edit;
    if(!editMode){
        res.redirect('/');
    }
    const prodId =req.params.productId;
    Product.findById(prodId)
    .then(product=>{
        if(!product){
            res.redirect('/');
        }
        res.render('admin/edit-product',{
            pageTitle: 'Edit Product', 
            path: '/admin/edit-product', 
            editing: editMode,
            activeAddProduct: true,
            product: product
        });
    })
    .catch(err => console.log(err));
    
    
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    
    const product = new Product(updatedTitle, updatedPrice, updatedDescription, updatedImageUrl, prodId);
    product
    .save()
    .then(result => {
        console.log("Updated");
        res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
    //const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice);
    //updatedProduct.save();
    
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('admin/products',{
                prods: products, 
            pageTitle: 'Admin Products', 
            path: '/admin/products', 
            hasProducts: products.length > 0, 
            activeShop: true
            });
        })
        .catch(err => console.log(err));
    
};

exports.postDeleteProduct = (req, res, next) =>{
    const prodId = req.body.productId;
    Product.deleteById(prodId)
    .then(() => {
        console.log('destroy');
        res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
    //Product.deleteById(prodId);
    
};