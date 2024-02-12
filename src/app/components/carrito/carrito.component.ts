import { Component, OnInit} from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/Carrito';
import { Membresia } from '../../models/Membresia';
import { MembresiaService } from '../../services/membresias.service';

import { Router } from '@angular/router';
import{FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  carritos : Carrito [] = [];
  carrito :Carrito= new Carrito();
  membresias: Membresia []=  [];
  membresia:Membresia= new Membresia();
    constructor(private datePipe:DatePipe  , private carritoService: CarritoService, private router: Router,private membresiaService: MembresiaService){
      
      let id = localStorage.getItem('id');
      this.carritoService.list(id).subscribe((resusuario: any) =>
      {
        this.carritos = resusuario;  
        //console.log(resusuario);
        console.log(this.carritos)
      },err => console.error(err)
      );
      
      
      
      
      
    }
    ngOnInit(): void 
      {
        $('.dropdown-trigger').dropdown();
        $('.tooltipped').tooltip();
        $(document).ready(function()
        {
          $('.modal').modal();
    
        });
    
        this.membresiaService.list().subscribe((resmembresia: any) =>
      {
        this.membresias = resmembresia;  
        //console.log(resusuario);
        console.log(this.membresias)
      },err => console.error(err)
      );
    
    
      }
    FormatDate(date: Date | null): string {
      if (date) {
          return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
      }
      return '';
  }
  EditF(id: number){
    $('#agregar').modal("open");
    localStorage.setItem('CarritoID', id.toString());
  }
  Edit(id: number){
    this.carrito= new Carrito();
    console.log("editar id: ", id);
   
    console.log("editar id: ", id);
    
 
    $('#agregar').modal("open");
  }
  eliminarCarrito(id: number){
    console.log("Click en eliminar Carrito");
    console.log("Identificador del Carrito: ",id);
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No es posible revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.carritoService.delete(id).subscribe((res: any) =>
        {
          console.log("res: ", res);
          Swal.fire({
            title: "Eliminado!",
            text: "Tu archivo ha sido eliminado.",
            icon: "success"
          }).then(() => {
            
            location.reload();});
        },
        err => console.error(err)
        );

      
      }
    });
  }
  FCrear(){
    this.carrito = new Carrito();
    $('#Nuevo').modal();
    $("#Nuevo").modal("open");
    
  }
  crear(nombre:string){
    $('#Nuevo').modal("close");
    let id = localStorage.getItem('id');
    console.log("crear id: ", id);
    this.carritoService.create(nombre).subscribe((resusuario: any) =>
    {
      console.log(resusuario);
      
      this.router.navigate(['/principal/shopping']);
    });
    
  }
  agr(){
    let carrID=localStorage.getItem('CarritoID');
    
    formatDate(this.carrito.FechaCreacion, 'yyyy/MM/dd', 'en');
    console.log(this.carrito);
    this.carritoService.agregarProducto(this.carrito.CarritoID, this.carrito.Cantidad, this.carrito.MembresiaID, this.carrito.PrecioUnitario, this.carrito.Total).subscribe((resusuario: any) =>
    {
      console.log(resusuario);
      this.router.navigate(['/principal/shopping']);
    });

  }
}
