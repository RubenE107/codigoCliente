import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsuarioNComponent } from './components/usuario-n/usuario-n.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Si la ruta es '', redirige a '/login'. 'pathMatch: 'full'' asegura que toda la URL debe estar vacía para que se haga la redirección.
  { path: 'login', component: LoginComponent }, 
  { path: 'admin', component: AdminComponent},
  { path: 'usuario', component: UsuarioNComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
