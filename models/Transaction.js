//Here we are going to create a model
// We need to create a schema for our model.

const mongoose = require('mongoose')
// Below is the object where we have our fields
const TransactionSchema = new mongoose.Schema({
  text:{
    type:String,
    trim: true,
    required: [true, 'Please add some text']  // Means it is required for our backend.
  },
  amount : {
    type: Number,
    required: [true,'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
// Exporting to our controller
module.exports = mongoose.model('Transaction',TransactionSchema);
// In our application, transactions have an id that will get created automatically with
// mongodb, with a field called _id. we want text, amount.