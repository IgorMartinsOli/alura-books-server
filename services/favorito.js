const fs = require('fs');

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deletarFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id );
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favortios = JSON.parse(fs.readFileSync("favoritos.json"))

    const livrosInseridos = livros.find( livro => livro.id === id );
    const novaListaDeLivrosFavos = [...favortios, livrosInseridos];

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavos))
}

module.exports = { getTodosFavoritos, deletarFavoritoPorId, insereFavorito }