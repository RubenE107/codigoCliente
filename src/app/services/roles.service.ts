import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient de @angular/common/http.
import { environment } from '../environments/environment'; // Importa environment de la ruta especificada.

@Injectable({
  providedIn: 'root'
})
export class RolesService {

constructor(private http:HttpClient) {}
  list() {
    return this.http.get(`${environment.API_URL}Roles/mostrarRoles/`);
  }
  
}
