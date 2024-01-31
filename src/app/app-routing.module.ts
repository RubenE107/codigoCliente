import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsuarioNComponent } from './components/usuario-n/usuario-n.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Si la ruta es '', redirige a '/login'. 'pathMatch: 'full'' asegura que toda la URL debe estar vacía para que se haga la redirección.
  { path: 'login', component: LoginComponent }, 
  {path: 'principal', component: PrincipalComponent,
  children:[{ path: 'admin', component: AdminComponent},
  { path: 'usuario', component: UsuarioNComponent  },
  { path:'descuento', component: DescuentosComponent},
  { path:'membresias', component: MembresiasComponent},
  { path:'ingresos', component: IngresosComponent},







]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
