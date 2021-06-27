const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
//   employee: {
//     type: Schema.Types.ObjectId, 
//     ref: 'Employee' 
//   }
});

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;
