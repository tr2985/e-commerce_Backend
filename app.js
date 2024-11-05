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

//AGREGAR SWAGGER
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "API de la tienda en linea Curso Full Stack juniors",
            version: "0.1.0",
            description:
                "API de la tienda en linea Curso Full Stack juniors",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Innovare Software",
                url: "https://innovare.com.ar",
                email: "info@innovare.com.ar",
            },
        },
        servers: [
            {
                url: "http://localhost:4000",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
//

app.listen(port, () => {

    console.log('server is running on port', port);
});




