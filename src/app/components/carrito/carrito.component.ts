import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/Carrito';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  carritos : Carrito [] = [];
  carrito :Carrito= new Carrito();
    constructor(private datePipe:DatePipe  , private carritoService: CarritoService, private router: Router){
      
      let id = localStorage.getItem('id');
      this.carritoService.list(id).subscribe((resusuario: any) =>
      {
        this.carritos = resusuario;  
        //console.log(resusuario);
        console.log(this.carritos)
      },
      err => console.error(err)
      );
      
    
      
    }
    FormatDate(date: Date | null): string {
      if (date) {
          return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
      }
      return '';
  }

}
