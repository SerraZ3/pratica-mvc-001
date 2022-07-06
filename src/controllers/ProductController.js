const products = [
  {
    id: 1,
    nome: "Blusa azul",
    descricao: "Blusa muito fashion",
    preco: 89.99,
    tamanho: "G",
  },
  {
    id: 2,
    nome: "Blusa amarela",
    descricao: "Blusa muito fashion amarela",
    preco: 69.99,
    tamanho: "M",
  },
  {
    id: 3,
    nome: "Blusa Rosa",
    descricao: "Blusa de roqueiro",
    preco: 49.99,
    tamanho: "PP",
  },
  {
    id: 4,
    nome: "Blusa Dark",
    descricao: "Blusa trevosa",
    preco: 209.99,
    tamanho: "M",
  },
  {
    id: 5,
    nome: "Blusa Light",
    descricao: "Blusa iluminada, contem led",
    preco: 79.99,
    tamanho: "G",
  },
  {
    id: 6,
    nome: "Blusa Doce",
    descricao: "Blusa que gruda",
    preco: 19.99,
    tamanho: "G",
  },
];
const productController = {
  // Lista todos os produtos
  // Pode retornar uma página ou não
  index: (req, res) => {
    return res.render("products", {
      title: "Lista produtos",
      listProducts: products,
    });
  },
  // Mostra um produto
  // Pode retornar uma página ou não
  show: (req, res) => {
    const { id } = req.params;
    const productResult = products.find(
      (product) => product.id === parseInt(id)
    );
    // const productResult = products.find(product => product.id.toString() === id)

    if (!productResult) {
      return res.render("error", {
        title: "Erro",
        message: "Erro ao encontrar produto",
      });
    }
    return res.render("product", {
      title: "Visualizar produto",
      product: productResult,
    });
  },
  // Página para criar produto
  create: (req, res) => {
    // TODO: ATIVIDADE
    // Criar um view e route para esse controller
    // O router deve ter o seguinte caminho
    // GET http://localhost:3000/product/create
    // A view deve mostrar a frase "Página para criar produto"
    return res.render("product-create", { title: "Criar produto" });
  },
  // Cria produto
  // Não retorna página
  store: (req, res) => {
    const { nome, descricao, preco, tamanho } = req.body;

    if (!nome || !descricao || !preco || !tamanho) {
      return res.render("product-create", {
        title: "Criar produto",
        error: {
          message: "Preencha todos os campos!",
        },
      });
    }
    const newProduct = {
      id: products.length + 1,
      nome,
      descricao,
      preco,
      tamanho,
    };
    products.push(newProduct);

    return res.render("product-create", {
      title: "Criar produto",
      success: {
        message: "Produto criado com sucesso!",
      },
    });
  },
  // Página para editar produto
  edit: (req, res) => {
    // Essa variável é uma string
    const { id } = req.params;
    const productResult = products.find(
      (product) =>
        // A variável product.id é um number
        // Se comparar um number com string nunca vai ser verdadeiro
        product.id === parseInt(id)
    );
    if (!productResult) {
      return res.render("error", {
        title: "Error",
        message: "Produto não encontrado",
      });
    }
    return res.render("product-edit", {
      title: "Editar produto",
      product: productResult,
    });
  },
  // Edita produto
  // Não retorna página
  update: (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, tamanho } = req.body;
    const productResult = products.find(
      (product) => product.id === parseInt(id)
    );
    if (!productResult) {
      return res.render("error", {
        title: "Erro",
        message: "Erro ao encontrar produto",
      });
    }
    if (nome) productResult.nome = nome;
    if (descricao) productResult.descricao = descricao;
    if (preco) productResult.preco = preco;
    if (tamanho) productResult.tamanho = tamanho;

    return res.render("success", {
      title: "Produto atualizado",
      message: "Produto atualizado com sucesso!",
    });
  },
  // Paǵina para deletar o produto
  delete: (req, res) => {
    const { id } = req.params;
    const productResult = products.find(
      (product) => product.id === parseInt(id)
    );
    // const productResult = products.find(product => product.id.toString() === id)

    if (!productResult) {
      return res.render("error", {
        title: "Erro",
        message: "Erro ao encontrar produto",
      });
    } 
    return res.render("product-delete", {
      title: "Deletar produto",
      product: productResult,
    });
  },
  // Deleta o produto
  // Não retorna página
  destroy: (req, res) => {
    const { id } = req.params;
    const result = products.findIndex((product) => product.id === parseInt(id));

    if (result === -1) {
      return res.render("error", {
        title: "Erro",
        message: "Erro ao encontrar produto",
      });
    }
    // Apaga posição do produto no array
    products.splice(result, 1);
    return res.render("success", {
      title: "Produto deletado",
      message: "Produto deletado com sucesso",
    });
  },
};
module.exports = productController;
