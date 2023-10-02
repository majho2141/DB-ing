const express = require('express');
// app conectar por el puerto local el express
// especificar los middleware a utilizar
const app = express();
const API_VERSION= 'api/v1';
const workerRoutes = require("./routes/worker");
//Pruebas con extension REST Client
app.use(express.json());
//Pruebas desde postman
app.use(express.urlencoded({extended:true}));

//http://localhost:3100/api/v1/users
app.use(`/${API_VERSION}/worker`, workerRoutes)

module.exports = app;
