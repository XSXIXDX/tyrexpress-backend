require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan'); //logger
const cors = require('cors'); //cross-origin resource sharing


const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

const api = process.env.API_URL || '/api/v1/';



//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));




//Routers
app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/orders`, ordersRouter);
app.use(`${api}/users`, usersRouter);







//MongoDB connection

mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: process.env.DB_NAME || 'ecommerce_db'
})
.then(() => {
    console.log('MongoDB connected to', mongoose.connection.name);

})
.catch(err => {
    console.error('Connected error:',err);

});






    dbName:'ecommerce_db', // Specify the database name
    

    


  then(() => console.log('MongoDB connected to', mongoose.connection.name))
  .catch(err => console.error('Connection error:', err));

  



            
            




//Server  
app.get('/test', (req, res) => res.send('Server is working'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});