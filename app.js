const http = require('http');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const errorController = require('./controllers/error');

const mongoDBConnect = require('./util/database').mongoDBConnect;

const User = require('./models/user');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => {
    User.findById('606331a22c9796660830a213')
    .then(user=> {
        req.user = new User(user.name, user.email, user.cart, user._id);
        next();
    })
    .catch(err => console.log(err));
    
});

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

mongoDBConnect(()=>{
    
    app.listen(3000);
})