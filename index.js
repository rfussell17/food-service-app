const express = require('express')
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Order = require('./models/order');

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

console.log(Order.title)

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/show', (req, res) => {
    res.render('orders/show')
});

app.get('/order', (req, res) => {
    res.render('orders/order', { order })
});

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