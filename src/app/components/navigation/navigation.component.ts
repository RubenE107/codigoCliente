import { Component,OnInit } from '@angular/core';
declare var $: any; // Declaración de jQuery
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  ngOnInit(): void 
  {
    $('.dropdown-trigger').dropdown();
    $('.tooltipped').tooltip();
  }
  descuento(){

  }
  membresia(){

  }
  ingresos(){
    
  }
}
