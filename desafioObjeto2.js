const programador = {
    nome: 'Marcelo',
    idade: 34,
    tecnologias: [{
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "C++",
            especialidade: "Descktop/Unreal Engine"
        },
        {
            nome: "C#",
            especialidade: "Data Base/Unity"
        }
    ]
}

console.log(`O programador ${programador.nome} tem ${programador.idade} anos e usa tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)