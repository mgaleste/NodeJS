const http = require('http');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const app = express();

//app.engine('hbs', expressHbs({layoutsDir: 'views/layout/', defaultLayout: 'main-layout', extname: 'hbs'}));
//app.set('view engine','hbs');
//app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

//app.use((req,res,next) => {
//    res.render('404',{pageTitle : 'Page Not Found'});
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));

//});
app.use(errorController.get404);
//const server = http.createServer(app);

app.listen(3000);