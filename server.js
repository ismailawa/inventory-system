const express =  require('express');
const path = require('path');

const index = require('./routes/index');
const product = require('./routes/product');
const sales = require('./routes/sales');


const app = express();

const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/products', product);
app.use('/sales', sales);


app.get('*', (req,res) => {
    res.render('error', {"title": "Error page"});
});

app.listen(port, ()=> console.log(`Server running localhost:${port}`))