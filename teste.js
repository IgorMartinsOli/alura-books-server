const fs = require('fs');
const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'));
const novoDado = { id: '3', nome: 'Mais que demais' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync('livros.json')))