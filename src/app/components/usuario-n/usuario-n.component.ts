import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
declare var $ : any;
@Component({
  selector: 'app-usuario-n',
  templateUrl: './usuario-n.component.html',
  styleUrl: './usuario-n.component.css'
})
export class UsuarioNComponent {
  usuario : Usuario = new Usuario();
  ngOnInit(): void 
  {
    $('.carousel.carousel-slider').carousel({
      fullWidth: false
    });
    let id = localStorage.getItem('id'); 
  }
  
  constructor(private usuarioService : UsuarioService, private router: Router){


    this.usuarioService.existe(this.usuario.correo,this.usuario.Contrasena).subscribe((resusuario: any) =>
    {

      console.log("resusuario: ", resusuario);
      if(resusuario.RolID != -1)
      
      {
        if(resusuario.RolID == 1)
        {
          this.router.navigate(['principal/admin']);
        }
        if(resusuario.RolID == (3 || 2))
        {
          localStorage.setItem('id', resusuario.UsuarioID);
          
          this.router.navigate(['principal/usuario']);
        }
      
      
        


        
      }else{
        console.log("Error, usuario o contrasena no valida");
      }
    });



};





}