export class Membresia{
    "MembresiaID": number;
    "TipoMembresia": string;
    "Precio": number;
    "DuracionSemana": number;
    constructor() {
        this.MembresiaID = -1;
        this.TipoMembresia = "";
        this.Precio = 0;
        this.DuracionSemana = 0;
    }
}