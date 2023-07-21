const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const rotaLivro = require('./rotas/livros.js')

app.use(express.json())

app.use('/livros', rotaLivro);

app.listen(process.env.PORT, () => {
    console.log('server listening on port ' + process.env.PORT);
})