const express = require('express')
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Order = require('./models/order');

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// mongoose.connect('mongodb://localhost:27017/foodServiceApp', { useNewUrlParser: true})
//     .then(()=> {
//         console.log('connection open')
//     })
//     .catch(err => {
//         console.log('error')
//     })

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/show', (req, res) => {
    res.render('orders/show')
});

app.get('/order', catchAsync(async (req, res) => {
    const order = await Order.find({});
    res.render('orders/order', { order })
}));

// app.get('/order', async (req, res) => {
//         const order = await Order.find({});
//         console.log(order)
//         res.render('orders/order', { order })
//     });

app.get('/login', (req, res) => {
    res.render('users/login')
});

app.get('/register', (req, res) => {
    res.render('users/register')
});

app.get('/logout', (req, res) => {
    res.redirect('/')
});

app.listen(3000, () => {
    console.log('Serving on port 3000')
})