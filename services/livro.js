const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroporId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(novoLivro) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [ ...livros, novoLivro ]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

    return livrosAtuais[indiceModificado];
}

function deletarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}


module.exports = {getTodosLivros, getLivroporId, insereLivro, modificaLivro, deletarLivroPorId}