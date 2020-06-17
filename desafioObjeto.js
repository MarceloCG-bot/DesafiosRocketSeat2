const usuario = {
    nome: "Marcelo",
    empresa: {
        nome: "CyberGarou",
        cor: "Verde",
        foco: "Desenvolvedor Front-End",
        endereco: {
            rua: "Rua Cascatinha",
            numero: 999
        }
    }
}

console.log(`${usuario.nome}! O nome da sua empresa é: ${usuario.empresa.nome}, que fica no endereço: ${usuario.empresa.endereco.rua}, numero: ${usuario.empresa.endereco.numero}`)