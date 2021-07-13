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

const data = new Data(1, 1, 2021);
console.log(data.dia)
console.log(data.mes)

