const Transaction = require('../models/Transaction');




// Have all the methods that use the model to interact with database.
// @description get all the transactions
// @route /api/v1/transactions
// @access Public
// When we use mongoose method, it returns a promise, so we are using async.
exports.getTransactions = async(req,res,next)=>{
  try{
      const transactions = await Transaction.find(); // Basically gets all the transactions
      return res.status(200).json({
        success: true,
        // If we are getting multiple pieces of data we can send a count.
        count: transactions.length,
        data: transactions
      });
  }
  catch (err){
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
  }
}

// Have all the methods that use the model to interact with database.
// @description ADD transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = async(req,res,next)=>{
  try{
    // When we send data from a client it comes like below
    const {text, amount} = req.body; // will be the data sent to create transaction.
    // After getting data, we create variable called transaction
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data:transaction
    });
 // In order to use request.body, we need to add body parts of middleware to server.js

  } catch(err){
      if(err.name === 'ValidationError'){
          const messages = Object.values(err.errors).map(val => val.message);
          return res.status(400).json({
            success:false,
            error:messages
          });
      } else {
        res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
  }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}