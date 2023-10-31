
const lista = [
    {
        nome:'José',
        idade: 13
    },
    {
        nome:'Antonio',
        idade: 59
    },
    {
        nome:'Maria',
        idade: 15
    },
    {
        nome:'Pedro',
        idade: 27
    },
    {
        nome:'Gabriela',
        idade: 23
    },
    {
        nome:'Emily',
        idade: 28
    },
    {
        nome:'Sandro',
        idade: 30
    },
    {
        nome:'Fernanda',
        idade: 34
    },
]
const converterObjeto = (objeto)=> {
    return{
        ...objeto,// esse três [...] chama-se SPREAD
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log(lista.map((converterObjeto)));