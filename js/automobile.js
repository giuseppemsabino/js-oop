class Automobile extends Veicolo{

    constructor(marca, anno, colore, numeroPorte, carburante){
        super(marca, anno, colore);
        this.numeroPorte = numeroPorte;
        this.carburante = carburante;
    }

    detagliAuto(){
        return `${this.numeroPorte} porte, alimentazione: ${this.carburante}`;
    }
}
