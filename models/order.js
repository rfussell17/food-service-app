const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isStarted: {
    type: Boolean,
    required: true,
  },
  cookTime: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
//   employee: {
//     type: Schema.Types.ObjectId, 
//     ref: 'Employee' 
//   }
});

module.exports = mongoose.model("Order", orderSchema)
