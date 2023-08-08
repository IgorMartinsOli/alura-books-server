const { getTodosFavoritos, deletarFavoritoPorId, insereFavorito } = require('../services/favorito.js');

function getFavoritos(req, res){
    try {
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

function postFavorito(req, res){
    try {
        const id = req.params.id
        !id ? res.status(400).send('O campo id é obrigatorio!') : null;
        insereFavorito(id);
        res.status(201).send('Livro criado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)){
            deletarFavoritoPorId(id)
            res.send("Favorito deletado com sucesso")
        }else{
            res.status(422).send('Id invalido');
        }
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}