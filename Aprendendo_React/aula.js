
/*
O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.
*/

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