"use strict";
// Tipos Básicos em TypeScript
// Boolena
var cotaPaga = false;
// Number
var idade = 52;
var avaliacoes = 12.5;
// String
var nome = 'Pedro Maria José';
// Array
var idades = [12, 24, 36, 52, 72]; // Este é o mais simples de se fazer
var idades2 = [6, 15, 21, 32, 52, 60]; // Complexo, verboso
// Tuple
var nomes;
nomes = ['Pedro', 15, 'Mathias', 52, 'Kaue', true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Reprovado"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any  é usado para quando não se sabe o tipo que será retornado, basicamente se anula a tipagem do JAvaScript.
// Não é recomendado utilizar aleatoriamente, usar com cautela e se saber que não precisa saber o tipo que será retornado.
var returnDaApi = [123, 'Pedro', false];
var returnDaApi2 = {
//....................
};
// void , tipo utilizado em funções quando esta não retorna nada, o TypeScript consegue inferir que é vazia, não há a necessidade de informar. Mas, por boas práticas coloque :void.
function printaNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object , quando se tem um objeto, um tipo não primitivo, este tipo não se sabe exatamente o que é só que é um objeto.
function seila(objecto) {
    //....
}
// Para funcionar quando chamar tem que inserir em forma de objeto.
seila({
    caracteristica: 1,
    propriedade: 'Esta',
});
// Se chamar assim, como na linha abaixo, não vai funcionar.
//seila('pedro')
