import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
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
  
  logout() {
    localStorage.removeItem("authorization");
  }
}
