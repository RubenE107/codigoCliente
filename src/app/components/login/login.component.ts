import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { DatePipe } from '@angular/common'; 
declare var $: any; // Declaración de jQuery

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  usuarios : Usuario [] = [];
  usuario :Usuario= new Usuario();
  constructor(private datePipe:DatePipe, private usuarioService : UsuarioService , private router: Router){
   
  }
  
  formatDate(date: Date | null): string {
    if (date) {
        return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
    }
    return '';
}
  ngOnInit(): void 
  {
    console.log("entro");
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
  

  entrar()
  {
    this.usuarioService.existe(this.usuario.correo,this.usuario.Contrasena).subscribe((resusuario: any) =>
    {
      this.usuario=resusuario;
      let navigationExtras: NavigationExtras = {
        state: {
            "usuario": this.usuario
        }
      };

      console.log("resusuario: ", resusuario);
      if(resusuario.RolID != -1)
      
      {
        if(resusuario.RolID == 1)
        {
          this.router.navigate(['principal/admin'], navigationExtras);
        }
        if(resusuario.RolID == (3 || 2))
        {
          this.router.navigate(['principal/usuario'], navigationExtras);
        }
      
      
        


        
      }else{
        console.log("Error, usuario o contrasena no valida");
      }
    },
    err => console.error(err)
    );
  }
  check(){
    console.log("usuario: ", this.usuario);
    if(this.usuario.id=-1 || this.usuario.Nombre === "" || this.usuario.Apellido === "" || this.usuario.correo === "" || this.usuario.Contrasena === "" || this.usuario.FechaNacimiento === null || this.usuario.Telefono ===""){
    console.log("Error, campos vacios");
    
    
  }else{
    console.log("usuario: ", this.usuario);
    this.usuarioService.create(this.usuario.Nombre,this.usuario.Apellido,this.usuario.correo,this.usuario.Contrasena,this.usuario.FechaNacimiento,this.usuario.Telefono).subscribe((resUsuario: any) => {

    },err => console.error(err)
    );
  }
}
 
 
}
