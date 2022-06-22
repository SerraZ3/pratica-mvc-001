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
  store: (req, res) => {},
  // Página para editar produto
  edit: (req, res) => {},
  // Edita produto
  // Não retorna página
  update: (req, res) => {},
  // Deleta produto
  // Não retorna página
  delete: (req, res) => {},
  // O método acima pode ser chamado de destroy
  // destroy: (req, res)=>{},
};
module.exports = productController;
