// Tipos Básicos em TypeScript

// Boolena
const cotaPaga: boolean = false

// Number
const idade: number = 52
const avaliacoes: number = 12.5

// String
const nome: string = 'Pedro Maria José'

// Array
const idades: number[] = [12, 24, 36, 52, 72]   // Este é o mais simples de se fazer
const idades2: Array<number> = [6, 15, 21, 32, 52, 60] // Complexo, verboso

// Tuple
let nomes: [string, number, string, number, string, boolean]
nomes = ['Pedro', 15, 'Mathias', 52, 'Kaue', true]

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Reprovado = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any  é usado para quando não se sabe o tipo que será retornado, basicamente se anula a tipagem do JAvaScript.
// Não é recomendado utilizar aleatoriamente, usar com cautela e se saber que não precisa saber o tipo que será retornado.

const returnDaApi: any[] = [123, 'Pedro', false]
const returnDaApi2: any = {
    //....................
} 

// void , tipo utilizado em funções quando esta não retorna nada, o TypeScript consegue inferir que é vazia, não há a necessidade de informar. Mas, por boas práticas coloque :void.

function printaNaTela(msg: string): void {
    console.log(msg)
}

// Null e Undefined

const u: undefined = undefined
const n: null = null

// Object , quando se tem um objeto, um tipo não primitivo, este tipo não se sabe exatamente o que é só que é um objeto.

function seila(objecto: object){
    //....
}

// Para funcionar quando chamar tem que inserir em forma de objeto.
seila({
    caracteristica: 1,
    propriedade: 'Esta',
})

// Se chamar assim, como na linha abaixo, não vai funcionar.
//seila('pedro')

// Never
// 
function loopInfinito(): never {
    while (true) {}
}

function erro(mensagem: string): never{
    throw new Error(mensagem)
}

function falha(){
    return erro('Algo falhou!!!')
} // Este o `TypeScript` irá inferir que é uma função do tipo never.


// Union Types, neste é possível informar que aceita tanto um quanto ao outro

const nota: string | number = 5;

//ou 

function exibirNota(nota: number | string | boolean){
    console.log(`A nota é ${nota}`)
}

exibirNota(10)
exibirNota('10')
exibirNota(9.3)
exibirNota(false)
exibirNota(true)

// Alias

type Funcionario = {
    Nome: string;
    Sobrenome: string;
    Sexo: string;
    dataNascimento: Date;  
}

const funcionarios: Funcionario[] = [
    {
    Nome: 'José',
    Sobrenome: 'Maria',
    Sexo:'Masculino',
    dataNascimento: new Date()
    },
    {
    Nome: 'Ana',
    Sobrenome: 'Maria',
    Sexo: 'Feminino',
    dataNascimento: new Date()
    }
];

function trataFuncionarios(funcionarios: Funcionario[]){
    for (let funcionario of funcionarios){
        console.log('Nome dos Funcionários: ', funcionario.Nome);
    }
}


// nulos e opcionais

let altura: number | null = 1.6
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Pedro',
    telefone1: '12346'
}

// Type Assertion

const minhaIdade: any = 23; // Declarou como `type any` 
(minhaIdade as number).toString(); // Você como programador está afirmando qual `type` é a `srtring`
// Ou declarar desta forma
<number>minhaIdade.toString()


const input = document.getElementById('numero1') as HTMLInputElement; // Estou afirmando que é um input.
// Ou declara desta forma
// const input = <HTMLInputElement>document.getElementById('numero1')
console.log(input.value);



