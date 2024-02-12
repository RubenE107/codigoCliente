export class Carrito{
    "CarritoID": number;
    "UsuarioID": number;
    "Nombre": string;
    "FechaCreacion": Date;
    constructor(){
        this.CarritoID = -1;
        this.UsuarioID = -1;
        this.Nombre = "";
        this.FechaCreacion = new Date();
    }
}