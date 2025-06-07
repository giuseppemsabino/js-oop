const Fiat = new Veicolo("Fiat", 2019, "blu");
console.log(Fiat.informazioni());
console.log(`Età del veicolo: ${Fiat.calcolaEta()} anni`);


const Opel = new Automobile("Opel", 2020, "nero", 4, "benzina"); 
console.log(Opel.informazioni());
console.log(Opel.detagliAuto());


