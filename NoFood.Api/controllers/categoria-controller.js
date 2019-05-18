'use strict'

function categoriaController(){

}

categoriaController.prototype.get = async (req, res) => {
    res.status(200).send('Funcionando categoria');
};
categoriaController.prototype.getById = async (req, res) => {};
categoriaController.prototype.post = async (req, res) => {};
categoriaController.prototype.put = async (req, res) => {};
categoriaController.prototype.delete = async (req, res) => {};

module.exports = categoriaController;