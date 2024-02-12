import { Component } from '@angular/core';
import {DescuentosService} from './../../services/descuentos.service';
import { Descuentos } from '../../models/Descuento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrl: './descuentos.component.css'
})
export class DescuentosComponent {
  descuentos : Descuentos [] = [];
  descuento :Descuentos= new Descuentos();
    constructor(private descuentosService: DescuentosService, private router: Router){
      
      this.descuentosService.list().subscribe((resusuario: any) =>
      {
        this.descuentos = resusuario;  
        //console.log(resusuario);
        console.log(this.descuentos)
      },
      err => console.error(err)
      );
      
    
      
    }
  }

