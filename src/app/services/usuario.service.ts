import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient de @angular/common/http.
import { environment } from '../environments/environment'; // Importa environment de la ruta especificada.
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

constructor(private http:HttpClient) {}
  create( Nombre: string, Apellido: string, correo: string, contrasena: string, FechaNacimiento: Date, Telefono: string ) {
    return this.http.post(`${environment.API_URL}usuarios/crearUsuario`,{
      "Nombre": Nombre,
      "Apellido": Apellido,
      "correo":correo,
      "contrasena": contrasena,
      "FechaNacimiento": FechaNacimiento,
      "Telefono":Telefono
  });
  }
      
  list() {
    return this.http.get(`${environment.API_URL}usuarios/mostrarTodosUsuarios`);
  }

  existe(correo : any, password : any){ 
    return this.http.post(`${environment.API_URL}usuarios/ValidarUsuario/`,{"correo":correo, "contrasena":password});
  }

  eliminarUsuario(id : any){ 
    return this.http.delete(`${environment.API_URL}usuarios/eliminarUsuario/${id}`);
  }
  listOne(id : any) {
    return this.http.get(`${environment.API_URL}usuarios/obtenerUsuario/${id}`);
  }
  act(UsuarioID:any, Nombre:any, Apellido:any, correo:any, contrasena:any, FechaNacimiento:any, Telefono:any){
    return this.http.put(`${environment.API_URL}usuarios/actualizarUsuario/${UsuarioID}`,
      {
        "Nombre": Nombre,
        "Apellido": Apellido,
        "correo": correo,
        "contrasena": contrasena,
        "FechaNacimiento": FechaNacimiento,
        "Telefono": Telefono
      });
  
}
}