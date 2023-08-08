const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const rotaLivro = require('./rotas/livros.js')
const rotaFavorito = require('./rotas/favoritos.js');
const cors = require('cors');

app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);

app.listen(process.env.PORT, () => {
    console.log('server listening on port ' + process.env.PORT);
})