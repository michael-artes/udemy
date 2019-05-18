'use strict'

const app = require('../NoFood.Api/bin/express.js');
const variables = require('../NoFood.Api/bin/configuration/variables.js');

app.listen(variables.Api.port, () => {
    console.info(`api inicializada com sucesso na porta ${variables.Api.port}`);
});