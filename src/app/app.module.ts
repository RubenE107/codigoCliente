import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule,DatePipe } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { UsuarioNComponent } from './components/usuario-n/usuario-n.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UsuarioNComponent,
    PrincipalComponent,
    NavigationComponent,
    FooterComponent,
    IngresosComponent,
    MembresiasComponent,
    DescuentosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
