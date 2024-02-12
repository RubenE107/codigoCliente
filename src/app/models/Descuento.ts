export class Descuentos{
    "DescuentoID": number;
    "TipoDescuento": string;
    "Porcentaje": number;
    "FechaInicio": string;
    "FechaFin": string;
    constructor() {
        this.DescuentoID = -1;
        this.Porcentaje = 0;
        this.FechaInicio = "";
        this.FechaFin = "";
        this.TipoDescuento = "";
    }
}