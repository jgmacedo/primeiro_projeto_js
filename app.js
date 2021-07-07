
//pegar input do usuário
//se sim, mostra categorias e pergunta qual ela escolhe.
//se não, mostra todos os livros em ordem crescente por quantidade de pgs
const livros = require('./database')
const readline = require("readline-sync"),

const entradaInicial = readline.question("Deseja buscar um livro?S/N")

// if (entradaInicial.toLocaleUpperCase() === S){
//     console.log("essas sao as categorias disponíveis")
//     console.log('produtividade e estilo de vida, arte e cultura, concursos públicos, arte e cultura, mangá')
// }