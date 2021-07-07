const livros = [
    {
        id: 1,
        nome: "digital minimalism",
        autor: "cal newport",
        categoria: "produtividade e estilo de vida",
        paginas: 254,
        recomenda: false,
        leu: false,
    },
    {
        id: 2,
        nome: "como fazer amigos e influenciar pessoas",
        autor: "dale carnegie",
        categoria: "produtividade e estilo de vida",
        paginas: 262,
        recomenda: true,
        leu: true,
    },
    {
        id: 3,
        nome: "a arte moderna e a morte de uma cultura",
        autor: "h.r. hookmaaker",
        categoria: "arte e cultura",
        paginas: 279,
        recomenda: true,
        leu: false,
    },
    {
        id: 4,
        nome: "raciocínio lógico e matemática para concursos",
        autor: "cabral e nunes",
        categoria: "concursos públicos",
        paginas: 254,
        recomenda: false,
        leu: false,
    },
    {
        id: 5,
        nome: "league of legends: reinos de runeterra",
        autor: "riot games",
        categoria: "arte e cultura",
        paginas: 255,
        recomenda: true,
        leu: false,
    },    
    {
        id: 6,
        nome: "uzumaki",
        autor: "junji ito",
        categoria: "mangá",
        paginas: 667,
        recomenda: true,
        leu: true,
    }
]


module.exports = livros
//para ver todos os elementos de uma categoria, use esse comando do ES6:
// const categoria = livros.map(value => value.categoria)

// console.log (categoria)