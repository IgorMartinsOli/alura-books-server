const {getTodosLivros, getLivroporId, insereLivro, modificaLivro, deletarLivroPorId} = require('../services/livro.js');

function getLivros(req, res){
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

function getLivro(req, res){
    try {
        const id = req.params.id;
        if (id && Number(id)){
            const livros = getLivroporId(id);
            res.send(livros);
        }else{
            res.status(422).send('Id invalido');
        }
        
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

function postLivro(req, res){
    try {
        const novoLivro = req.body;
        !novoLivro.nome ? res.status(422).send('Campo nome obrigatório') : null;

        insereLivro(novoLivro);
        res.status(201).send('Livro criado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

function patchLivro(req, res){
    try {
        const novoLivro = req.body;
        const id = req.params.id;

        if (id && Number(id)){
            const livroAlterado = modificaLivro(novoLivro, id);
            res.status(201).send(livroAlterado);
        }else{
            res.status(422).send('Id invalido');
        }
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)){
            deletarLivroPorId(id)
            res.send("livro deletado com sucesso")
        }else{
            res.status(422).send('Id invalido');
        }
    } catch (error) {
        res.status(500).send('Erro do servidor: ' + error.message);
    }
}

module.exports = {getLivros, getLivro, postLivro, patchLivro, deleteLivro}