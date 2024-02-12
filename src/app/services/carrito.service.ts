import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Membresia } from '../models/Membresia';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http:HttpClient) { }
  list(id : any) {
    return this.http.get(`${environment.API_URL}car/mostrarCarrito/${id}`);
  }
 
  create(nombre: any) {
    let id=localStorage.getItem('id');
    return this.http.post(`${environment.API_URL}car/crearCarrito/`, {"UsuarioID":id,"Nombre":nombre});
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URL}car/eliminarCarrito/${id}`);
    
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URL}car/obt/${id}`);
  }
  agregarProducto(id: any, cantidad: any, MembresiaID: any, precioUnitario: any, Total: any) {
    return this.http.post(`${environment.API_URL}car/agregarProducto/`, {"CarritoID":id,"Cantidad":cantidad,"MembresiaID":MembresiaID,"PrecioUnitario":precioUnitario,"Total":Total});
  }

}
