import { Component } from '@angular/core';
import {DescuentosService} from './../../services/descuentos.service';
import { Descuentos } from '../../models/Descuento';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrl: './descuentos.component.css'
})
export class DescuentosComponent {
  descuentos : Descuentos [] = [];
  descuento :Descuentos= new Descuentos();
    constructor(private datePipe:DatePipe  , private descuentosService: DescuentosService, private router: Router){
      
      
      this.descuentosService.list().subscribe((resusuario: any) =>
      {
        this.descuentos = resusuario;  
        //console.log(resusuario);
        console.log(this.descuentos)
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

