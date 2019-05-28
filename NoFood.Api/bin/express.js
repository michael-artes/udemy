const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');


//routers
const routerCategoria = require('../routes/categoria.router');
const routerProduto = require('../routes/produto.router');

//criando/invocando api/server web do express
const app = express();

//configuracao do parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//configuracao conexao com banco de dados
mongoose.connect(variables.Database.connection);

app.use('/api/categoria', routerCategoria);
app.use('/api/produto', routerProduto);

module.exports = app;