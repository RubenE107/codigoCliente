import { Component, OnInit} from '@angular/core';
import {MembresiaService} from './../../services/membresias.service';
import { Membresia } from '../../models/Membresia';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { rol } from '../../models/rol';
import { RolesService } from '../../services/roles.service';
declare var $: any;
@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrl: './membresias.component.css'
})
export class MembresiasComponent {
  membresias : Membresia [] = [];
  membresia :Membresia= new Membresia();
  constructor(private rolesService:RolesService,private membresiaService : MembresiaService, private router: Router){
    
    this.membresiaService.list().subscribe((resusuario: any) =>
    {
      this.membresias = resusuario;  
      //console.log(resusuario);
      console.log(this.membresia)
    },
    err => console.error(err)
    );
    
  
    this.membresiaService.list().subscribe((resUsuario: any) =>
    {
      this.membresia = resUsuario;  
      console.log(this.membresia);
    },
    err => console.error(err)
    );
    
  }
}
