## TypeScript - Iniciando a trilha de conhecimento.

Se cria um arquivo em `TypeScript` E após o desenvolvimento é transpilado para `JavaScript`, considerando que o navegador não lê `TypeScript`.

Para instalar o `TypeScript`  vá até o site oficial  do [TypeScript Documentação Oficial](https://www.typescriptlang.org/)

use o comando: 

```
$ npm install typescript --save-dev
```

Para instalar global, caso queira pode instalar direto com o camando abaixo:

```
$ npm install -g typescript
```

Para verificar se o `typeScript`  esta instalado, execute o comando abaixo:

```
$ tsc -v
```

Ou somente `tsc` que irá mostrar uma série de possibilidades que você poderá usar.

Para rodar o `TypeScript`no teu projeto, vá na pasta onde criou o projeto e execute o comando:

```
$ tsc --init
```

Ele irá criar um arquivo  de nome `tsconfig.json` este é um arquivo onde vem pré configurado regras básicas para o `typescript`, você poderá ir acrescentando mais regras conforme necessidade.

Após você criar seu arquivo `typescript`, lembre criar arquivo com extensão `NaNaNa.ts` e o mesmo estiver ok, usar o comando `ts`no terminal onde teu projeto está criado e será criado um arquivo já convetido em `JavaScript` , exemplo:  `NaNaNa.js`, este é arquivo que será lido pelo browser.

### Tipos Básicos

Para se aprofundar nos **tipos básicos** acessar a documentação oficial no site [TypeScript Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### Tipo Never

Muito pouco utilizado, o prórpio `typeScript`pode inferir que é uma função que não tem retorno, tios de situações que nunca ocorre. Um while true sem saída.

```
function loopInfinito(): never {
    while (true) {}
}

function erro(mensagem: string): never{
    throw new Error(mensagem)
}

function falha(){
    return erro('Algo falhou!!!')
} // Este o `TypeScript` irá inferir que é uma função do tipo never.
```

### Múltiplos tipos com Union Types

Informa ao `TypeScript`que aceita tanto uma `String`ou `Number` ou `Boolean`.

```
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
```

### Tipo Alias

`Alias`cria um função, nesta você especifica o tipo que irá receber.

```
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
```

#### Tipos `null`ou `opcionais`

o  tipo `null` precisa ser declarado para que o `TypeScript` entenda que a variável é nula, e o `?` informa ao `TypeScript`que o campo é opcional.

``` 
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
```

### Tipo `Type Assertion`

``` 
const minhaIdade: any = 23; // Declarou como `type any` 
(minhaIdade as number).toString(); // Você como programador está afirmando qual `type` é a `srtring`
// Ou declarar desta forma
<number>minhaIdade.toString()

const input = document.getElementById('numero1') as HTMLInputElement; // Estou afirmando que é um input.
// Ou declara desta forma
// const input = <HTMLInputElement>document.getElementById('numero1')
console.log(input.value);
```

#### Interfaces

Um dos principios fundamentais do TypeScript é o tipo de verificação focada na **"forma"** dos dados. Este tipo de checagem é chamado de **"duck typing"** ou **"structural subtyping"**. No TypeScript, **interfaces** são usadas para ocupar o papel de "dar forma" aos dados e são uma maneira poderosa de definir contratos dentro do seu código, bem como contratos com código fora do seu projeto.

```
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Jefferson',
        email: 'Jefferson@seila.com'
    }
}

function setUser(usuario: Usuario){
    //.....
}
```

### Classes

```
// Classes
// Pode ser feito assim
// class Data {
    // public dia: number;
    // private mes: number;
    // ano: number;

    // constructor(dia: number, mes: number, ano: number = 1970) {
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    // }
// }

// Ou, pode ser feito como o comando abaixo que o `typeScript`irá gerar as linhas acima

class Data {
    constructor(public dia:number, public mes: number, public ano:number = 1970){
    }
}
```

#### Configurando o target do TypeScript

Por padrão o `TypeScript` transpila para o padrão `JavaScript`do `ES5`, este **ecma script** é aceito na maioria dos **browsers**, caso queira alterar é só acessar o arquivo `tsconfig.json` e alterar o **`target`** para o padrão que desejar.

O correto é `ES5`para evitar problemas de browser.

Se tiver dúvidas acese o site [TypeScript Playground](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABDAzgEQIZQKYCE5wA22GYAFHAEYBWAXIqQJ4CU9lBxpiA3gLABQiIYgBO2KCBFIojAA7Y4wRFWqIAvBsQByFdmhbEAMkPaocAJIBlAPKWoImGADmBx8poBuAQF8BA0JCwCMjoWNgAwhgoUBQ09Eys7qqoiJg4PALCouKS0nIKSirqmjo0elAGxqYWNnYOzq5IKl78vvz+4NDwSE7iAKpgANZgcADuYGkYZIlMGYLCYhJSiGDYo6lh0y1tHYHdiDjRAIzTc1kAbhgiiAAm6oi9UAPDYxNYU8wtWTBKZKhpeA4JHIN2YzDOWWEEAQKCI2AAdIQ4E4yDd4WYrLZ7I4UWCvpChNCwLDiIjkaj0RZYXUcdNPplhG0dvwAl1gocoAAmU58eZCS7XO5qB79IYjcaTLYMoQ-RB-UI4SLRVFgiEEokkhFIlFojG1bHOOn49UwuFknWU8zUg24+l8xBMoA) na parte de **`TS Config`** é possível veroificar as versões disponíveis..

#### Utilizando Modificadores de Acesso e Herança

```
class Carro {
    private velocidadeAtual: number = 0;

    constructor (
        public Montadora: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    private alteraVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;
        
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alteraVelocidade(5);
    }

    frear() {
        this.alteraVelocidade(-5);
    }
}

const carro = new Carro('Chevrolet', 'Gol', 250);
carro.acelerar();

// Herança

class Camaro extends Carro {
    private  turbo = false;

    constructor() {
        super('Chevrolet', 'Camaro', 550);
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar()
camaro.frear()
camaro.ligarTurbo()
```

É necessário conhecer a **base** que é o **`JavaScript`** para trabalhar melhor com as demais bibliotecas que vieram da base do mesmo.

### Fim

