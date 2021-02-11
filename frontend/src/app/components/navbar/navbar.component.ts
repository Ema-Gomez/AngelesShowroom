import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  bars = faBars
  categorias: any

  constructor(private service:NavbarService) {
  }
  
  async ngOnInit() { 
    this.traerCategorias();
  }

  async traerCategorias() {
    this.categorias = await this.service.traerCategorias("categorias")
    console.log(this.categorias) 
  }

  abrirNav(){
    document.getElementById('nav').classList.toggle("open")
    document.getElementById('fondo').classList.toggle('oscuro')
  }
  cerrarNav(){
    document.getElementById('nav').classList.remove('open')
    document.getElementById('fondo').classList.remove('oscuro')
    
  }

  
  logout() {
    localStorage.removeItem("authorization");
  }
}
