const express = require('express')
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/show', (req, res) => {
    res.render('orders/show')
});

app.get('/order', (req, res) => {
    res.render('orders/order')
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