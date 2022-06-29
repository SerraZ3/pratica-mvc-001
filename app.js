// Importa o express e atribui a variável
const express = require("express");
// Inicializando o express
const app = express();
// Porta que irá rodar o servidor
const port = 3000;
// Atribui conteúdo do productRoute a variável
const productRoute = require("./src/routes/productRoute");

// Configuração para acessar externamente conteúdo de uma pasta
app.use(express.static(__dirname + "/public"));
// Altera configuração inicial do express do template engine para ejs
app.set("view engine", "ejs");
// Altera configuração inicial do express do caminho do views para o nosso caminho de arquivos
app.set("views", __dirname + "/src/views");
// Converte "Body" da requisição para json (objeto)
app.use(express.json());
// Converte corpo do requisição para forma que o json aceita
app.use(express.urlencoded({ extended: false }));

app.use("/product", productRoute);

// Roda o express na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
