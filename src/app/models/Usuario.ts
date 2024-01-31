export class Usuario{
  UsuarioID: number;
  id: number;
  Nombre: string;
  Apellido: string;
  correo: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Telefono: string;
    constructor() {
      this.UsuarioID = -1;
        this.id = -1;
        this.correo = 'carlos@gmail.com';
        this.Contrasena = 'pass789';
        
        this.Nombre= "";
        this.Apellido= "";
        this.FechaNacimiento= new Date("");
        this.Telefono="" ;
    }
}