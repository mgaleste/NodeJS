const products = []; 

exports.getAddProduct = (req, res, next)=> {
    res.render('add-product',{
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        activeAddProduct: true
    });
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct =  (req, res, next) => {
    products.push({title : req.body.title});
    //console.log(req.body);
    res.redirect('/');
};

exports.getProducts = (req, res, next)=> {
    //console.log('shop.js',adminData.products);
    //res.sendFile(path.join(rootDir,'views','shop.html'));
    //const products =  adminData.products;
    res.render('shop',{
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0, 
        activeShop: true
    });
};