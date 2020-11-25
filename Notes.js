// first run npm init -> will give package.json in the server.
// Now we will install the dependencies like
// npm i express dotenv mongoose colors
// mongoose is the object data mapper , it is basically a layer used to interact with our database.
// we can create a model for our transactions and we can make queries for our database.
// we will setup our databse in a minute and we will use mongoDB Addlist which is basically 
// a cloud version of mongodb. 
// mongoose is a small module used to give color text in the console.
// we will install morgan which is a logger tells us what methods and routes are hit in console.

// We also have dev dependencies.
// npm i -D nodemon concurrently
// nodemon is used to constantly run our server without able to restart it.
// concurrently will make us to run our backend server on a port 5000 and also our react
// dev server on 3000 at the same time with one npm script
