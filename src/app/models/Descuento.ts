export class Descuentos{
    "DescuentoID": number;
    "TipoDescuento": string;
    "PorcentajeDescuento": number;
    "FechaInicio": Date;
    "FechaFin": Date;
    constructor(){
        this.DescuentoID = -1;
        this.TipoDescuento = "";
        this.PorcentajeDescuento = 0;
        this.FechaInicio = new Date();
        this.FechaFin = new Date();
    }
}