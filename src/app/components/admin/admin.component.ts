import { Component, OnInit} from '@angular/core';
import { UsuarioService} from './../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { rol } from '../../models/rol';
import { RolesService } from '../../services/roles.service';
declare var $: any; // Declaración de jQuery
@Component({
  selector: 'app-usuario',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  usuarios : Usuario [] = [];
  usuario :Usuario= new Usuario();
  roles: rol []=  [];
  rol:Usuario= new Usuario();
  constructor(private rolesService:RolesService,private usuarioService : UsuarioService, private router: Router){
    
    this.usuarioService.list().subscribe((resusuario: any) =>
    {
      this.usuarios = resusuario;  
      //console.log(resusuario);
      console.log(this.usuarios)
    },
    err => console.error(err)
    );
    this.rolesService.list().subscribe((resroles: any) =>
    {
      this.rol = resroles;  
      //console.log(resusuario);
      console.log(this.rol)
    },
    err => console.error(err)
    );
  }
  ngOnInit(): void 
  {
    $('.dropdown-trigger').dropdown();
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
            location.reload();});
        },
        err => console.error(err)
        );

      
      }
    });
  }
  Edit(usuario_id:any) {
   
    
    console.log(usuario_id);
    this.usuarioService.listOne(usuario_id).subscribe((resusuario: any) =>
    {
      this.usuario.id = resusuario.RolID;
      this.usuario.UsuarioID = resusuario.UsuarioID;
    });

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

initDatepicker(date?:any){
  if(date){
    $("#FechaNacimiento").datepicker({format: 'yyyy-mm-dd',default: date,});
  }
}
ActualizarFecha(date?:any){
  if(date){
    this.usuario.FechaNacimiento=date;
    console.log(this.usuario.FechaNacimiento);
    console.log(this.usuario);
  }
}
EditA(usuario_id:any) {
   
    
  console.log(usuario_id);
  this.usuarioService.act(this.usuario.UsuarioID,this.usuario.Nombre,this.usuario.Apellido,this.usuario.correo,this.usuario.Contrasena,this.usuario.FechaNacimiento,this.usuario.Telefono).subscribe((resusuario: any) =>
  {
    $("#Editar1").modal("close");
  },
  err => console.error(err)
  );

}

Reg(id:any) {
   
  console.log(this.usuario)
  $('#Registrar').modal();
  $("#Registrar").modal("open");


}
check(id:any){
  console.log("usuario: ", this.usuario);
  if( this.usuario.Nombre === "" || this.usuario.Apellido === "" || this.usuario.correo === "" || this.usuario.Contrasena === "" || this.usuario.FechaNacimiento === null || this.usuario.Telefono ===""){
  console.log("Error, campos vacios");
  
  
}else{
  console.log("usuario: ", this.usuario);
  console.log("Actualizando");
  this.usuarioService.act(id,this.usuario.Nombre,this.usuario.Apellido,this.usuario.correo,this.usuario.Contrasena,this.usuario.FechaNacimiento,this.usuario.Telefono).subscribe((resUsuario: any) => {
    $("#Editar").modal("close");
  },err => console.error(err)
  );
  
}
}
}
