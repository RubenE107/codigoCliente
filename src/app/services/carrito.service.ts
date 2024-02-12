import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http:HttpClient) { }
  list(id : any) {
    return this.http.get(`${environment.API_URL}car/mostrarCarrito/${id}`);
  }

}
