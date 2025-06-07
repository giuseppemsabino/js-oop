class Veicolo{

    constructor(marca, anno, colore){
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;   
    }

    informazioni(){
        return `Marca: ${this.marca}, Anno: ${this.anno}, Colore: ${this.colore}`;
    }

    calcolaEta(){
        const annoAttuale = new Date().getFullYear();
        return annoAttuale - this.anno;
    }
}

