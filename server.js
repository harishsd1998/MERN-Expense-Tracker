const path = require('path');
// Creating regular express single server.
const express = require('express'); // It is the common JS module.

const dotenv = require('dotenv'); 
// dotenv allows us to create global variables for ports and database urls.

const colors = require('colors');
// colors allows us to enable colors in the console.

const morgan = require('morgan');
//morgan is used for logging.

const connectDB = require('./config/db')

// Now, we need to let dotenv know where that file config.env is.
dotenv.config({ path:'./config/config.env'});
connectDB();
// Bringin in the transactions.js router file
const transactions = require('./routes/transactions');

// Now, we have dependencies and we need to set up express app by assigning it to app variable.
const app = express();
app.use(express.json()); // allow us to use body parts
if(process.env.NODE_ENV ==='development'){
  app.use(morgan('dev'));
}
// Let us create a simple route right in the file.
// app.get('/',(req,res)=> res.send('Hello'));
// Now, we are connecting to transactions file route via our own url on port 5000.
app.use('/api/v1/transactions',transactions);
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}
//Now, lets create a variable called PORT and set that in a way that we want to access the PORT from the config.
const PORT = process.env.PORT || 5000; // This is how we access global variables.

//To run the server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
// We are gonna put our port in a config file and dotenv to get variables.
