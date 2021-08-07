const mongoose = require('mongoose');
const Order = require('./models/order');


mongoose
  .connect("mongodb://localhost:27017/order-pro", { useNewUrlParser: true })
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((err) => {
    console.log("mongo connection error");
    console.log(err);
  });


const seedDB = async () => {
    await Order.deleteMany({});
    const isStarted = false,
    const price = Math.floor(Math.random() * 20) + 10;
    const time = today.getHours() + ":" + today.getMinutes();
    const order = new Order({
        title: "Pizza",
        description: "Large vegetable pizza on cauliflower crust - peppers, onions, sun dried tomato, soy cheese",
        price,
        image: url('https://unsplash.com/photos/oBbTc1VoT-0'),
        isStarted,
        cookTime: 600,
        startTime: time,
        elapsedTime: null
    })
    await order.save();
}
seedDB().then(() => {
mongoose.connection.close();
})