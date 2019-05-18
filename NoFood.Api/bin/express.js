const express = require('express');
const bodyParser = require('body-parser');

//routers
const routerCategoria = require('../routes/categoria.router.js');
const routerProduto = require('../routes/produto.router.js');

//criando/invocando api/server web do express
const app = express();

//configuracao do parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/categoria', routerCategoria);
app.use('/api/produto', routerProduto);

module.exports = app;