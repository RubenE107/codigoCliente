import { Component,OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any; // Declaración de jQuery
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  usuarios : Usuario [] = [];
  usuario :Usuario= new Usuario();
  constructor(private datePipe:DatePipe, private usuarioService : UsuarioService , private router: Router){
   
  }
  
  ngOnInit(): void 
  {
    $('.dropdown-trigger').dropdown();
    $('.tooltipped').tooltip();
    $(document).ready(function()
    {
      $('.modal').modal();

    });


  }
  Reg() {
   
    console.log(this.usuario)
    $('#Registrar').modal();
    $("#Registrar").modal("open");
  
 
}
  check(){
    console.log("usuario: ", this.usuario);
    if( this.usuario.Nombre === "" || this.usuario.Apellido === "" || this.usuario.correo === "" || this.usuario.Contrasena === "" || this.usuario.FechaNacimiento === null || this.usuario.Telefono ===""){
    console.log("Error, campos vacios");
    
    
  }else{
    console.log("usuario: ", this.usuario);
    this.usuarioService.create(this.usuario.Nombre,this.usuario.Apellido,this.usuario.correo,this.usuario.Contrasena,this.usuario.FechaNacimiento,this.usuario.Telefono).subscribe((resUsuario: any) => {
      $("#Registrar").modal("close");
      this.router.navigate(['principal/admin']);
    },err => console.error(err)
    );
    
  }
}
}
