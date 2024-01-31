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
  }

  constructor(private usuarioService : UsuarioService, private router: Router){


}
}
