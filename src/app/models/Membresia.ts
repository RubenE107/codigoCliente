export class Membresia{
    "MembresiaID": number;
    "tipoMembresia": string;
    "precio": number;
    "DuracionSemana": number;
    constructor() {
        this.MembresiaID = -1;
        this.tipoMembresia = "";
        this.precio = 0;
        this.DuracionSemana = 0;
    }
}