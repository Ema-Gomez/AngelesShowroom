import { ProductosCategoriaComponent } from './../productos-categoria/productos-categoria.component';
import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  mostrar:boolean = true
  baseUrl = ["/login", "/admin","/registro","/admin/inicio","/admin/productos","/checkout", "/checkout/finalizar"]
  activeUrl: any;
  claseNav:string;
  claseFondo:String;
  claseCarrito:string;
  categorias:any;
  itemsTotales:number = 0;

  constructor(private service:NavbarService, private router:Router, private carritoService:CarritoService) {
  }

  
  async ngOnInit() {
    if (isPlatformBrowser) {
      this.router.events
      .subscribe(() => {
          this.activeUrl = this.router.routerState.snapshot.url;
          this.ocultar(this.activeUrl);

        })
    }

    this.carritoService.carrito$.subscribe(itemsCarrito => {
      if(itemsCarrito){
        this.itemsTotales = itemsCarrito.length;
      }
    })
    
    this.traerCategorias();
    
  }

  async traerCategorias() {
    this.categorias = await this.service.traerCategorias("categorias")
    console.log(this.categorias) 
  }

  abrirNav(){
    this.claseNav = "open"
    this.claseFondo = "oscuro"
  }
  cerrarNav(){
    this.claseNav = ""
    this.claseFondo = ""  
  }
  abrirCarrito(){
    this.claseCarrito = "abierto"
    this.claseFondo = "oscuro"
  
  }
  cerrarCarrito(){
    this.claseCarrito = ""
    this.claseFondo = ""
  
  }

  ocultar (activeUrl) {
      if (this.baseUrl.includes(activeUrl)) {
        this.mostrar= false      
      }    
    } 
  }


  
