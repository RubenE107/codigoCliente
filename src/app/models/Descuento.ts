export class Descuentos{
    "DescuentoID": number;
    "TipoDescuento": string;
    "PorcentajeDescuento": number;
    "FechaInicio": string;
    "FechaFin": string;
    constructor() {
        this.DescuentoID = -1;
        this.PorcentajeDescuento = 0;
        this.FechaInicio = "";
        this.FechaFin = "";
        this.TipoDescuento = "";
    }
}