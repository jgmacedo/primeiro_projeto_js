const livros = require('./database')

//pegar input do usuario se quer escolher por categoria ou n

const readline = require('readline-sync')

const entradaInicial = readline.question("Deseja buscar um livro?S/N")

//se for sim, mostra categorias e perguntamos qual ela escolhe.
//se não, mostrar todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log("essas são as categorias disponíveis:");
    console.log('lifestyle','/arte e cultura','/concursos publicos','/manga')

    const entradaCategoria = readline.question('Qual categoria escolhida:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todas as obras disponíveis:')
    console.table(livrosOrdenados)
}