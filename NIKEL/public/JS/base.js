const nome = "Guilherme" 
let nome2 = "";
let pessoadefault = {
    nome: "Guilherme",
    idade:"19", 
    trabalho:"programador"
}

let nomes = ["Guilherme", "Renê"]
let pessoas = [
    {
        nome: "Guilherme",
        idade:"19", 
        trabalho:"programador"
    },
    {
        nome: "Renê",
        idade:"48", 
        trabalho:"área industrial sp"
    }
];

 function alterarnome() {
    nome2 = "Andreia"
    console.log ("Valor alterado")
    console.log (nome2);
}


function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log ("Valor alterado recebendo um nome")
    console.log (nome2);
}

function imprimmirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

 function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
 }

function imprimirPessoas() {
    console.log("--------IMPRIMIR PESSOAS--------")
    pessoas.forEach((item) => {
        console.log("nome:");
        console.log(item.nome)

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho);
    })

}

imprimirPessoas();

adicionarPessoa({
    nome: "José",
    idade: "92", 
    trabalho: "Aposentado"
});

imprimirPessoas();





