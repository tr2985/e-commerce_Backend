const express = require('express');
const bodyParser = require('body-parser');
//const testRoutes = require('./src/routes/test.routes');
const productRoutes = require('./src/routes/product.routes');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth.routes');
const cors = require('cors');

const app = express();
const port = 4000;
const mongodb = "mongodb://localhost:27017/nodejs-db"


app.use(cors());
app.use(bodyParser.json());
app.use('/api', productRoutes);
app.use('/auth', authRoutes);

mongoose.connect(mongodb,{
    useNewUrlParser: true,
    
});



app.listen(port, () => {

    console.log('server is running on port', port);
});




