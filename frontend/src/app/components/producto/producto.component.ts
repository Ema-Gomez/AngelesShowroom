import { CarritoService } from './../../services/carrito.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { iProductos, iItem } from './../../models/productos.model';
import { Component, Input, OnInit } from '@angular/core';
import {Location} from "@angular/common"

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  nombreCategoria:string;
  productoId:string;
  nombreProducto:string
  producto:iItem;
  constructor(private route:ActivatedRoute, private productoService:ProductosService, private carritoService:CarritoService, private location:Location) {
  }

  async ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.nombreCategoria = params.get('nombreCategoria');
      this.productoId = params.get('idProducto')
      this.obtenerProducto();
    }) 
  }
  async obtenerProducto(){
    const producto:any = await this.productoService.get(`productos/${this.nombreCategoria}/${this.productoId}`)
    this.producto = producto;
  }
 
 agregarProducto(producto:iItem){
   this.carritoService.agregarAlCarrito(producto)
 }
 volverAtras(){
   this.location.back();
 }
}
