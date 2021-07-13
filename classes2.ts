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


