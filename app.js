const livros = require('./database')

//pegar input do usuario se quer escolher por categoria ou n

const readline = require('readline-sync')

const entradaInicial = readline.question("Deseja buscar um livro?S/N")

//se for sim, mostra categorias e perguntamos qual ela escolhe.
//se não, mostrar todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log("essas são as categorias disponíveis:");
    console.log(('produtividade e estilo de vida','/arte e cultura','/concursos públicos','/mangá'))

    const entradaCategoria = readline.question('Qual categoria escolhida:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}