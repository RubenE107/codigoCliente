export class Carrito{
    "Cantidad": number;
    "PrecioUnitario": number;
    "Total": number;
    "MembresiaID": number;
    "CarritoID": number;
    "UsuarioID": number;
    "Nombre": string;
    "FechaCreacion": Date;
    constructor(){
        this.CarritoID = -1;
        this.UsuarioID = -1;
        this.Nombre = "";
        this.FechaCreacion = new Date();
        this.Cantidad = 0;
        this.PrecioUnitario = 0;
        this.Total = 0;
        this.MembresiaID = -1;
        
    }
}