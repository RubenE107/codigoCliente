import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-usuario-n',
  templateUrl: './usuario-n.component.html',
  styleUrl: './usuario-n.component.css'
})
export class UsuarioNComponent {
  usuario : Usuario = new Usuario();
  

  constructor(private usuarioService : UsuarioService, private router: Router){
    const navigation = this.router.getCurrentNavigation();
  if (navigation && navigation.extras.state) {
    const state = navigation.extras.state as {usuario: Usuario};
    console.log(state["usuario"]);
    this.usuario=navigation.extras.state["usuario"];
    console.log(this.usuario);
   
  }


  
  /*Info(){
    this.usuarioService.listOne().subscribe((resusuario: any) =>
  }*/


}
}
