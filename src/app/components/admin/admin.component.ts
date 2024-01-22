import { Component } from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare var $: any; // Declaración de jQuery
@Component({
  selector: 'app-usuario',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  usuarios : Usuario [] = [];
  usuario :Usuario= new Usuario();
  constructor(private usuarioService : UsuarioService, private router: Router){
    
    this.usuarioService.list().subscribe((resusuario: any) =>
    {
      this.usuarios = resusuario;  
      //console.log(resusuario);
      console.log(this.usuarios)
    },
    err => console.error(err)
    );
  }
  ngOnInit(): void 
  {
    console.log("entro");
    $(document).ready(function()
    {
      $('.modal').modal();

    });
    this.usuarioService.list().subscribe((resUsuario: any) =>
    {
      this.usuarios = resUsuario;  
      console.log(this.usuarios);
    },
    err => console.error(err)
    );
  }

  eliminarUsuario(UsuarioID : any){
    console.log("Click en eliminar usuario");
    console.log("Identificador del usuario: ",UsuarioID);
    Swal.fire({
      title: "¿Estás seguro bro?",
      text: "No es posible revertir este!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(UsuarioID).subscribe((resusuario: any) =>
        {
          console.log("resusuario: ", resusuario);
          Swal.fire({
            title: "Eliminado!",
            text: "Tu archivo ha sido eliminado.",
            icon: "success"
          }).then(() => {
            // Recarga automáticamente la página después de cerrar Swal
            location.reload();
          });
        },
        err => console.error(err)
        );

      
      }
    });
  }
  Edit(usuario_id:any) {
   
    
    console.log(usuario_id);
    this.usuarioService.listOne(usuario_id).subscribe((resUsuario: any) =>
    {
      console.log("resusuario: ", resUsuario);
      this.usuario = resUsuario;  
      console.log(this.usuario)
      $('#Editar').modal();
      $("#Editar").modal("open");
    },
    err => console.error(err)
    );
 
}
check(){
  console.log("usuario: ", this.usuario);
  if(this.usuario.id=-1 || this.usuario.Nombre === "" || this.usuario.Apellido === "" || this.usuario.correo === "" || this.usuario.contrasena === "" || this.usuario.FechaNacimiento === null || this.usuario.Teléfono ===""){
  console.log("Error, campos vacios");
  }else{console.log("Usuario creado correctamente");}
}

  metodoPrueba(){
    console.log(this.usuarios);
  }
}
