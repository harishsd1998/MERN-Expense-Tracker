// use the router, so we bring in express
const express = require('express')
const router = express.Router();

// Bringing in controllers transaction method
const {getTransactions, addTransaction,deleteTransaction} = require('../controllers/transactions');

router.route('/').get(getTransactions).post(addTransaction);
router.route('/:id').delete(deleteTransaction);
// router.get('/',(req,res)=> res.send('Hello'));

module.exports = router;
// KMPZRdfirC6sdCA